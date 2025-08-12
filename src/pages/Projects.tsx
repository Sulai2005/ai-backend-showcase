import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Edit your projects here
const projects = [
  {
    title: "ML Inference API",
    description: "FastAPI microservice serving a transformer model with batching and caching.",
    tags: ["Python", "FastAPI", "PyTorch", "Redis"],
    demo: "#",
    github: "#",
  },
  {
    title: "Data Pipeline",
    description: "ETL pipeline ingesting CSVs to Postgres with validation and scheduling.",
    tags: ["Python", "Pandas", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "Realtime Metrics Dashboard",
    description: "React + Recharts dashboard for monitoring model metrics in real-time.",
    tags: ["React", "Recharts", "WebSockets"],
    demo: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | AI/ML Portfolio";
  }, []);

  return (
    <main className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">A selection of work demonstrating backend and AI/ML skills.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="animate-fade-in hover-scale">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline"><a href={p.demo} target="_blank" rel="noreferrer">Open Link</a></Button>
              <Button asChild variant="hero"><a href={p.github} target="_blank" rel="noreferrer">GitHub</a></Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
