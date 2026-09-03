import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const techStack = [
    {
      name: "Next.js 16",
      description: "App Router, React 19 support, and fast Server Components",
      badge: "Framework",
    },
    {
      name: "shadcn/ui",
      description: "Accessible, composable UI components built on Base UI",
      badge: "UI Components",
    },
    {
      name: "TypeScript 5",
      description: "Full end-to-end type safety with strict mode enabled",
      badge: "Language",
    },
    {
      name: "xior + TanStack Query",
      description:
        "Lightweight HTTP client with powerful asynchronous state management",
      badge: "Data Fetching",
    },
  ];

  const features = [
    {
      title: "Oxlint & Oxfmt Setup",
      description: "Pre-configured format on save with Tailwind class sorting.",
    },
    {
      title: "Husky & Lint-Staged",
      description:
        "Automatic pre-commit hooks to keep code clean and error-free.",
    },
    {
      title: "API & Query Provider",
      description: "Pre-configured xior instance and TanStack Query provider.",
    },
    {
      title: "Clean Directory Structure",
      description: "Organized layout with path aliases (@/lib, @/providers).",
    },
  ];

  const commands = [
    { label: "Start dev server", command: "bun dev" },
    { label: "Format code", command: "bun run format" },
    { label: "Lint code", command: "bun run lint" },
    { label: "Type check", command: "bun run type-check" },
    { label: "Production build", command: "bun run build" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-20">
        {/* Header Section */}
        <div className="flex max-w-3xl flex-col items-center space-y-6 text-center">
          <Badge
            variant="outline"
            className="gap-2 rounded-full border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="flex size-2 animate-pulse rounded-full bg-emerald-500" />
            Next.js Starter Boilerplate Ready
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Build faster with a modern Next.js starter setup
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Pre-configured with linter, formatter, type checker, git hooks, HTTP
            client, and React Query so you don&apos;t have to build from
            scratch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              size="lg"
              render={
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Next.js Docs
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={
                <a
                  href="https://tanstack.com/query/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              TanStack Query Docs
            </Button>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20 w-full">
          <h2 className="mb-8 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Core Tech Stack
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <Card
                key={tech.name}
                className="group justify-between transition-colors hover:border-primary/40"
              >
                <CardHeader className="gap-4">
                  <Badge variant="secondary" className="w-fit">
                    {tech.badge}
                  </Badge>
                  <div>
                    <CardTitle className="text-lg transition-colors group-hover:text-primary">
                      {tech.name}
                    </CardTitle>
                    <CardDescription className="mt-2 leading-relaxed">
                      {tech.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 w-full">
          <h2 className="mb-8 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Included Features & Pre-configurations
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="p-5 text-left">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  <h4 className="text-sm font-medium text-card-foreground">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Code Block */}
        <div className="mt-16 w-full max-w-2xl">
          <Card className="overflow-hidden py-0 shadow-2xl">
            <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                Available Commands
              </span>
            </div>
            <CardContent className="space-y-3 py-6 font-mono text-xs">
              {commands.map((c, i) => (
                <div key={c.command}>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground"># {c.label}</span>
                    <span className="text-primary">{c.command}</span>
                  </div>
                  {i < commands.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t py-6 text-center text-xs text-muted-foreground">
        Next.js Starter Template &bull; Pre-configured for speed and quality
      </footer>
    </div>
  );
}
