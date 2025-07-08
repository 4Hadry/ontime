import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 font-sans text-slate-800">
      <Header />
      <HeroSection />
      <SecondSection />
    </div>
  );
}
