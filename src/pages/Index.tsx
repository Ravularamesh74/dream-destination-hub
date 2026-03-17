import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CabServices from "@/components/CabServices";
import TourPackages from "@/components/TourPackages";
import AboutSection from "@/components/AboutSection";
import FleetSection from "@/components/FleetSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <HeroSection />
    <CabServices />
    <TourPackages />
    <AboutSection />
    <FleetSection />
    <StatsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
