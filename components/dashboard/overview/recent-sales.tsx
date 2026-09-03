"use client";

import * as React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  XCircle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function RecentSales() {
  const transactions = [
    {
      id: "INV-001",
      customer: {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      },
      status: "Completed",
      date: "2026-09-02",
      amount: "+$1,999.00",
    },
    {
      id: "INV-002",
      customer: {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      },
      status: "Pending",
      date: "2026-09-02",
      amount: "+$39.00",
    },
    {
      id: "INV-003",
      customer: {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      },
      status: "Completed",
      date: "2026-09-01",
      amount: "+$299.00",
    },
    {
      id: "INV-004",
      customer: {
        name: "William Kim",
        email: "will@email.com",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      },
      status: "Failed",
      date: "2026-08-31",
      amount: "+$99.00",
    },
    {
      id: "INV-005",
      customer: {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      },
      status: "Completed",
      date: "2026-08-30",
      amount: "+$1,499.00",
    },
  ];

  return (
    <Card className="col-span-full border lg:col-span-4">
      <CardHeader className="flex flex-row items-center justify-between border-b pb-3">
        <div>
          <CardTitle className="text-base font-semibold">
            Recent Transactions
          </CardTitle>
          <CardDescription className="text-xs">
            You made 265 sales this month.
          </CardDescription>
        </div>
        <Button
          variant="outline"
          size="xs"
          className="cursor-pointer gap-1 text-xs"
        >
          <span>View All</span>
          <ArrowUpRight className="size-3.5" />
        </Button>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-10 pr-4"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="py-3 pl-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarImage
                        src={tx.customer.avatar}
                        alt={tx.customer.name}
                      />
                      <AvatarFallback>
                        {tx.customer.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid">
                      <span className="text-xs font-semibold text-foreground">
                        {tx.customer.name}
                      </span>
                      <span className="truncate text-[11px] text-muted-foreground">
                        {tx.customer.email}
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="py-3">
                  {tx.status === "Completed" && (
                    <Badge
                      variant="secondary"
                      className="gap-1 border-emerald-500/20 bg-emerald-500/10 text-[10px] text-emerald-600 dark:text-emerald-400"
                    >
                      <CheckCircle2 className="size-3" /> Paid
                    </Badge>
                  )}
                  {tx.status === "Pending" && (
                    <Badge
                      variant="secondary"
                      className="gap-1 border-amber-500/20 bg-amber-500/10 text-[10px] text-amber-600 dark:text-amber-400"
                    >
                      <Clock className="size-3" /> Pending
                    </Badge>
                  )}
                  {tx.status === "Failed" && (
                    <Badge variant="destructive" className="gap-1 text-[10px]">
                      <XCircle className="size-3" /> Failed
                    </Badge>
                  )}
                </TableCell>

                <TableCell className="py-3 text-xs text-muted-foreground">
                  {tx.date}
                </TableCell>

                <TableCell className="py-3 text-right text-xs font-semibold text-foreground">
                  {tx.amount}
                </TableCell>

                <TableCell className="py-3 pr-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer">
                      <Button variant="ghost" size="icon-xs" className="size-7">
                        <MoreHorizontal className="size-3.5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-36">
                      <DropdownMenuItem className="text-xs">
                        View Invoice
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs">
                        Send Receipt
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs text-destructive">
                        Refund
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
