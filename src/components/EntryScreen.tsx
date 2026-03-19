import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import templeDoors from "@/assets/temple-doors.jpg";

const FloatingPetal = ({ delay, left }: { delay: number; left: number }) => (
  <div
    className="absolute text-2xl pointer-events-none animate-petal opacity-0"
    style={{
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${8 + Math.random() * 6}s`,
    }}
  >
    🌸
  </div>
);

const EntryScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const handleEnter = () => {
    setDoorsOpen(true);
    setTimeout(onEnter, 2200);
  };

  const petals = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 1.5,
    left: Math.random() * 100,
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "hsl(0, 20%, 8%)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {petals.map((p, i) => (
          <FloatingPetal key={i} delay={p.delay} left={p.left} />
        ))}

        {/* Diya lamps */}
        <div className="absolute bottom-8 left-8 text-4xl animate-flicker">🪔</div>
        <div className="absolute bottom-8 right-8 text-4xl animate-flicker" style={{ animationDelay: "0.5s" }}>🪔</div>

        {/* Temple Doors */}
        <div className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] overflow-hidden">
          <div className="absolute inset-0 flex">
            <div
              className={`w-1/2 h-full overflow-hidden ${doorsOpen ? "animate-door-left" : ""}`}
              style={{ transformOrigin: "left center" }}
            >
              <img src={templeDoors} alt="Temple Door Left" className="h-full w-[200%] object-cover object-left" />
            </div>
            <div
              className={`w-1/2 h-full overflow-hidden ${doorsOpen ? "animate-door-right" : ""}`}
              style={{ transformOrigin: "right center" }}
            >
              <img src={templeDoors} alt="Temple Door Right" className="h-full w-[200%] object-cover object-right" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <motion.div
          className="mt-8 text-center px-6 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">॥ शुभम् ॥</p>
          <h1 className="font-display text-gold text-xl md:text-2xl leading-relaxed mb-6">
            With the blessings of the divine, we invite you to celebrate the sacred union of
          </h1>
          <p className="gold-text font-display text-3xl md:text-4xl mb-8">
            Minakshi & Karthik
          </p>

          {!doorsOpen && (
            <motion.button
              onClick={handleEnter}
              className="px-8 py-3 gold-border rounded-full font-display text-gold text-sm tracking-widest uppercase hover:bg-gold/10 transition-all duration-300 diya-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter Invitation
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EntryScreen;
