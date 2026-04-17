import MainLayout from "@/layouts/MainLayout";
import { Container } from "@/components/common";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * PageLayout Component
 * Standardizes page structure with a visible blue hero section and breadcrumbs.
 * Wraps content in MainLayout (Header/Footer).
 */
export default function PageLayout({
  title,
  subtitle,
  breadcrumbs = [],
  children,
  containerSize = "lg",
}) {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="mt-24 py-8 bg-white text-black">
        <Container size={containerSize}>
          <div className="mb-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-black mb-6 font-medium uppercase tracking-widest text-sm">
              <Link to="/" className="hover:text-gray-500 transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <ChevronRight size={12} className="opacity-50" />
                  {crumb.path ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-black transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-black border-b border-black/40 pb-0.5">
                      {crumb.label}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            {/* Title & Subtitle */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl tracking-tight">{title}</h1>
              {subtitle && (
                <p className="text-xl lg:text-2xl font-light text-black/90 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Page Content */}
      <main className="grow">{children}</main>
    </MainLayout>
  );
}
