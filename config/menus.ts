import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  Receipt,
  FolderKanban,
  Settings,
  HelpCircle,
  CreditCard,
  Bell,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

export interface MenuItem {
  title: string;
  path: string;
  badge?: string;
}

export interface Menu {
  module: string;
  title: string;
  icon: React.ElementType<LucideProps>;
  path?: string;
  badge?: string;
  children?: MenuItem[];
}

export interface MenuCategory {
  category: string;
  items: Menu[];
}

export const dashboardNavCategories: MenuCategory[] = [
  {
    category: "Main",
    items: [
      {
        module: "dashboard",
        title: "Overview",
        icon: LayoutDashboard,
        path: "/",
      },
      {
        module: "analytics",
        title: "Analytics",
        icon: BarChart3,
        path: "/analytics",
        badge: "Live",
      },
      {
        module: "projects",
        title: "Projects",
        icon: FolderKanban,
        path: "/projects",
        children: [
          { title: "All Projects", path: "/projects" },
          { title: "Active Tasks", path: "/projects/tasks" },
          { title: "Milestones", path: "/projects/milestones" },
        ],
      },
    ],
  },
  {
    category: "Management",
    items: [
      {
        module: "customers",
        title: "Customers",
        icon: Users,
        path: "/customers",
      },
      {
        module: "orders",
        title: "Orders & Sales",
        icon: ShoppingBag,
        path: "/orders",
        badge: "12",
      },
      {
        module: "invoices",
        title: "Invoices",
        icon: Receipt,
        path: "/invoices",
      },
      {
        module: "billing",
        title: "Subscriptions",
        icon: CreditCard,
        path: "/billing",
      },
    ],
  },
  {
    category: "System",
    items: [
      {
        module: "notifications",
        title: "Notifications",
        icon: Bell,
        path: "/notifications",
        badge: "5",
      },
      {
        module: "settings",
        title: "Settings",
        icon: Settings,
        path: "/settings",
        children: [
          { title: "General Profile", path: "/settings" },
          { title: "Team Members", path: "/settings/team" },
          { title: "Security & Keys", path: "/settings/security" },
          { title: "Integrations", path: "/settings/integrations" },
        ],
      },
      {
        module: "help",
        title: "Help & Docs",
        icon: HelpCircle,
        path: "/help",
      },
    ],
  },
];
