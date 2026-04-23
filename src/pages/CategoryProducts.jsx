import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, PageLayout } from "../components/common";
import { PRODUCT_CATEGORIES } from "../constants/products";
import { ROUTES } from "../constants/app";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function CategoryProducts() {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const found = PRODUCT_CATEGORIES.find((cat) => cat.slug === slug);
    if (found) {
      setCategory(found);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <PageLayout title="Category Not Found">
        <Container className="py-40 text-center">
          <Link to={ROUTES.PRODUCTS} className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </Container>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={category.name}
      subtitle={`Explore our full range of ${category.name.toLowerCase()} solutions.`}
      breadcrumbs={[
        { label: "Products", path: ROUTES.PRODUCTS },
        { label: category.name }
      ]}
    >
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#001D3D] mb-4">
              {category.name} Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl font-light">
              We offer a wide variety of {category.name.toLowerCase()} products designed for durability and precision. Click on any product to see technical specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {category.products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:bg-[#001D3D] hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  {product.icon}
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-bold text-[#001D3D] group-hover:text-white transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors line-clamp-2 font-light">
                  {product.description}
                </p>

                {/* View Details Label */}
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:text-white transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
