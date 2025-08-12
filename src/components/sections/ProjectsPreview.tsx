import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const preview = [
  { title: "ML API Service", desc: "A FastAPI service exposing a trained model.", link: "/projects" },
  { title: "ETL Pipeline", desc: "Data ingestion and transformation with orchestration.", link: "/projects" },
  { title: "Realtime Dashboard", desc: "Web dashboard visualizing model outputs.", link: "/projects" },
];

export default function ProjectsPreview() {
  return (
    <section aria-labelledby="projects" className="py-12 md:py-16">
      <div className="container mx-auto">
        <div className="flex items-end justify-between">
          <h2 id="projects" className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <Button asChild variant="link"><Link to="/projects">View all</Link></Button>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {preview.map((p) => (
            <Card key={p.title} className="hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline"><Link to={p.link}>See details</Link></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
