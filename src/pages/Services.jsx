import { Container, PageLayout } from "@/components/common";

export default function Services() {
  return (
    <PageLayout
      title="Our Services"
      subtitle="Comprehensive support and industrial solutions tailored to your professional needs."
      breadcrumbs={[{ label: "Services" }]}
    >
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Support",
                description:
                  "24/7 expert technical support for all your product inquiries",
              },
              {
                title: "Installation Services",
                description:
                  "Professional installation and setup by certified technicians",
              },
              {
                title: "Maintenance Programs",
                description:
                  "Preventive maintenance plans to ensure optimal performance",
              },
              {
                title: "Training & Consulting",
                description:
                  "Expert training programs and consulting for your operations",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
