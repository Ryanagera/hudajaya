import { Mail, MapPin, Phone, ArrowRight, Shield, CheckCircle, Award } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/common";

const PRODUCT_CATEGORIES = [
  "Rubber Rolls",
  "Polyurethane Rolls",
  "Metal Rolls",
  "Expandable Shafts",
  "Others",
];

const ENGINEERING_STANDARDS = [
  {
    id: "01",
    title: "PRECISION MANUFACTURING",
    description: "Tolerance levels within 0.005mm using latest CNC technology and automated inspection protocols.",
    icon: Shield,
  },
  {
    id: "02",
    title: "INDUSTRIAL DURABILITY",
    description: "Materials sourced from certified alloy suppliers, treated for high-stress industrial environments.",
    icon: CheckCircle,
  },
  {
    id: "03",
    title: "ENGINEERING EXCELLENCE",
    description: "Over 25 years of specialized expertise in rubber and steel roll fabrication for Southeast Asian markets.",
    icon: Award,
  },
];

export default function QuoteRequestPortal() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    category: "Rubber Rolls",
    projectDetails: "",
    requestConsultation: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Quote Request:", formData);
    alert("Quote request submitted successfully! Our team will contact you within 24 hours.");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section id="quote-request" className="bg-white py-16 lg:py-24">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side - Inquiry Portal Form */}
          <div className="lg:col-span-7">
            <header className="mb-12">
              <span className="text-red-700 text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                TECHNICAL INQUIRY PORTAL
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#001D3D] leading-tight max-w-lg">
                REQUEST A TECHNICAL QUOTE
              </h1>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                Provide your project specifications below. Our engineering team will review your requirements and provide a precision-calculated estimate within 24 hours.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="fullName" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Johnathan Miller"
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-gray-700 font-medium"
                    required
                    onChange={handleChange}
                    value={formData.fullName}
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="companyName" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Global Manufacturing Ltd."
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-gray-700 font-medium"
                    required
                    onChange={handleChange}
                    value={formData.companyName}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="businessEmail" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Business Email</label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    placeholder="miller@company.com"
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-gray-700 font-medium"
                    required
                    onChange={handleChange}
                    value={formData.businessEmail}
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phoneNumber" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+62 812 3456 789"
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded focus:ring-2 focus:ring-red-600/20 transition-all outline-none text-gray-700 font-medium"
                    required
                    onChange={handleChange}
                    value={formData.phoneNumber}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="category" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Product Category</label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    className="w-full bg-gray-50 border-none px-6 py-4 rounded focus:ring-2 focus:ring-red-600/20 transition-all outline-none appearance-none cursor-pointer text-gray-700 font-medium"
                    onChange={handleChange}
                    value={formData.category}
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="projectDetails" className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Project Details & Specifications</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows="5"
                  placeholder="Describe dimensions, material requirements, environmental conditions, and quantity..."
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded focus:ring-2 focus:ring-red-600/20 transition-all outline-none resize-none text-gray-700 font-medium"
                  required
                  onChange={handleChange}
                  value={formData.projectDetails}
                />
              </div>

              <div className="flex items-center gap-4 py-2">
                <input
                  type="checkbox"
                  id="requestConsultation"
                  name="requestConsultation"
                  className="w-5 h-5 accent-red-700 cursor-pointer rounded"
                  onChange={handleChange}
                  checked={formData.requestConsultation}
                />
                <label htmlFor="requestConsultation" className="text-xs font-bold text-[#001D3D] uppercase cursor-pointer tracking-wider">
                  Request Technical Consultation
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-6 bg-[#B22222] text-white px-10 py-5 rounded font-black uppercase tracking-[0.2em] text-xs hover:bg-[#8B0000] transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Submit Quote Request
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Right Side - Brand Context & Contact */}
          <div className="lg:col-span-5 space-y-16">
            {/* Branding Card */}
            <div className="relative overflow-hidden rounded-xl group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800"
                alt="Engineering Context"
                className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D]/95 via-[#001D3D]/30 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-white text-4xl font-black mb-1">CV. HUDA JAYA</h3>
                <span className="text-red-500 text-[10px] font-black tracking-[0.4em] uppercase">LEGACY OF ENGINEERING</span>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-gray-50/50 p-12 rounded-xl space-y-10">
              <h4 className="text-[10px] font-black text-red-700 uppercase tracking-widest border-b border-red-100 pb-4 inline-block">Direct Contact</h4>
              <div className="space-y-8">
                <div className="flex gap-8">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#001D3D] shadow-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="text-gray-600 leading-relaxed text-sm font-medium">
                    Jl. Industri Raya No. 42, <br />
                    Kawasan Industri Jababeka, <br />
                    Cikarang, Indonesia
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#001D3D] shadow-sm shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="text-gray-600 leading-relaxed text-sm font-medium">
                    engineering@hudajaya.co.id
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#001D3D] shadow-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="text-gray-600 leading-relaxed text-sm font-medium">
                    +62 (21) 8934 1222
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Standards */}
            <div className="space-y-10 pl-4">
              <h4 className="text-[10px] font-black text-[#001D3D] uppercase tracking-[0.3em]">Engineering Standards</h4>
              <div className="space-y-10">
                {ENGINEERING_STANDARDS.map((std) => (
                  <div key={std.id} className="flex gap-8 group">
                    <div className="text-5xl font-black text-gray-100 group-hover:text-red-500/10 transition-colors duration-500 select-none">
                      {std.id}
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-black text-sm text-[#001D3D] tracking-tight">{std.title}</h5>
                      <p className="text-xs text-gray-500 leading-relaxed max-w-xs">{std.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
