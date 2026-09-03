"use client";

import * as React from "react";
import { Activity, GitCommit, UserPlus, ShieldAlert, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ActivityFeed() {
  const activities = [
    {
      id: "1",
      user: "Sarah Jenkins",
      action: "deployed new release",
      target: "v2.4.0 to production",
      timestamp: "12m ago",
      icon: Zap,
      color: "text-amber-500 bg-amber-500/10",
    },
    {
      id: "2",
      user: "David Chen",
      action: "pushed 4 commits to",
      target: "feature/shadcn-sidebar",
      timestamp: "45m ago",
      icon: GitCommit,
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      id: "3",
      user: "Emma Watson",
      action: "invited new member",
      target: "emma.w@acme.com",
      timestamp: "2h ago",
      icon: UserPlus,
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      id: "4",
      user: "System Security",
      action: "detected new login from",
      target: "San Francisco, US (IP: 192.168.1.1)",
      timestamp: "5h ago",
      icon: ShieldAlert,
      color: "text-purple-500 bg-purple-500/10",
    },
  ];

  return (
    <Card className="col-span-full border lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
        <div>
          <CardTitle className="text-base font-semibold">
            Live Activity Log
          </CardTitle>
          <CardDescription className="text-xs">
            Recent events across your workspace
          </CardDescription>
        </div>
        <Activity className="size-4 animate-pulse text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-3 pt-4">
        <div className="relative ml-2 space-y-4 border-l border-muted pl-4">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex items-start justify-between text-xs"
              >
                <span
                  className={`absolute top-0.5 -left-6.5 flex size-5 items-center justify-center rounded-full border bg-background ${item.color}`}
                >
                  <Icon className="size-3" />
                </span>
                <div className="space-y-0.5">
                  <p className="font-medium text-foreground">
                    <span>{item.user}</span>{" "}
                    <span className="font-normal text-muted-foreground">
                      {item.action}
                    </span>{" "}
                    <span className="font-semibold text-primary">
                      {item.target}
                    </span>
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {item.timestamp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
