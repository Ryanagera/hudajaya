import { cn } from "@/utils";

/**
 * Card component untuk menampilkan konten dalam box
 */
export default function Card({
  children,
  className = "",
  hoverable = false,
  shadow = "md",
}) {
  const shadows = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const hoverClass = hoverable
    ? "hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    : "";

  return (
    <div
      className={cn(
        "bg-white rounded-lg p-6",
        shadows[shadow],
        hoverClass,
        className,
      )}
    >
      {children}
    </div>
  );
}
