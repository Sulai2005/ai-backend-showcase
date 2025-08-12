import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "Flask", "PostgreSQL", "Supabase", "Redis", "Docker"],
  },
  {
    title: "AI/ML",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Jupyter"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "REST", "GraphQL (basics)", "CI/CD", "Linux"],
  },
];

export default function Skills() {
  return (
    <section aria-labelledby="skills" className="py-12 md:py-16">
      <div className="container mx-auto">
        <h2 id="skills" className="text-2xl font-semibold tracking-tight">Core Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {sections.map((s) => (
            <Card key={s.title} className="animate-fade-in">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <Badge key={item} variant="secondary" className="hover-scale">{item}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
