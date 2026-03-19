import { motion } from "framer-motion";
import coupleHero from "@/assets/couple-hero.jpg";
import kolamPattern from "@/assets/kolam-pattern.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden temple-bg py-20">
      {/* Kolam patterns */}
      <img
        src={kolamPattern}
        alt=""
        className="absolute top-10 left-10 w-32 md:w-48 opacity-10"
      />
      <img
        src={kolamPattern}
        alt=""
        className="absolute bottom-10 right-10 w-32 md:w-48 opacity-10"
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Om symbol */}
        <motion.p
          className="text-gold text-3xl mb-4 font-sanskrit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ॐ
        </motion.p>

        {/* Couple Photo */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gold-border diya-glow mb-8"
          style={{ borderWidth: "3px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={coupleHero}
            alt="Minakshi & Karthik"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gold-light text-sm tracking-[0.4em] uppercase mb-2 font-body">We are getting married</p>
          <h1 className="font-display gold-text text-4xl md:text-6xl lg:text-7xl mb-4">
            Minakshi
          </h1>
          <p className="text-gold font-display text-2xl md:text-3xl mb-4">&</p>
          <h1 className="font-display gold-text text-4xl md:text-6xl lg:text-7xl mb-6">
            Karthik
          </h1>
        </motion.div>

        <motion.div
          className="section-divider w-48 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.p
          className="font-body text-gold-light text-lg md:text-xl italic max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          "Two souls, one journey — blessed by the divine, bound by love"
        </motion.p>

        <motion.p
          className="text-gold text-lg mt-6 font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          Saturday,  1st April 2026
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
