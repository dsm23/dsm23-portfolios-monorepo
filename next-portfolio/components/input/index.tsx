import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "~/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, startIcon, endIcon, ...props }, ref) => (
    <div
      className={cn(
        "flex h-9 w-full items-center gap-x-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring ",
        className,
      )}
    >
      {startIcon}
      <input
        ref={ref}
        className="h-full w-full bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
      {endIcon}
    </div>
  ),
);

Input.displayName = "Input";

export default Input;
