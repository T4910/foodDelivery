import * as React from "react"

import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        login: "flex h-10 w-full rounded-none border-0 border-b border-input bg-background px-0 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  }
)

const Input = React.forwardRef(({ className, variant, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
