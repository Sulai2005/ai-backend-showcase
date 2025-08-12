import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto py-16 md:py-24">
        <div className="rounded-2xl bg-gradient-primary p-6 md:p-12 shadow-elegant">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-primary-foreground">
                AI/ML Backend Intern Portfolio
              </h1>
              <p className="mt-4 text-primary-foreground/90">
                I build robust backend services and integrate AI/ML workflows. 5+ months hands-on experience shipping APIs, data pipelines, and model-backed features.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="hero" className="hover-scale">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="hover-scale">
                  <a href="#" aria-label="GitHub Profile">
                    <Github className="mr-2" /> GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="h-56 md:h-64 rounded-xl bg-background/30 backdrop-blur border border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
