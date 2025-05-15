// docs/Component/ui/button.tsx
import { forwardRef } from "react";
import Link from "next/link";

type ButtonProps = {
  variant?: "ghost" | "default";
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", className = "", children, asChild = false, href, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors";
    const variantClasses = variant === "ghost" 
      ? "hover:bg-accent hover:text-accent-foreground" 
      : "bg-primary text-primary-foreground hover:bg-primary/90";

    if (asChild && href) {
      return (
        <Link
          href={href}
          className={`${baseClasses} ${variantClasses} ${className}`}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };