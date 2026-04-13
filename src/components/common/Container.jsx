import { cn } from "@/utils";

/**
 * Container component untuk membungkus konten dengan padding dan max-width
 */
export default function Container({ children, className = "", size = "lg" }) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-7xl",
    xl: "max-w-full",
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
