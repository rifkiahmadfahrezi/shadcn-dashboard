"use client";

import * as React from "react";
import { Download, Calendar, Sparkles, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCards } from "@/components/dashboard/overview/metric-cards";
import { RevenueChart } from "@/components/dashboard/overview/revenue-chart";
import { RecentSales } from "@/components/dashboard/overview/recent-sales";
import { ProjectProgress } from "@/components/dashboard/overview/project-progress";
import { ActivityFeed } from "@/components/dashboard/overview/activity-feed";

export default function DashboardPage() {
  return (
    <div className="animate-in space-y-6 duration-300 fade-in-50">
      {/* Top Banner / Welcome Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Dashboard Overview
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <Sparkles className="size-3" /> Live Updates
            </span>
          </div>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Welcome back, Alex. Here is what is happening with your projects
            today.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer gap-1.5 text-xs shadow-xs"
          >
            <Calendar className="size-3.5" />
            <span>Sep 1, 2026 - Sep 30, 2026</span>
          </Button>

          <Button
            size="sm"
            className="cursor-pointer gap-1.5 text-xs font-semibold shadow-xs"
          >
            <Download className="size-3.5" />
            <span>Export Report</span>
          </Button>
        </div>
      </div>

      {/* Dashboard Navigation Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-muted/60 p-1">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Overview Tab Content */}
        <TabsContent value="overview" className="space-y-6">
          {/* Key Metric KPI Cards */}
          <MetricCards />

          {/* Charts & Recent Sales Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
            <RevenueChart />
            <RecentSales />
          </div>

          {/* Projects Progress & Live Activity Feed Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <ProjectProgress />
            <ActivityFeed />
          </div>
        </TabsContent>

        {/* Analytics Tab Content */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="space-y-3 rounded-xl border bg-card p-8 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="size-6" />
            </div>
            <h3 className="text-lg font-semibold">Deep AI Analytics</h3>
            <p className="mx-auto max-w-md text-xs text-muted-foreground">
              Real-time user engagement cohort breakdown and funnel conversion
              statistics.
            </p>
            <Button size="sm" className="gap-1.5 text-xs">
              <span>View Full Analytics</span>
              <ArrowUpRight className="size-3.5" />
            </Button>
          </div>
        </TabsContent>

        {/* Reports Tab Content */}
        <TabsContent value="reports" className="space-y-6">
          <div className="space-y-3 rounded-xl border bg-card p-8 text-center">
            <h3 className="text-lg font-semibold">Financial & Usage Reports</h3>
            <p className="mx-auto max-w-md text-xs text-muted-foreground">
              Download monthly CSV, PDF, and audit logs.
            </p>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs">
              <Download className="size-3.5" />
              <span>Download Annual Audit</span>
            </Button>
          </div>
        </TabsContent>

        {/* Notifications Tab Content */}
        <TabsContent value="notifications" className="space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-2 text-sm font-semibold">
              Notification Preferences
            </h3>
            <p className="text-xs text-muted-foreground">
              Manage your email and in-app system alerts.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
