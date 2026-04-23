import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { PRODUCT_CATEGORIES } from "../constants/products";
import { ROUTES } from "../constants/app";
import { ArrowLeft } from "lucide-react";
import Breadcrumbs from "../components/common/Breadcrumbs";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Find product and its category
    for (const cat of PRODUCT_CATEGORIES) {
      const foundProduct = cat.products.find((p) => p.slug === slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setCategory(cat);
        break;
      }
    }
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <MainLayout>
        <Container className="py-40 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you are looking for does not exist or has been moved.</p>
          <Link to={ROUTES.PRODUCTS}>
            <Button variant="primary">Back to Products</Button>
          </Link>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Breadcrumbs Row */}
      <div className="bg-white border-b border-gray-50 pt-24 md:pt-28 pb-4">
        <Container>
          <Breadcrumbs 
            items={[
              { label: "Products", path: ROUTES.PRODUCTS },
              { label: category.name, path: `/products/category/${category.slug}` },
              { label: product.name }
            ]} 
          />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="pt-0 lg:pt-0">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left: Image Area */}
          <div className="w-full lg:w-[60%] bg-[#F5F5F5] flex items-center justify-center p-12 lg:p-24 order-2 lg:order-1">
            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
              {typeof category.icon === 'string' && category.icon.length > 10 ? (
                <img 
                  src={category.icon} 
                  alt={product.name} 
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="text-[12rem] md:text-[20rem] drop-shadow-2xl select-none">
                  {product.icon}
                </div>
              )}
            </div>
          </div>

          {/* Right: Info Area */}
          <div className="w-full lg:w-[40%] bg-[#001D3D] text-white p-12 lg:p-20 flex flex-col justify-center order-1 lg:order-2">
            <div className="max-w-md">
              <span className="text-[#FF4D4D] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
                Industrial Grade
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                {product.name}
              </h1>
              <p className="text-gray-300 text-lg lg:text-xl font-light leading-relaxed mb-12">
                {product.description}
              </p>
              
              <Link to={ROUTES.QUOTE}>
                <Button 
                  size="xl" 
                  className="bg-[#C1272D] hover:bg-[#A11D23] text-white border-none px-12 py-6 text-lg uppercase tracking-wider font-bold rounded-none w-full lg:w-auto"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#001D3D] mb-4 tracking-tight">
              Technical Specifications
            </h2>
            <div className="w-16 h-1.5 bg-[#C1272D]"></div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-sm">
            {/* Hardness */}
            <SpecCard 
              label="Hardness (Shore A)" 
              value={product.specifications.hardness}
              description="Custom durometers available upon request for specialized applications."
            />
            
            {/* Temperature Range */}
            <SpecCard 
              label="Temperature Range" 
              value={product.specifications.tempRange}
              description="Suitable for high-heat processing and extreme cold storage environments."
            />
            
            {/* Chemical Resistance */}
            <SpecCard 
              label="Chemical Resistance" 
              value={product.specifications.resistance}
              description="Exceptional resistance to oils, solvents, acids, and industrial fluids."
            />
            
            {/* Precision Tolerance */}
            <SpecCard 
              label="Precision Tolerance" 
              value={product.specifications.tolerance}
              description="High-precision grinding ensures perfect cylindrical geometry."
            />
          </div>
        </Container>
      </section>

      {/* Back to Products navigation */}
      <section className="py-12 bg-white border-t border-gray-100">
        <Container>
          <Link to={ROUTES.PRODUCTS} className="inline-flex items-center gap-2 text-gray-500 hover:text-[#001D3D] transition-colors font-medium group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to all products</span>
          </Link>
        </Container>
      </section>
    </MainLayout>
  );
}

function SpecCard({ label, value, description }) {
  return (
    <div className="bg-white p-10 flex flex-col h-full hover:bg-gray-50 transition-colors">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">
        {label}
      </span>
      <div className="text-3xl lg:text-4xl font-bold text-[#001D3D] mb-6">
        {value}
      </div>
      <p className="text-sm text-gray-500 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
