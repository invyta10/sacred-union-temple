import { useMemo } from "react";

const FloatingPetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 10 + Math.random() * 8,
        emoji: ["🌸", "🌺", "🌼"][Math.floor(Math.random() * 3)],
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute text-lg animate-petal opacity-0"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
