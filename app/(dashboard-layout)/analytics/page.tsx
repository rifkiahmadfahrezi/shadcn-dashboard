import * as React from "react";
import { RevenueChart } from "@/components/dashboard/overview/revenue-chart";
import { MetricCards } from "@/components/dashboard/overview/metric-cards";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Analytics Overview
        </h1>
        <p className="text-xs text-muted-foreground">
          Comprehensive performance data and revenue metrics.
        </p>
      </div>
      <MetricCards />
      <div className="grid gap-6">
        <RevenueChart />
      </div>
    </div>
  );
}
