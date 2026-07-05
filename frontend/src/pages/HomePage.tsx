import FeatureSection from "../shared/components/FeatureSection/FeatureSection";
import Footer from "../shared/components/Footer";
import HeroSection from "../shared/components/HeroSection/HeroSection";
import Navbar from "../shared/components/Navbar/Navbar";
import { useState } from "react";
import Modal from "../shared/ui/Modal";

export default function HomePage() {
  const [modalType, setModalType] =
    useState<"login" | "register" | null>(null);

  return (
    <>
      <Navbar />
      <HeroSection onLoginClick={() => setModalType("login")} onRegisterClick={() => setModalType("register")} />
      <FeatureSection />
      <Modal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
      >
        <h2>Hello TripMate 👋</h2>
      </Modal>
      <Footer />
    </>
  );
}