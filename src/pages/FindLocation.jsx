import { useState } from "react";
import { PageLayout, Container } from "@/components/common";
import { Search, MapPin, ChevronDown, Navigation, Globe } from "lucide-react";
import { ROUTES } from "@/constants";

const LOCATIONS = [
  {
    id: 1,
    name: "CV. HUDA JAYA",
    tagline: "Roll Specialist and Custom Machine",
    categories: ["Rubber Roll", "Steel Roll", "Custom Machine"],
    city: "Sumedang",
    lat: -6.8589, // Approximate Sumedang
    lng: 107.9153,
    address: "Kawasan Industri Sumedang, Indonesia",
    phone: "+62 812 2346 2914",
    type: "Headquarters & Workshop"
  },
  {
    id: 2,
    name: "PT. JAYA ABADI PERSADA",
    tagline: "Authorized Distributor",
    categories: ["Bearings", "Lubrication", "Maintenance"],
    city: "Jakarta Pusat",
    lat: -6.1751,
    lng: 106.8650,
    address: "Jl. Gajah Mada No. 123, Jakarta Pusat",
    type: "Authorized Partner"
  },
  {
    id: 3,
    name: "INDOTECH ENGINEERING",
    tagline: "Service Partner",
    categories: ["Services", "Power Transmission"],
    city: "Surabaya",
    lat: -7.2575,
    lng: 112.7521,
    address: "Kawasan SIER, Rungkut, Surabaya",
    type: "Service Center"
  }
];

const FILTERS = [
  "All", 
  "Bearings", 
  "Lubrication", 
  "Maintenance products", 
  "Seals", 
  "Power transmission", 
  "Services"
];

export default function FindLocation() {
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <PageLayout
      title="Find Location"
      subtitle="Find a trusted workshop and trusted partner for CV. Hudajaya solutions in your area."
      breadcrumbs={[
        { label: "Support", path: ROUTES.CONTACT },
        { label: "Find Location" }
      ]}
    >
      <section className="py-12 bg-white min-h-screen">
        <Container size="xl">
          {/* Search and Filters Header */}
          <div className="mb-12 space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <div className="w-full md:max-w-md space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Location or name</label>
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search for city or distributor..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 px-16 py-4 rounded-xl focus:ring-2 focus:ring-blue-600/20 transition-all outline-none font-medium"
                  />
                </div>
              </div>
              <button className="flex items-center gap-3 text-blue-600 font-bold hover:text-blue-800 transition-colors py-4 px-6 rounded-xl hover:bg-blue-50">
                <Navigation size={20} />
                Near me
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-lg border transition-all font-medium text-sm ${
                    activeFilter === filter
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                      : "bg-white border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Master-Detail Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-2xl h-[700px]">
            
            {/* Left Panel: Location List */}
            <div className="lg:col-span-4 bg-white overflow-y-auto border-r border-gray-100 custom-scrollbar">
              <div className="p-2 space-y-2">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`p-8 cursor-pointer transition-all border-b border-gray-50 last:border-0 hover:bg-gray-50 group relative ${
                      activeLocation.id === loc.id ? "bg-gray-50/80" : ""
                    }`}
                  >
                    {activeLocation.id === loc.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                    )}
                    
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3 text-gray-400">
                        <MapPin size={18} className={activeLocation.id === loc.id ? "text-blue-600" : ""} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{loc.type}</span>
                      </div>
                      <ChevronDown size={18} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#001D3D] mb-1 group-hover:text-blue-600 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mb-6">
                      {loc.tagline}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {loc.categories.map((cat) => (
                        <span key={cat} className="px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 rounded uppercase tracking-wider">
                          {cat}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-base font-bold text-[#001D3D]">
                      {loc.city}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Map View */}
            <div className="lg:col-span-8 bg-gray-100 relative min-h-[400px]">
              {/* Dynamic Google Maps Embed (Placeholder for real integration) */}
              <iframe
                title="Location Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_GG_API_KEY&q=${encodeURIComponent(activeLocation.address)}&center=${activeLocation.lat},${activeLocation.lng}&zoom=14`}
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
              
              {/* Fallback Overlay (If API key is missing) */}
              <div className="absolute inset-0 bg-[#f8f9fa] flex items-center justify-center pointer-events-none opacity-5">
                <Globe size={120} className="text-blue-600" />
              </div>
              
              {/* Floating Info Over Map */}
              <div className="absolute bottom-10 left-10 p-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 max-w-sm hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-blue-600/20 shadow-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001D3D]">{activeLocation.name}</h4>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{activeLocation.city}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-medium mb-6">
                  {activeLocation.address}
                </p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#001D3D] text-white px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-blue-900 transition-all flex items-center justify-center gap-2 pointer-events-auto shadow-xl shadow-blue-900/10">
                    <Navigation size={14} />
                    Directions
                  </button>
                  <button className="flex-1 bg-white border border-gray-200 text-gray-600 px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all pointer-events-auto shadow-md">
                    Details
                  </button>
                </div>
              </div>

              {/* Map Controls Mockup */}
              <div className="absolute top-6 left-6 flex gap-2">
                <button className="bg-white px-4 py-2 rounded shadow-md font-bold text-xs text-[#001D3D] shadow-xl">Peta</button>
                <button className="bg-gray-50/50 backdrop-blur-md px-4 py-2 rounded shadow-md font-bold text-xs text-gray-600 shadow-xl border border-white/20">Satelit</button>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
