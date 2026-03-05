import Hero from "@/components/Hero";
import About from "@/components/About";
import PersonalProjects from "@/components/PersonalProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PersonalProjects />
      <Contact />
    </main>
  );
}
