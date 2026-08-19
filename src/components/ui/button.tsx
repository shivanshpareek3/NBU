import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-lg font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase tracking-[0.1em] font-heading",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white hover:bg-brand/90 shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:-translate-y-1",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        outline:
          "border-2 border-foreground bg-transparent hover:bg-foreground hover:text-background",
        "outline-white":
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black",
        secondary:
          "bg-foreground text-background hover:bg-foreground/90",
        ghost: "hover:bg-black/5",
        link: "text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-12 px-6",
        lg: "h-16 px-10 text-xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
