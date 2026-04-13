import MainLayout from "@/layouts/MainLayout";
import { Container } from "@/components/common";
import { PRODUCT_CATEGORIES } from "@/constants/products";

export default function Products() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="mt-24 py-20 bg-blue-600 text-white">
        <Container size="lg">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-blue-100 mb-6">
              <span>Home</span>
              <span>/</span>
              <span>Products</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-6">Products</h1>
            <p className="text-xl text-blue-50 max-w-2xl">
              Discover the SKF product assortment
            </p>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
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
              <div
                key={category.id}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Category Header */}
                <div className={`p-8 ${category.color}`}>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-light text-gray-900">
                    {category.name}
                  </h3>
                </div>

                {/* Category Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{category.description}</p>

                  {/* Quick Links */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                      Popular products
                    </p>
                    {category.products.slice(0, 3).map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span className="text-xl">{product.icon}</span>
                        <span className="text-sm">{product.name}</span>
                      </div>
                    ))}
                    {category.products.length > 3 && (
                      <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-200">
                        +{category.products.length - 3} more products
                      </p>
                    )}
                  </div>

                  {/* View All Link */}
                  <button className="mt-6 w-full px-4 py-2 text-center text-blue-600 hover:text-blue-700 font-light border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    View all products →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
