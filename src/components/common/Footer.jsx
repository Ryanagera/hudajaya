export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SKF</h3>
            <p className="text-sm">
              Leading global supplier of bearings, seals, and related products
              and services.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Bearings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Seals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Lubrication
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@skf.com</li>
              <li>Phone: +62-xxx-xxxx</li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {currentYear} SKF Group. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
