"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronsUpDown,
  Command,
  LogOut,
  Plus,
  Sparkles,
  User,
  Settings,
  ShieldCheck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dashboardNavCategories } from "@/config/menus";

export function AppSidebar() {
  const pathname = usePathname();
  const [openSubmenus, setOpenSubmenus] = React.useState<
    Record<string, boolean>
  >({
    projects: true,
    settings: false,
  });

  const toggleSubmenu = (moduleName: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [moduleName]: !prev[moduleName],
    }));
  };

  return (
    <Sidebar collapsible="icon" className="border-r">
      {/* Workspace / Brand Header */}
      <SidebarHeader className="border-b border-sidebar-border p-3">
        <SidebarMenu>
          <SidebarMenuItem className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full">
                <div className="flex items-center gap-3 rounded-lg p-1.5 text-sidebar-foreground transition-colors hover:bg-sidebar-accent">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary font-semibold text-primary-foreground shadow-xs">
                    <Command className="size-5" />
                  </div>
                  <div className="grid flex-1 text-left text-xs leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate text-sm font-semibold">
                      Acme Corp
                    </span>
                    <span className="truncate text-[11px] text-muted-foreground">
                      Enterprise Plan
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel className="text-[11px] text-muted-foreground">
                  Workspaces
                </DropdownMenuLabel>
                <DropdownMenuItem className="gap-2 font-medium">
                  <div className="flex size-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                    A
                  </div>
                  Acme Corp
                  <Badge variant="outline" className="ml-auto text-[10px]">
                    Active
                  </Badge>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 text-muted-foreground">
                  <div className="flex size-6 items-center justify-center rounded-md border bg-muted text-xs">
                    S
                  </div>
                  Stark Labs
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 font-medium text-primary">
                  <Plus className="size-4" />
                  Create New Team
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Main Sidebar Navigation Content */}
      <SidebarContent className="px-2 py-3">
        {/* Navigation Categories */}
        {dashboardNavCategories.map((group) => (
          <SidebarGroup key={group.category} className="py-2">
            <SidebarGroupLabel className="text-[11px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
              {group.category}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const hasChildren = item.children && item.children.length > 0;
                  const isSubOpen = !!openSubmenus[item.module];
                  const isActive =
                    pathname === item.path ||
                    (hasChildren &&
                      item.children?.some((c) => pathname === c.path));

                  if (hasChildren) {
                    return (
                      <SidebarMenuItem key={item.module}>
                        <SidebarMenuButton
                          isActive={isActive}
                          onClick={() => toggleSubmenu(item.module)}
                          tooltip={item.title}
                          className="cursor-pointer"
                        >
                          <Icon className="size-4" />
                          <span className="text-xs font-medium">
                            {item.title}
                          </span>
                          <ChevronDown
                            className={`ml-auto size-3.5 transition-transform duration-200 group-data-[collapsible=icon]:hidden ${
                              isSubOpen ? "rotate-180" : ""
                            }`}
                          />
                        </SidebarMenuButton>

                        {isSubOpen && (
                          <SidebarMenuSub className="animate-submenu-in">
                            {item.children?.map((sub) => (
                              <SidebarMenuSubItem key={sub.path}>
                                <SidebarMenuSubButton
                                  render={
                                    <Link href={sub.path}>
                                      <span>{sub.title}</span>
                                    </Link>
                                  }
                                  isActive={pathname === sub.path}
                                />
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        )}
                      </SidebarMenuItem>
                    );
                  }

                  return (
                    <SidebarMenuItem key={item.module}>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={item.title}
                        render={
                          <Link href={item.path || "#"}>
                            <Icon className="size-4" />
                            <span className="text-xs font-medium">
                              {item.title}
                            </span>
                            {item.badge && (
                              <SidebarMenuBadge className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                                {item.badge}
                              </SidebarMenuBadge>
                            )}
                          </Link>
                        }
                      />
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* Pro Banner Card inside Sidebar */}
        <SidebarGroup className="mt-auto pt-4 group-data-[collapsible=icon]:hidden">
          <div className="rounded-xl border border-primary/20 bg-linear-to-b from-primary/10 via-primary/5 to-transparent p-3 text-sidebar-foreground shadow-xs">
            <div className="mb-1.5 flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="size-4 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-semibold">Upgrade to Pro</h4>
                <p className="text-[10px] text-muted-foreground">
                  Unlock AI & Analytics
                </p>
              </div>
            </div>
            <p className="my-2 text-[11px] text-muted-foreground">
              Get unlimited project dashboards and real-time alerts.
            </p>
            <Button
              size="xs"
              className="w-full cursor-pointer text-xs font-semibold shadow-xs"
            >
              Upgrade Now
            </Button>
          </div>
        </SidebarGroup>
      </SidebarContent>

      {/* User Footer Menu */}
      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full">
                <div className="flex items-center gap-3 rounded-lg p-1.5 text-sidebar-foreground transition-colors hover:bg-sidebar-accent">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                      alt="Alex Rivera"
                    />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-xs leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate text-xs font-semibold">
                      Alex Rivera
                    </span>
                    <span className="truncate text-[11px] text-muted-foreground">
                      alex@acme.com
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-xs leading-none font-semibold">
                      Alex Rivera
                    </p>
                    <p className="text-[11px] leading-none text-muted-foreground">
                      alex@acme.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2">
                  <User className="size-4 text-muted-foreground" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Settings className="size-4 text-muted-foreground" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <ShieldCheck className="size-4 text-muted-foreground" />
                  Security & API Keys
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                  <LogOut className="size-4" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
