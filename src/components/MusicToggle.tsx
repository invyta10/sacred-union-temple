import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      onClick={() => setPlaying(!playing)}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full gold-border flex items-center justify-center bg-card/90 backdrop-blur-sm text-primary hover:bg-accent/20 transition-all diya-glow"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
};

export default MusicToggle;
