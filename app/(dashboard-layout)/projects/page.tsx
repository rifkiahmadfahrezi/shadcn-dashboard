import * as React from "react";
import { ProjectProgress } from "@/components/dashboard/overview/project-progress";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Projects Management
        </h1>
        <p className="text-xs text-muted-foreground">
          Manage project tasks, team assignments, and delivery deadlines.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ProjectProgress />
      </div>
    </div>
  );
}
