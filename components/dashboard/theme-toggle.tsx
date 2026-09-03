"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    (cb) => {
      window.addEventListener("storage", cb);
      return () => window.removeEventListener("storage", cb);
    },
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-sm" className="size-8">
        <Sun className="size-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="size-8 cursor-pointer text-muted-foreground hover:text-foreground"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="size-4 scale-100 rotate-0 text-amber-400 transition-transform" />
      ) : (
        <Moon className="size-4 scale-100 rotate-0 text-slate-700 transition-transform dark:text-slate-200" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
