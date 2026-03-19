import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import coupleHero from "@/assets/couple-hero.jpg";

const photos = [gallery1, gallery2, coupleHero];

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % photos.length);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);

  return (
    <section className="py-20 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2 font-body">Moments</p>
          <h2 className="font-display text-primary text-3xl md:text-4xl mb-4">Our Gallery</h2>
          <div className="section-divider w-32 mx-auto" />
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden gold-border">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={photos[current]}
                alt={`Gallery photo ${current + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center gold-border bg-background/80 text-primary hover:bg-accent/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center gold-border bg-background/80 text-primary hover:bg-accent/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-accent w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
