import FeatureSection from "../shared/components/FeatureSection/FeatureSection";
import Footer from "../shared/components/Footer";
import HeroSection from "../shared/components/HeroSection/HeroSection";
import Navbar from "../shared/components/Navbar/Navbar";

export default function HomePage() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <FeatureSection />
    <Footer />
    </>
  );
}