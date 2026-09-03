"use client";

import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function ProjectProgress() {
  const projects = [
    {
      name: "Dashboard Redesign v2.0",
      category: "Frontend Dev",
      progress: 78,
      dueDate: "Sep 15",
      status: "In Progress",
      team: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      ],
    },
    {
      name: "Mobile App API Integration",
      category: "Backend",
      progress: 92,
      dueDate: "Sep 10",
      status: "Review",
      team: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      ],
    },
    {
      name: "Payment Gateway Migration",
      category: "Infrastructure",
      progress: 45,
      dueDate: "Sep 28",
      status: "In Progress",
      team: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      ],
    },
  ];

  return (
    <Card className="col-span-full border lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
        <div>
          <CardTitle className="text-base font-semibold">
            Active Projects
          </CardTitle>
          <CardDescription className="text-xs">
            Team progress and upcoming deadlines
          </CardDescription>
        </div>
        <Badge variant="outline" className="text-[10px]">
          3 Active
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4 pt-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="space-y-2 rounded-lg border bg-card p-3 transition-colors hover:bg-muted/30"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-xs font-semibold text-foreground">
                  {project.name}
                </h4>
                <span className="text-[10px] text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <Badge variant="secondary" className="text-[10px] font-medium">
                {project.status}
              </Badge>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-1.5" />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex -space-x-2">
                {project.team.map((img, idx) => (
                  <Avatar
                    key={idx}
                    className="size-6 border-2 border-background"
                  >
                    <AvatarImage src={img} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
                <Calendar className="size-3" />
                <span>Due {project.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
