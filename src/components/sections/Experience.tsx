import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  return (
    <section aria-labelledby="experience" className="py-12 md:py-16">
      <div className="container mx-auto">
        <h2 id="experience" className="text-2xl font-semibold tracking-tight">Experience</h2>
        <Card className="mt-6 animate-fade-in">
          <CardHeader>
            <CardTitle>AI/ML Backend Intern</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">5 months building backend APIs, data pipelines, and integrating ML models into production-like features. Focus on reliability, testing, and performance.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
