import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /* Mint — the single accent moment of the page */
        accent:
          "bg-mint-300 text-green-800 hover:bg-mint-200 active:bg-mint-300",
        /* Ghost on dark — hairline border, faint tint on hover */
        outline:
          "border border-offwhite/15 text-offwhite hover:border-offwhite/30 hover:bg-offwhite/5",
        /* Quiet text link style */
        ghost: "text-offwhite/70 hover:text-offwhite hover:bg-offwhite/5",
      },
      size: {
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-[0.9375rem]",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
