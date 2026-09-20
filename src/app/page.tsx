import { Loader } from "@/components/Loader";
import { Nav } from "@/components/ui/Nav";
import { Rail } from "@/components/ui/Rail";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects/Projects";
import { Interests } from "@/components/Interests/Interests";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Desk } from "@/components/Desk";

export default function Home() {
  return (
    <main className="relative z-10">
      <Loader />
      <Nav />
      <Rail />
      <Hero />
      <About />
      <Projects />
      <Interests />
      <Skills />
      <Timeline />
      <Contact />
      <Desk />
      <Footer />
    </main>
  );
}
