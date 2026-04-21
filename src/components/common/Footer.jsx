import logoHj from "@/assets/images/branding/logohj1.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logoHj} alt="Huda Jaya Logo" className="h-16 w-auto" />
            <p className="text-sm font-light leading-relaxed">
              Melayani pembuatan mesin Melamin & Polyester, perbaikan Rubber
              Roll, Steel Roll, dan custom spare part sesuai kebutuhan
              pelanggan.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Products
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a
                  href="/products"
                  className="hover:text-blue-400 transition-colors"
                >
                  Rubber Roll
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-blue-400 transition-colors"
                >
                  Steel Roll
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-blue-400 transition-colors"
                >
                  Brush Roll
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-blue-400 transition-colors"
                >
                  Custom Machinery
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Email: cv.hudajaya@yahoo.co.id</li>
              <li>
                <a
                  href="https://wa.me/628112069931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors underline decoration-blue-500/30"
                >
                  Phone: +62 811 206 9931
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors underline decoration-blue-500/30"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-light text-gray-500">
              © {currentYear} CV. Huda Jaya. All rights reserved. Registered in
              Indonesia.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium uppercase tracking-widest text-gray-400">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a
                href="/contact/find-location"
                className="hover:text-white transition"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
