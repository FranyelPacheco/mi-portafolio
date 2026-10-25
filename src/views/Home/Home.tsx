import { lazy, Suspense } from "react";
import HeroFolderSection from "../../features/hero/components/HeroFolderSection";
import TechMarquee from "../../features/hero/components/TechMarquee";

const ProjectShowcase = lazy(() => import("../../features/projects/components/ProjectShowcase"));
const WhyMeVisualSection = lazy(() => import("../../features/whyme/components/WhyMeVisualSection"));
const ToolsVisualSection = lazy(() => import("../../features/stack/components/ToolsVisualSection"));
const AboutVisualSection = lazy(() => import("../../features/about/components/AboutVisualSection"));
const Contact = lazy(() => import("../Contact/Contact"));

// Reserva altura para que los anclas (#proyectos, #contacto) no salten mientras carga el chunk
const Placeholder = ({ id, minH }: { id: string; minH: string }) => (
  <section id={id} aria-busy="true" className={minH} />
);

const Home = () => (
  <>
    <HeroFolderSection />
    <TechMarquee />
    <Suspense fallback={<Placeholder id="proyectos" minH="min-h-[1100px]" />}>
      <ProjectShowcase />
    </Suspense>
    <Suspense fallback={<Placeholder id="por-que-yo" minH="min-h-[900px]" />}>
      <WhyMeVisualSection />
    </Suspense>
    <Suspense fallback={<Placeholder id="herramientas" minH="min-h-[700px]" />}>
      <ToolsVisualSection />
    </Suspense>
    <Suspense fallback={<Placeholder id="sobre-mi" minH="min-h-[700px]" />}>
      <AboutVisualSection />
    </Suspense>
    <Suspense fallback={<Placeholder id="contacto" minH="min-h-[800px]" />}>
      <Contact />
    </Suspense>
  </>
);

export default Home;
