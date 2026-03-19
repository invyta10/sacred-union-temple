import { Heart } from "lucide-react";

const WeddingFooter = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="section-divider w-32 mx-auto mb-10" />

        <h3 className="font-display text-primary text-xl mb-6">With Love & Blessings From</h3>

        <div className="grid sm:grid-cols-2 gap-8 max-w-lg mx-auto mb-10">
          <div>
            <p className="font-display text-accent text-sm tracking-wider uppercase mb-2">Bride's Family</p>
            <p className="font-body text-foreground text-lg">Mr. & Mrs. Sundaram</p>
            <p className="font-body text-muted-foreground text-sm">Chennai, Tamil Nadu</p>
          </div>
          <div>
            <p className="font-display text-accent text-sm tracking-wider uppercase mb-2">Groom's Family</p>
            <p className="font-body text-foreground text-lg">Mr. & Mrs. Raghavan</p>
            <p className="font-body text-muted-foreground text-sm">Madurai, Tamil Nadu</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-body text-muted-foreground text-sm mb-1">For any queries, contact us at</p>
          <p className="font-body text-foreground">+91 98765 43210 | wedding@minakshikarthik.com</p>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <span>for Minakshi & Karthik</span>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;
