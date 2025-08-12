import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "AI/ML Backend Intern Portfolio";
  }, []);

  return (
    <main id="home">
      <Hero />
      <Skills />
      <Experience />
      <ProjectsPreview />
      <section id="contact" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-2 text-muted-foreground">Add your contact form or email link here.</p>
        </div>
      </section>
    </main>
  );
};

export default Index;
