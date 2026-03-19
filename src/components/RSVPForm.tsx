import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const RSVPForm = () => {
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your RSVP has been received. 🪔");
    setForm({ name: "", attending: "yes", guests: "1", message: "" });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello! I'd like to RSVP for Minakshi & Karthik's wedding. Name: ${form.name}, Attending: ${form.attending}, Guests: ${form.guests}`
  );

  return (
    <section className="py-20 temple-bg" id="rsvp">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2 font-body">Kindly Respond</p>
          <h2 className="font-display text-gold text-3xl md:text-4xl mb-4">RSVP</h2>
          <div className="section-divider w-32 mx-auto" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block text-gold-light font-body text-sm mb-1">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg gold-border font-body text-gold placeholder:text-gold/40 focus:outline-none focus:ring-1 focus:ring-gold"
              style={{ background: "hsl(0, 20%, 12%)" }}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-gold-light font-body text-sm mb-1">Will you attend?</label>
            <select
              value={form.attending}
              onChange={(e) => setForm({ ...form, attending: e.target.value })}
              className="w-full px-4 py-3 rounded-lg gold-border font-body text-gold focus:outline-none focus:ring-1 focus:ring-gold"
              style={{ background: "hsl(0, 20%, 12%)" }}
            >
              <option value="yes">Joyfully Accepting</option>
              <option value="no">Regretfully Declining</option>
            </select>
          </div>

          <div>
            <label className="block text-gold-light font-body text-sm mb-1">Number of Guests</label>
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="w-full px-4 py-3 rounded-lg gold-border font-body text-gold focus:outline-none focus:ring-1 focus:ring-gold"
              style={{ background: "hsl(0, 20%, 12%)" }}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gold-light font-body text-sm mb-1">Your Blessings & Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg gold-border font-body text-gold placeholder:text-gold/40 focus:outline-none focus:ring-1 focus:ring-gold resize-none"
              style={{ background: "hsl(0, 20%, 12%)" }}
              placeholder="Write your blessings..."
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 gold-gradient rounded-lg font-display text-temple-dark text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send RSVP
            </button>
            <a
              href={`https://wa.me/918141721001?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 gold-border rounded-lg font-display text-gold text-sm tracking-wider uppercase hover:bg-gold/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp RSVP
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPForm;
