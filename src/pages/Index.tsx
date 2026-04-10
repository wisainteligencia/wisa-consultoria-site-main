import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TransitionSection from "@/components/TransitionSection";
import SolutionSection from "@/components/SolutionSection";
import DiferencialSection from "@/components/DiferencialSection";
import ResultSection from "@/components/ResultSection";
import HubSection from "@/components/HubSection";
import RssFeed from "@/components/RssFeed";
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
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <RssFeed />
        </div>
      </section>
      <CtaSection />
      <Footer />
      <IsaAssistant />
    </div>
  );
};

export default Index;
