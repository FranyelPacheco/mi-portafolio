import sys
from PIL import Image
import numpy as np
src, out, W = sys.argv[1], sys.argv[2], int(sys.argv[3])
im = Image.open(src).convert("RGB")
k = im.size[0] / 1494
box = tuple(int(v * k) for v in (130, 20, 1420, 1760))
im = im.crop(box)
H = round(W * im.size[1] / im.size[0])
sm = im.resize((W, H), Image.LANCZOS)
a = np.asarray(sm).astype(float)
lum = a @ [0.299, 0.587, 0.114]
cw = (box[2] - box[0]); ch = (box[3] - box[1])
yy, xx = np.mgrid[0:H, 0:W]
fx, fy = (xx + .5) / W, (yy + .5) / H
white = (a.min(axis=2) > 170) & ~((a[..., 0] - a[..., 2]) > 40)
for _ in range(2):
    p = np.pad(white, 1, mode="edge")
    white = white | p[:-2, 1:-1] | p[2:, 1:-1] | p[1:-1, :-2] | p[1:-1, 2:]
    white &= (a.min(axis=2) > 110)
face = (fx > (470 - 130) / 1290 + .02) & (fx < (1040 - 130) / 1290 - .02) & (fy > (540 - 20) / 1740) & (fy < (1240 - 20) / 1740)
hair = (lum < 95) & ~face & (fy < (1300 - 20) / 1740) & ~white
right = fx > (747 - 130) / 1290
band = ((xx // 3) % 2 == 0)
blue = hair & right & band
ramp = np.array([[8, 22, 70], [29, 78, 216], [59, 130, 246], [147, 197, 253]], float)
t = np.clip((lum - 0) / 95, 0, 1) * 3
lo = np.floor(t).astype(int).clip(0, 2); fr = (t - lo)[..., None]
bl = ramp[lo] * (1 - fr) + ramp[lo + 1] * fr
a[blue] = bl[blue]
a[hair & ~blue] = a[hair & ~blue] * 1.0 + np.array([6, 10, 28])
bg = np.array([12, 17, 30], float)
a[white] = bg
img = Image.fromarray(a.clip(0, 255).astype("uint8"))
img = img.quantize(colors=28, method=Image.MEDIANCUT, dither=Image.NONE).convert("RGB")
img.save(out.replace(".png", f"-{W}px.png"))
img.resize((W * 10, H * 10), Image.NEAREST).save(out)
print(img.size)
