import { Container } from "@/components/common";
import MainLayout from "@/layouts/MainLayout";
import { SlashIcon } from "lucide-react";
import { Link } from "react-router-dom";

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
      <section className="mt-16 md:mt-24 py-10 md:py-16 bg-white text-black border-b border-gray-50">
        <Container size={containerSize}>
          <div className="mb-4">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap items-center gap-2 text-gray-400 mb-6 font-medium tracking-widest text-xs md:text-sm">
              <Link to="/" className="hover:text-black transition-colors shrink-0">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
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

            {/* Title & Subtitle */}
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#001D3D]">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-2xl font-light text-gray-600 max-w-2xl leading-relaxed">
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
