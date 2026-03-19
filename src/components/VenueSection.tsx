import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const VenueSection = () => {
  return (
    <section className="py-20 bg-background" id="venue">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2 font-body">Location</p>
          <h2 className="font-display text-primary text-3xl md:text-4xl mb-4">Wedding Venue</h2>
          <div className="section-divider w-32 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-primary text-xl mb-3">Sri Kapaleeshwarar Temple</h3>
            <p className="font-body text-muted-foreground mb-4 text-lg leading-relaxed">
              One of the most ancient and revered temples of Lord Shiva, located in the heart of Mylapore, Chennai. 
              The wedding ceremony will take place in the sacred mandapam within the temple premises.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start text-foreground font-body">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Mylapore, Chennai, Tamil Nadu 600004</span>
            </div>
            <a
              href="https://maps.google.com/?q=Sri+Kapaleeshwarar+Temple+Mylapore+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 gold-border rounded-full font-body text-primary text-sm tracking-wider uppercase hover:bg-accent/10 transition-all"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden gold-border h-64 md:h-80"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.2694!3d13.0338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e21b9ffa07%3A0x2f0cd0a6e7a0346f!2sSri%20Kapaleeshwarar%20Temple!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
