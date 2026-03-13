import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-sky-500/90 text-slate-950 hover:bg-sky-400 glow-border shadow-lg shadow-sky-500/40",
        secondary:
          "bg-slate-900/80 text-slate-50 border border-slate-600/60 hover:border-sky-400/80 hover:text-sky-100 hover:bg-slate-900/90",
        outline:
          "border border-sky-400/70 bg-sky-500/5 text-sky-100 hover:bg-sky-500/15",
        ghost:
          "text-slate-300 bg-transparent hover:bg-slate-800/70 hover:text-sky-100",
        subtle:
          "bg-slate-800/80 text-slate-100 hover:bg-slate-700/80 border border-slate-700/60",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9",
      },
      glow: {
        true: "shadow-[0_0_30px_rgba(56,189,248,0.55)]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, asChild = false, children, ...props }, ref) => {
    const mergedClassName = cn(buttonVariants({ variant, size, glow, className }));
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(mergedClassName, child.props?.className),
        ref,
        ...props,
      });
    }
    return (
      <button
        className={mergedClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

