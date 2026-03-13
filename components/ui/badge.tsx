import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "primary" | "secondary" | "outline";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, tone = "primary", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
        tone === "primary" &&
          "border-cyan-400/60 bg-cyan-500/15 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.55)]",
        tone === "secondary" &&
          "border-purple-400/60 bg-purple-500/10 text-purple-100",
        tone === "outline" &&
          "border-slate-500/60 bg-slate-900/70 text-slate-200",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

