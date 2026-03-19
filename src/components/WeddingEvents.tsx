import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Haldi Ceremony",
    emoji: "🌼",
    date: "13th February 2026",
    time: "10:00 AM",
    venue: "Bride's Residence, Chennai",
    description: "An auspicious ceremony to bless the bride and groom with turmeric.",
  },
  {
    title: "Mehendi",
    emoji: "🌿",
    date: "13th February 2026",
    time: "4:00 PM",
    venue: "Bride's Residence, Chennai",
    description: "An evening of art, music, and beautiful henna designs.",
  },
  {
    title: "Wedding Ceremony",
    emoji: "🪔",
    date: "15th February 2026",
    time: "Muhurtham: 9:15 AM",
    venue: "Sri Kapaleeshwarar Temple, Mylapore",
    description: "The sacred union performed with Vedic rituals and blessings.",
  },
  {
    title: "Reception",
    emoji: "🎊",
    date: "15th February 2026",
    time: "7:00 PM",
    venue: "The Grand Ballroom, Taj Coromandel, Chennai",
    description: "Join us for an evening of celebration, music, and feast.",
  },
];

const WeddingEvents = () => {
  return (
    <section className="py-20 bg-background relative" id="events">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2 font-body">Celebrations</p>
          <h2 className="font-display text-primary text-3xl md:text-4xl mb-4">Wedding Events</h2>
          <div className="section-divider w-32 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="bg-card gold-border rounded-lg p-6 hover:diya-glow transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="text-4xl mb-3">{event.emoji}</div>
              <h3 className="font-display text-primary text-xl mb-2">{event.title}</h3>
              <p className="font-body text-muted-foreground text-sm mb-4">{event.description}</p>
              <div className="space-y-2 font-body text-sm">
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-4 h-4 text-accent" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  {event.venue}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;
