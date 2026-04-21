import Container from "../components/common/Container";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../sections/HeroSection";
import { ROUTES } from "../constants/app";

export default function Home() {
  const categories = [
    {
      title: "Products",
      description:
        "Rubber rollers, steel rollers, brush rollers and precision machinery for high-performance industrial applications.",
      link: ROUTES.PRODUCTS,
      linkLabel: "View products",
    },
    {
      title: "Services",
      description:
        "Engineering, maintenance, roller remanufacturing, and technical consultation for optimized production.",
      link: ROUTES.SERVICES,
      linkLabel: "View services",
    },
    {
      title: "Industries",
      description:
        "Specialized roller solutions tailored to printing, packaging, textile, and other industrial sectors.",
      link: ROUTES.SERVICES, // Reusing services or a generic industries page if added later
      linkLabel: "View industries",
    },
  ];

  return (
    <MainLayout>
      <HeroSection />

      {/* What we do section */}
      <section className="py-24 bg-white">
        <Container size="lg">
          <h2 className="text-5xl font-bold text-center text-[#001D3D] mb-20 tracking-tight">
            What we do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col group">
                <h3 className="text-2xl font-bold text-[#001D3D] mb-4">
                  {cat.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8 min-h-[5rem]">
                  {cat.description}
                </p>
                <Link
                  to={cat.link}
                  className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span>{cat.linkLabel}</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
