# Blender 4.x/5.x. Scripting > Run Script. Busto con drelos; los de la izquierda del personaje, alternados, en azul #3B82F6.
import bpy, bmesh, math, random, os
from mathutils import Vector

random.seed(11)
bpy.ops.wm.read_factory_settings(use_empty=True)
HALF_BLUE = True
N_STRANDS = 420

def mat(name, hexcol, rough=.5, emit=0.0, sss=0.0):
    h = hexcol.lstrip("#"); c = [(int(h[i:i+2], 16) / 255) ** 2.2 for i in (0, 2, 4)] + [1]
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = c; b.inputs["Roughness"].default_value = rough
    if emit:
        b.inputs["Emission Color"].default_value = c; b.inputs["Emission Strength"].default_value = emit
    if sss and "Subsurface Weight" in b.inputs: b.inputs["Subsurface Weight"].default_value = sss
    return m

SKIN = mat("piel", "#C98B5E", .5, sss=.15); HAIR = mat("pelo", "#0B1020", .3)
BLUE = mat("azul_sitio", "#2563EB", .3, .55); GOLD = mat("punta", "#F5C26B", .3)
SHIRT = mat("camisa", "#0B0F1A", .85); WHITE = mat("blanco", "#FFFFFF", .2)
IRIS = mat("iris", "#1A0F0A", .15); LIP = mat("labio", "#9A5A3A", .4); GOLDM = mat("arete", "#F5C26B", .2)

RX, RY, RZ = .82, .9, 1.05
def surf(x, z):
    v = 1 - (x / RX) ** 2 - (z / RZ) ** 2
    return -RY * math.sqrt(max(v, 0))

def prim(kind, loc, scale, m, rot=(0, 0, 0), **kw):
    getattr(bpy.ops.mesh, f"primitive_{kind}_add")(location=loc, rotation=rot, **kw)
    o = bpy.context.object; o.scale = scale; o.data.materials.append(m)
    if kind == "uv_sphere": bpy.ops.object.shade_smooth()
    return o

head = prim("uv_sphere", (0, 0, 0), (RX, RY, RZ), SKIN, radius=1, segments=64, ring_count=40)
# mandíbula más angulosa
prim("cylinder", (0, .05, -1.1), (.34, .34, .75), SKIN, radius=1, depth=1)
prim("uv_sphere", (0, .15, -2.05), (1.3, .62, .9), SHIRT, radius=1, segments=48, ring_count=24)
# cuello de camisa
for sx in (-1, 1):
    prim("cube", (.3 * sx, -.38, -1.42), (.42, .05, .22), SHIRT, rot=(math.radians(-20), 0, math.radians(-35 * sx)), size=1)

# cejas
for sx in (-1, 1):
    x, z = .3 * sx, .36
    prim("cube", (x, surf(x, z) - .02, z), (.26, .05, .045), HAIR, rot=(0, 0, math.radians(-7 * sx)), size=1)
# ojos
for sx in (-1, 1):
    x, z = .3 * sx, .17
    y = surf(x, z)
    prim("uv_sphere", (x, y + .03, z), (.13, .07, .08), WHITE, radius=1, segments=24, ring_count=12)
    prim("uv_sphere", (x, y - .005, z), (.065, .04, .065), IRIS, radius=1, segments=24, ring_count=12)
# nariz
prim("uv_sphere", (0, surf(0, -.12) - .06, -.12), (.075, .1, .12), SKIN, radius=1, segments=24, ring_count=16)
for sx in (-1, 1):
    prim("uv_sphere", (.1 * sx, surf(.1, -.22) - .06, -.23), (.045, .05, .04), SKIN, radius=1, segments=16, ring_count=10)
# boca
prim("uv_sphere", (0, surf(0, -.45) - .03, -.45), (.22, .06, .045), LIP, radius=1, segments=24, ring_count=12)
prim("uv_sphere", (0, surf(0, -.52) - .02, -.52), (.17, .05, .04), LIP, radius=1, segments=24, ring_count=12)
# orejas y aretes (aretes de oro)
for sx in (-1, 1):
    prim("uv_sphere", (.8 * sx, .02, -.02), (.07, .18, .26), SKIN, radius=1, segments=24, ring_count=16)
    prim("torus", (.82 * sx, 0, -.3), (1, 1, 1), GOLDM, rot=(0, math.radians(90), 0), major_radius=.05, minor_radius=.012)

# casquete de cuero cabelludo (sin la cara)
bpy.ops.mesh.primitive_uv_sphere_add(radius=1, segments=64, ring_count=40, location=(0, .02, .02))
cap = bpy.context.object; cap.scale = (RX * 1.03, RY * 1.03, RZ * 1.03); cap.data.materials.append(HAIR)
bm = bmesh.new(); bm.from_mesh(cap.data)
bmesh.ops.delete(bm, geom=[v for v in bm.verts if (v.co.z < .02 or (v.co.y < -.2 and v.co.z < .58))], context="VERTS")
bm.to_mesh(cap.data); bm.free(); bpy.ops.object.shade_smooth()

def helix(root, length, r0, turns, amp, sag):
    n = 56; pts = []
    n_xy = Vector((root.x, root.y, 0)); n_xy = n_xy.normalized() if n_xy.length > .01 else Vector((0, 1, 0))
    for i in range(n):
        t = i / (n - 1); a = t * turns * 2 * math.pi
        bulge = n_xy * (.16 * math.sin(min(t * 2.2, 1) * math.pi / 2) + sag * t)
        p = root + bulge + Vector((math.cos(a) * amp, math.sin(a) * amp, -t * length))
        pts.append((p, max(.38, 1 - .5 * t * t)))
    return pts

def curve(points, m, r0, name="drelo"):
    cu = bpy.data.curves.new(name, "CURVE"); cu.dimensions = "3D"
    sp = cu.splines.new("POLY"); sp.points.add(len(points) - 1)
    for p, (v, w) in zip(sp.points, points): p.co = (v.x, v.y, v.z, 1); p.radius = w
    cu.bevel_depth = r0; cu.bevel_resolution = 3; cu.use_fill_caps = True
    o = bpy.data.objects.new(name, cu); bpy.context.collection.objects.link(o); o.data.materials.append(m)
    return o

def sample_root():
    while True:
        az = random.uniform(0, 2 * math.pi); el = math.asin(random.uniform(-.05, 1))
        x = math.cos(az) * math.cos(el) * RX * 1.02; y = math.sin(az) * math.cos(el) * RY * 1.02; z = math.sin(el) * RZ * 1.02
        if z < .12: continue
        if y < -.2 and z < .6: continue
        return Vector((x, y + .02, z + .02))

count = blue_n = 0
for _ in range(N_STRANDS):
    root = sample_root()
    side = abs(root.x) / RX
    length = random.uniform(1.0, 1.7) * (.55 + .6 * side) * (1.1 if root.y > 0 else 1)
    if root.y < -.1:
        length = max(.2, min(length, root.z - .52)) if abs(root.x) < .62 else length * .8
    pts = helix(root, length, .05, random.uniform(7, 10), .035, sag=(.12 if root.x > 0 else -.12) * side * (2.5 if root.y < -.1 else 1))
    blue = HALF_BLUE and root.x > 0 and count % 2 == 0
    cut = int(len(pts) * .8)
    curve(pts[:cut + 1], BLUE if blue else HAIR, .034)
    if not blue: curve(pts[cut:], GOLD, .034)
    else: curve(pts[cut:], BLUE, .034)
    count += 1; blue_n += blue

# escena
def light(kind, loc, energy, color=(1, 1, 1)):
    bpy.ops.object.light_add(type=kind, location=loc); o = bpy.context.object
    o.data.energy = energy; o.data.color = color
    o.rotation_euler = (Vector((0, 0, .2)) - Vector(loc)).to_track_quat("-Z", "Y").to_euler()
light("AREA", (2.8, -3.2, 2.6), 700); light("AREA", (-3.2, 2.2, 1.4), 400, (.23, .51, .96)); light("AREA", (0, 3, 3), 300)
bpy.ops.object.camera_add(location=(0, -6.8, -.4)); cam = bpy.context.object
cam.rotation_euler = (math.radians(90), 0, 0); cam.data.lens = 60; bpy.context.scene.camera = cam
w = bpy.data.worlds.new("w"); w.use_nodes = True; w.node_tree.nodes["Background"].inputs[0].default_value = (.006, .008, .018, 1)
bpy.context.scene.world = w
sc = bpy.context.scene
for eng in ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE"):
    try: sc.render.engine = eng; break
    except TypeError: pass
sc.render.resolution_x, sc.render.resolution_y = 1200, 1400
print(f"Listo: {count} drelos, {blue_n} azules")

if bpy.app.background:
    sc.render.filepath = os.path.join(os.path.dirname(bpy.data.filepath or __file__), "fran-render.png")
    bpy.ops.render.render(write_still=True)
