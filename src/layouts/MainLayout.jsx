import { Header, Footer } from "@/components/common";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
