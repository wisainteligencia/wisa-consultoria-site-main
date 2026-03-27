import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TransitionSection from "@/components/TransitionSection";
import SolutionSection from "@/components/SolutionSection";
import DiferencialSection from "@/components/DiferencialSection";
import ResultSection from "@/components/ResultSection";
import HubSection from "@/components/HubSection";
import CtaSection from "@/components/CtaSection";
import IsaAssistant from "@/components/IsaAssistant";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainSection />
      <TransitionSection />
      <SolutionSection />
      <DiferencialSection />
      <ResultSection />
      <HubSection />
      <CtaSection />
      <Footer />
      <IsaAssistant />
    </div>
  );
};

export default Index;
