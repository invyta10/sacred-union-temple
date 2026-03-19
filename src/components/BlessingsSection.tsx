import { motion } from "framer-motion";
import kolamPattern from "@/assets/kolam-pattern.png";

const BlessingsSection = () => {
  return (
    <section className="py-20 temple-bg relative overflow-hidden">
      <img src={kolamPattern} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 opacity-5" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2 font-body">Sacred Verse</p>
          <h2 className="font-display text-gold text-3xl md:text-4xl mb-8">Blessings</h2>
          <div className="section-divider w-32 mx-auto mb-10" />
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-sanskrit text-gold text-2xl md:text-3xl leading-relaxed mb-6">
            मांगल्यं तन्तुनानेन मम जीवनहेतुना ।<br />
            कण्ठे बध्नामि सुभगे सञ्जीव शरदः शतम् ॥
          </p>
          <p className="font-body text-gold-light/80 text-lg italic leading-relaxed mb-4">
            "This is a sacred thread of marriage. This is essential for my long life.
            I tie this around your neck, O maiden having many auspicious attributes.
            May you live happily for a hundred years."
          </p>
          <p className="text-gold/50 font-body text-sm">— Mangalya Dharanam (Tying of the sacred thread)</p>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-8 text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="animate-flicker">🪔</span>
          <span className="animate-gentle-pulse">🌺</span>
          <span className="animate-flicker" style={{ animationDelay: "0.7s" }}>🪔</span>
        </motion.div>
      </div>
    </section>
  );
};

export default BlessingsSection;
