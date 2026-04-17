import { PageLayout } from "@/components/common";
import QuoteRequestPortal from "@/components/contact/QuoteRequestPortal";
import { ROUTES } from "@/constants";

export default function QuoteRequest() {
  return (
    <PageLayout
      title="Request Quote"
      subtitle="Request a precision-calculated estimate for your specialized industrial project requirements."
      breadcrumbs={[
        { label: "Support", path: ROUTES.CONTACT },
        { label: "Request Quote" }
      ]}
    >
      {/* The Detailed Quote Request Portal (High Fidelity Form) */}
      <QuoteRequestPortal />
    </PageLayout>
  );
}
