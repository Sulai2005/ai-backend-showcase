import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import GradientToggle from "@/components/GradientToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight hover-scale">
          <span className="text-gradient">AI/ML Portfolio</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <NavLink to="/" className={({isActive}) => `text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground story-link`}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => `text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground story-link`}>
            Projects
          </NavLink>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground story-link">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <GradientToggle />
          <ThemeToggle />
          <Button asChild variant="hero" className="hidden md:inline-flex">
            <a href="/projects" aria-label="View Projects">View Projects</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
