import { Container } from "@/components/common";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "./Breadcrumbs";

/**
 * PageLayout Component
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
      <section className="mt-16 md:mt-20 pt-4 md:pt-6 pb-16 bg-white text-black border-b border-gray-50">
        <Container size={containerSize}>
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} className="mb-6" />

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
