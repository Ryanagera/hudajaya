import { Container, PageLayout, ActionCard } from "@/components/common";
import { PRODUCT_CATEGORIES } from "@/constants/products";

export default function Products() {
  return (
    <PageLayout
      title="Products"
      subtitle="Discover the Hudajaya product."
      breadcrumbs={[{ label: "Products" }]}
    >
      {/* Products Section */}
      <section className="py-4 bg-white">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Discover the SKF product assortment
            </h2>
            <p className="text-lg text-gray-600">
              Our products can be found literally anywhere in society. In fact,
              wherever there is rotation there might be SKF bearings, seals and
              lubrication systems at work, with the support of our condition
              monitoring and maintenance services.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <ActionCard
                key={category.id}
                image={category.icon}
                title={category.name}
                buttonText="View all products"
                onButtonClick={() => {}}
              >
                {/* Quick Links */}
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                    Popular products
                  </p>
                  {category.products.slice(0, 2).map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group/item"
                    >
                      <span className="text-lg grayscale group-hover/item:grayscale-0 transition-all">
                        {product.icon}
                      </span>
                      <span className="text-sm font-medium">
                        {product.name}
                      </span>
                    </div>
                  ))}
                  {category.products.length > 2 && (
                    <p className="text-[10px] font-bold text-blue-600 mt-4 pt-4 border-t border-gray-50 uppercase tracking-widest">
                      +{category.products.length - 2} more products
                    </p>
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
