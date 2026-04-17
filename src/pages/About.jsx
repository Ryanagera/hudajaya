import { Container, Button, PageLayout } from "@/components/common";

export default function About() {
  return (
    <PageLayout
      title="About Huda Jaya"
      subtitle="Leading global supplier of bearings, seals, and related products with a century of innovation."
      breadcrumbs={[{ label: "About" }]}
    >
      <section className="py-20 bg-linear-to-b from-gray-50 to-white">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <p className="text-lg text-gray-600 mb-4">
                SKF is a leading global supplier of bearings, seals, and related
                products and services. For more than a century, we have been
                providing innovative solutions that enable our customers to
                improve their operations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to quality, innovation, and customer satisfaction
                drives everything we do. We invest in research and development
                to create products that meet the highest standards.
              </p>
              <Button size="lg">Learn More</Button>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "100+", label: "Years of Experience" },
                { number: "170+", label: "Countries Worldwide" },
                { number: "50K+", label: "Products & Services" },
                { number: "20K+", label: "Employees" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
