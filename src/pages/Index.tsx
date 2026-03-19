import { useState } from "react";
import EntryScreen from "@/components/EntryScreen";
import HeroSection from "@/components/HeroSection";
import WeddingEvents from "@/components/WeddingEvents";
import CountdownTimer from "@/components/CountdownTimer";
import VenueSection from "@/components/VenueSection";
import RSVPForm from "@/components/RSVPForm";
import PhotoGallery from "@/components/PhotoGallery";
import BlessingsSection from "@/components/BlessingsSection";
import WeddingFooter from "@/components/WeddingFooter";
import FloatingPetals from "@/components/FloatingPetals";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <EntryScreen onEnter={() => setEntered(true)} />}
      {entered && (
        <div className="relative">
          <FloatingPetals />
          <MusicToggle />
          <HeroSection />
          <WeddingEvents />
          <CountdownTimer />
          <VenueSection />
          <PhotoGallery />
          <RSVPForm />
          <BlessingsSection />
          <WeddingFooter />
        </div>
      )}
    </>
  );
};

export default Index;
