import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { KpiSection } from "@/components/kpi-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <KpiSection />
      </main>
      <Footer />
    </div>
  );
}
