import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-01T09:15:00+05:30").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTime());

  function calculateTime() {
    const diff = WEDDING_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 temple-bg relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2 font-body">Counting Down To</p>
          <h2 className="font-display text-gold text-3xl md:text-4xl mb-2">The Muhurtham</h2>
          <p className="text-gold-light/70 font-body mb-10">1st April 2026 • 9:15 AM IST</p>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 gold-border rounded-lg flex items-center justify-center diya-glow mb-2"
                style={{ background: "hsl(0, 20%, 12%)" }}
              >
                <span className="font-display text-gold text-2xl md:text-4xl">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-gold-light/70 text-xs md:text-sm font-body tracking-wider uppercase">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
