"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Bell,
  CheckCircle2,
  Plus,
  Sparkles,
  UserCheck,
  TrendingUp,
} from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/dashboard/theme-toggle";
import { HeaderSearchMenu } from "@/components/dashboard/header-search-menu";
import { dashboardNavCategories } from "@/config/menus";

interface BreadcrumbSegment {
  title: string;
  href?: string;
  isClickable: boolean;
  isCurrent: boolean;
}

function getBreadcrumbs(pathname: string): BreadcrumbSegment[] {
  const segments: BreadcrumbSegment[] = [
    {
      title: "Dashboard",
      href: "/",
      isClickable: pathname !== "/",
      isCurrent: pathname === "/",
    },
  ];

  if (pathname === "/") {
    segments.push({
      title: "Overview",
      isClickable: false,
      isCurrent: true,
    });
    return segments;
  }

  // Find matching menu in config
  let matchedGroup: (typeof dashboardNavCategories)[0] | null = null;
  let matchedItem: (typeof dashboardNavCategories)[0]["items"][0] | null = null;
  let matchedChild: { title: string; path: string } | null = null;

  for (const group of dashboardNavCategories) {
    for (const item of group.items) {
      if (item.children) {
        for (const child of item.children) {
          if (
            pathname === child.path ||
            pathname.startsWith(child.path + "/")
          ) {
            matchedGroup = group;
            matchedItem = item;
            matchedChild = child;
            break;
          }
        }
      }
      if (
        !matchedChild &&
        item.path &&
        (pathname === item.path || pathname.startsWith(item.path + "/"))
      ) {
        matchedGroup = group;
        matchedItem = item;
        break;
      }
    }
    if (matchedItem) break;
  }

  if (matchedGroup && matchedItem) {
    // 1. Module level (tidak bisa di klik)
    segments.push({
      title: matchedGroup.category,
      isClickable: false,
      isCurrent: false,
    });

    const hasChildren = !!(
      matchedItem.children && matchedItem.children.length > 0
    );
    const isItemCurrent = !matchedChild && pathname === matchedItem.path;

    // 2. Menu level
    // Jika ada anaknya -> tidak bisa di klik
    // Jika tidak ada anaknya -> bisa di klik jika bukan current page
    segments.push({
      title: matchedItem.title,
      href: !hasChildren && matchedItem.path ? matchedItem.path : undefined,
      isClickable: !hasChildren && !isItemCurrent && !!matchedItem.path,
      isCurrent: isItemCurrent,
    });

    // 3. Sub Menu level (jika ada child)
    if (matchedChild) {
      const isChildCurrent = pathname === matchedChild.path;
      segments.push({
        title: matchedChild.title,
        href: matchedChild.path,
        isClickable: !isChildCurrent,
        isCurrent: isChildCurrent,
      });

      // Handing extra dynamic path segments if any
      if (pathname.length > matchedChild.path.length) {
        segments[segments.length - 1].isClickable = true;
        segments[segments.length - 1].isCurrent = false;

        const subSegments = pathname
          .slice(matchedChild.path.length)
          .split("/")
          .filter(Boolean);

        subSegments.forEach((sub, idx) => {
          const formatted = sub.charAt(0).toUpperCase() + sub.slice(1);
          const isLast = idx === subSegments.length - 1;
          segments.push({
            title: formatted,
            isClickable: !isLast,
            isCurrent: isLast,
          });
        });
      }
    }
  } else {
    // Fallback for paths not in config
    const pathParts = pathname.split("/").filter(Boolean);
    let accumPath = "";
    pathParts.forEach((part, idx) => {
      accumPath += `/${part}`;
      const formatted = part.charAt(0).toUpperCase() + part.slice(1);
      const isLast = idx === pathParts.length - 1;
      const isModule = idx === 0 && pathParts.length > 1;
      segments.push({
        title: formatted,
        href: isModule ? undefined : accumPath,
        isClickable: !isModule && !isLast,
        isCurrent: isLast,
      });
    });
  }

  return segments;
}

export function DashboardHeader() {
  const pathname = usePathname();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <header className="sticky top-0 z-30 flex h-13 shrink-0 items-center justify-between gap-1.5 border-b bg-background/95 px-3.5 backdrop-blur-md transition-all supports-backdrop-filter:bg-background/60">
      {/* Left section: Sidebar trigger & Breadcrumb */}
      <div className="flex items-center gap-1.5 md:gap-2">
        <SidebarTrigger className="cursor-pointer" />
        <Separator orientation="vertical" className="mr-0.5 h-3.5" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  <BreadcrumbItem>
                    {crumb.isCurrent ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : crumb.isClickable && crumb.href ? (
                      <BreadcrumbLink href={crumb.href}>
                        {crumb.title}
                      </BreadcrumbLink>
                    ) : (
                      <span className="text-xs font-normal text-muted-foreground/70 select-none">
                        {crumb.title}
                      </span>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Center/Right section: Search & Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Header Menu Search Component */}
        <HeaderSearchMenu />

        {/* Quick Action Button */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Button
              size="xs"
              className="hidden gap-1.5 font-medium shadow-xs sm:inline-flex"
            >
              <Plus className="size-3.5" />
              <span>Create</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Quick Action
            </DropdownMenuLabel>
            <DropdownMenuItem className="gap-2">
              <Plus className="size-4 text-primary" />
              New Project
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <UserCheck className="size-4 text-emerald-500" />
              Invite Team Member
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <TrendingUp className="size-4 text-amber-500" />
              Generate Sales Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Notifications Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <div className="relative inline-flex">
              <Button
                variant="ghost"
                size="icon-sm"
                className="size-8 text-muted-foreground hover:text-foreground"
              >
                <Bell className="size-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <span className="absolute top-1 right-1 flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-destructive"></span>
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-semibold">Notifications</h4>
                <Badge variant="secondary" className="px-1.5 py-0 text-[10px]">
                  3 New
                </Badge>
              </div>
              <button className="cursor-pointer text-[11px] font-medium text-primary hover:underline">
                Mark all read
              </button>
            </div>

            <div className="max-h-72 divide-y overflow-y-auto">
              <div className="flex cursor-pointer items-start gap-3 p-3 transition-colors hover:bg-muted/50">
                <div className="mt-0.5 flex size-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-4" />
                </div>
                <div className="space-y-0.5 text-xs">
                  <p className="font-medium">Payment received</p>
                  <p className="text-[11px] text-muted-foreground">
                    Acme Corp completed invoice #INV-4029 ($1,250.00)
                  </p>
                  <p className="text-[10px] text-muted-foreground/80">
                    5 mins ago
                  </p>
                </div>
              </div>

              <div className="flex cursor-pointer items-start gap-3 p-3 transition-colors hover:bg-muted/50">
                <div className="mt-0.5 flex size-7 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Sparkles className="size-4" />
                </div>
                <div className="space-y-0.5 text-xs">
                  <p className="font-medium">New AI Insights available</p>
                  <p className="text-[11px] text-muted-foreground">
                    Weekly analytics summary report is ready for viewing.
                  </p>
                  <p className="text-[10px] text-muted-foreground/80">
                    1 hour ago
                  </p>
                </div>
              </div>

              <div className="flex cursor-pointer items-start gap-3 p-3 transition-colors hover:bg-muted/50">
                <Avatar className="mt-0.5 size-7">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5 text-xs">
                  <p className="font-medium">Alex comment</p>
                  <p className="text-[11px] text-muted-foreground">
                    &lsquo;Looks awesome! Let&apos;s ship the new dashboard
                    components.&rsquo;
                  </p>
                  <p className="text-[10px] text-muted-foreground/80">
                    3 hours ago
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t p-2 text-center">
              <button className="w-full cursor-pointer py-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                View all notifications
              </button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="h-4" />

        {/* User Profile Avatar */}
        <Avatar className="size-8 cursor-pointer ring-2 ring-primary/20 transition-all hover:ring-primary/40">
          <AvatarImage
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
            alt="Alex Rivera"
          />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
