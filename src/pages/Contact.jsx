import { Container, PageLayout, ActionCard } from "@/components/common";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants";

// Assets
import technicalSupportImg from "@/assets/images/support/technical_support.png";
import quoteImg from "@/assets/images/support/request_quote.jpg";
import locationImg from "@/assets/images/support/find_location.jpg";

export default function Contact() {
  const navigate = useNavigate();

  const handleSupportClick = () => {
    // WhatsApp redirect for technical support
    window.open("https://wa.me/628112069931", "_blank");
  };

  const handleQuoteClick = () => {
    // Navigate to dedicated quote page
    navigate(ROUTES.QUOTE);
  };

  const handleLocationClick = () => {
    // Navigate to dedicated find location page
    navigate(ROUTES.LOCATION);
  };

  return (
    <PageLayout
      title="Support"
      subtitle="Find technical and professional support for your industrial application needs."
      breadcrumbs={[{ label: "Support" }]}
    >
      {/* Support Actions Section */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Support */}
            <ActionCard
              image={technicalSupportImg}
              title="Technical Support"
              buttonText="Contact Support"
              onButtonClick={handleSupportClick}
            >
              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                  Response protocols
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                  <p className="text-sm font-medium text-gray-700">24/7 technical monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                  <p className="text-sm font-medium text-gray-700">Engineer direct consultation</p>
                </div>
              </div>
            </ActionCard>

            {/* Request Quote */}
            <ActionCard
              image={quoteImg}
              title="Request Quote"
              buttonText="Make Your Inquiry"
              onButtonClick={handleQuoteClick}
              buttonColor="bg-[#B22222]"
              hoverButtonColor="hover:bg-[#8B0000]"
            >
              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                  Valuation process
                </p>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                  <p className="text-sm font-medium text-gray-700">Precision manufacturing estimates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" />
                  <p className="text-sm font-medium text-gray-700">Detailed component breakdown</p>
                </div>
              </div>
            </ActionCard>

            {/* Find Location */}
            <ActionCard
              image={locationImg}
              title="Find Location"
              buttonText="View on map"
              onButtonClick={handleLocationClick}
              buttonColor="bg-[#0066FF]"
              hoverButtonColor="hover:bg-blue-700"
            >
              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">
                  Workshop address
                </p>
                <p className="text-sm font-bold text-[#001D3D] leading-relaxed">
                  Jl. Industri Raya No. 42,
                  <br />
                  Kawasan Industri Jababeka, Cikarang.
                </p>
                <div className="pt-2 border-t border-gray-50">
                  <p className="text-[10px] text-gray-500 font-medium italic">
                    Open for technical inspections: Mon-Fri 08:00 - 17:00
                  </p>
                </div>
              </div>
            </ActionCard>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
