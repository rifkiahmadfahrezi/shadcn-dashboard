"use client";

import * as React from "react";
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MetricCards() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      timeframe: "from last month",
      icon: DollarSign,
      color: "text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/20",
    },
    {
      title: "Subscriptions",
      value: "+2,350",
      change: "+180.1%",
      trend: "up",
      timeframe: "from last month",
      icon: Users,
      color: "text-blue-500 bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
      title: "Sales Orders",
      value: "+12,234",
      change: "+19.0%",
      trend: "up",
      timeframe: "from last month",
      icon: CreditCard,
      color: "text-indigo-500 bg-indigo-500/10 dark:bg-indigo-500/20",
    },
    {
      title: "Active Now",
      value: "573",
      change: "-4.2%",
      trend: "down",
      timeframe: "since last hour",
      icon: Activity,
      color: "text-amber-500 bg-amber-500/10 dark:bg-amber-500/20",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const isUp = metric.trend === "up";

        return (
          <Card
            key={metric.title}
            className="relative overflow-hidden border transition-all hover:shadow-md"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                {metric.title}
              </CardTitle>
              <div
                className={`flex size-8 items-center justify-center rounded-lg ${metric.color}`}
              >
                <Icon className="size-4" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1.5">
              <div className="text-2xl font-bold tracking-tight">
                {metric.value}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Badge
                  variant={isUp ? "secondary" : "destructive"}
                  className={`gap-0.5 px-1.5 py-0 text-[10px] font-semibold ${
                    isUp
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                      : ""
                  }`}
                >
                  {isUp ? (
                    <ArrowUpRight className="size-3" />
                  ) : (
                    <ArrowDownRight className="size-3" />
                  )}
                  {metric.change}
                </Badge>
                <span className="truncate text-[11px]">{metric.timeframe}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
