"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RevenueChart() {
  const [activeRange, setActiveRange] = React.useState<"7d" | "30d" | "1y">(
    "30d"
  );

  const monthlyData = [
    { month: "Jan", revenue: 2800, sales: 1900 },
    { month: "Feb", revenue: 3400, sales: 2300 },
    { month: "Mar", revenue: 4200, sales: 2800 },
    { month: "Apr", revenue: 3900, sales: 2600 },
    { month: "May", revenue: 5100, sales: 3400 },
    { month: "Jun", revenue: 5800, sales: 3900 },
    { month: "Jul", revenue: 6400, sales: 4200 },
    { month: "Aug", revenue: 5900, sales: 3800 },
    { month: "Sep", revenue: 7200, sales: 4900 },
    { month: "Oct", revenue: 6800, sales: 4500 },
    { month: "Nov", revenue: 8100, sales: 5600 },
    { month: "Dec", revenue: 9400, sales: 6700 },
  ];

  const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue));

  return (
    <Card className="col-span-full border lg:col-span-4">
      <CardHeader className="flex flex-col items-start justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-semibold">
              Revenue Overview
            </CardTitle>
            <Badge
              variant="outline"
              className="gap-1 border-emerald-500/20 bg-emerald-500/10 text-[10px] text-emerald-600 dark:text-emerald-400"
            >
              <TrendingUp className="size-3" /> +15.4% YoY
            </Badge>
          </div>
          <CardDescription className="text-xs">
            Monthly revenue breakdown vs projected sales targets
          </CardDescription>
        </div>

        {/* Filters and Timeframe buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg bg-muted p-0.5 text-xs">
            <button
              onClick={() => setActiveRange("7d")}
              className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                activeRange === "7d"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setActiveRange("30d")}
              className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                activeRange === "30d"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setActiveRange("1y")}
              className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                activeRange === "1y"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              1 Year
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Chart Summary Header */}
        <div className="grid grid-cols-2 gap-4 rounded-xl border bg-muted/40 p-3 text-xs sm:grid-cols-3">
          <div>
            <span className="block text-[11px] text-muted-foreground">
              Total Revenue
            </span>
            <span className="text-lg font-bold text-foreground">
              $69,000.00
            </span>
          </div>
          <div>
            <span className="block text-[11px] text-muted-foreground">
              Avg. Monthly
            </span>
            <span className="text-lg font-bold text-foreground">$5,750.00</span>
          </div>
          <div className="hidden sm:block">
            <span className="block text-[11px] text-muted-foreground">
              Conversion Rate
            </span>
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              4.85%
            </span>
          </div>
        </div>

        {/* Visual Bar Chart */}
        <div className="space-y-2">
          <div className="flex h-56 items-end gap-2 px-1 pt-6 sm:gap-3">
            {monthlyData.map((data) => {
              const heightPercent = (data.revenue / maxRevenue) * 100;
              const salesHeightPercent = (data.sales / maxRevenue) * 100;

              return (
                <div
                  key={data.month}
                  className="group relative flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  {/* Tooltip on Hover */}
                  <div className="pointer-events-none absolute -top-12 z-20 hidden flex-col items-center rounded-md bg-foreground px-2 py-1 text-[10px] whitespace-nowrap text-background shadow-lg group-hover:flex">
                    <span className="font-semibold">{data.month} Overview</span>
                    <span>Rev: ${data.revenue.toLocaleString()}</span>
                    <span>Sales: ${data.sales.toLocaleString()}</span>
                  </div>

                  {/* Bars Container */}
                  <div className="relative flex size-full max-w-7 items-end justify-center gap-1">
                    {/* Sales Bar */}
                    <div
                      style={{ height: `${salesHeightPercent}%` }}
                      className="w-1.5 rounded-t-sm bg-primary/40 transition-all duration-300 group-hover:bg-primary/60 sm:w-2"
                    />
                    {/* Revenue Bar */}
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-2.5 rounded-t-sm bg-primary transition-all duration-300 group-hover:scale-y-105 group-hover:bg-primary/80 sm:w-3.5"
                    />
                  </div>

                  {/* Month Label */}
                  <span className="text-[10px] font-medium text-muted-foreground group-hover:text-foreground">
                    {data.month}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Chart Legend */}
          <div className="flex items-center justify-center gap-6 border-t pt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-primary" />
              <span>Gross Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-primary/40" />
              <span>Net Sales</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
