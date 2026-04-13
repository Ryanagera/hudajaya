import MainLayout from "@/layouts/MainLayout";
import { Container } from "@/components/common";

export default function Services() {
  return (
    <MainLayout>
      <section className="mt-24 py-20 bg-gradien-to-b from-gray-50 to-white">
        <Container size="lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive support and solutions tailored to your needs
            </p>
          </div>

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
    </MainLayout>
  );
}
