import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";

const GRADIENT_KEY = 'gradient-theme';
const THEMES = [
  { id: 'gradient-ocean', label: 'Ocean' },
  { id: 'gradient-sunset', label: 'Sunset' },
];

export default function GradientToggle() {
  const [theme, setTheme] = useState<string>(THEMES[0].id);

  useEffect(() => {
    const saved = localStorage.getItem(GRADIENT_KEY) || THEMES[0].id;
    applyTheme(saved);
  }, []);

  const applyTheme = (name: string) => {
    setTheme(name);
    document.documentElement.classList.remove(...THEMES.map(t => t.id));
    document.documentElement.classList.add(name);
    localStorage.setItem(GRADIENT_KEY, name);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle gradient theme" className="hover-scale">
          <Palette className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEMES.map(t => (
          <DropdownMenuItem key={t.id} onClick={() => applyTheme(t.id)}>
            {t.label} {theme === t.id ? '✓' : ''}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
