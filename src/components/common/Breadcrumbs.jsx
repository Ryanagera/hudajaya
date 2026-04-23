import { Link } from "react-router-dom";
import { SlashIcon } from "lucide-react";

/**
 * Breadcrumbs Component
 * Renders a navigation trail for the user.
 */
export default function Breadcrumbs({ items = [], className = "" }) {
  return (
    <nav className={`flex flex-wrap items-center gap-2 text-gray-400 font-medium tracking-widest text-[10px] md:text-xs uppercase ${className}`}>
      <Link
        to="/"
        className="hover:text-black transition-colors shrink-0"
      >
        Home
      </Link>
      {items.map((crumb, idx) => (
        <div key={idx} className="flex items-center gap-2 shrink-0">
          <SlashIcon size={10} className="opacity-50" />
          {crumb.path ? (
            <Link
              to={crumb.path}
              className="hover:text-black transition-colors"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-gray-500 border-b border-gray-400 pb-0.5">
              {crumb.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
