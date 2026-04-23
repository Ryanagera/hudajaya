import { Container, PageLayout, ActionCard } from "@/components/common";
import { PRODUCT_CATEGORIES } from "@/constants/products";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/app";

export default function Products() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Products"
      subtitle="Discover the Hudajaya product."
      breadcrumbs={[{ label: "Products" }]}
    >
      {/* Products Section */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001D3D] mb-8 tracking-tight">
              Industrial Precision Roller Solutions
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-4xl">
              CV. Huda Jaya adalah pemimpin industri dalam pembuatan dan perbaikan Rubber Roll, Steel Roll, serta komponen presisi lainnya. Produk kami digunakan di berbagai sektor industri, memberikan performa rotasi yang optimal dengan standar kualitas teknik yang telah teruji.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCT_CATEGORIES.map((category) => (
              <ActionCard
                key={category.id}
                image={category.icon}
                title={category.name}
                buttonText="View all products"
                onButtonClick={() => navigate(`/products/category/${category.slug}`)}
                className="shadow-sm"
              >
                {/* Quick Links */}
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">
                    Popular products
                  </p>
                  {category.products.slice(0, 2).map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-gray-700 group/item cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => navigate(`/products/${product.slug}`)}
                    >
                      <span className="text-xl shrink-0">
                        {product.icon}
                      </span>
                      <span className="text-sm font-medium tracking-tight">
                        {product.name}
                      </span>
                    </div>
                  ))}
                  
                  {category.products.length > 2 && (
                    <button 
                      onClick={() => navigate(`/products/category/${category.slug}`)}
                      className="text-[10px] font-bold text-blue-600 mt-6 pt-6 border-t border-gray-100 uppercase tracking-widest block w-full text-left hover:text-blue-800 transition-colors"
                    >
                      +{category.products.length - 2} more products
                    </button>
                  )}
                </div>
              </ActionCard>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
