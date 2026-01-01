import { Sparkles, Zap, Shield, Star } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Sparkles, value: "100+", label: "Free Tools" },
    { icon: Zap, value: "Fast", label: "Processing" },
    { icon: Shield, value: "Secure", label: "& Private" },
    { icon: Star, value: "4.9", label: "User Rating" },
  ];

  return (
    <section className="hero-section text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">100+ Free Online Tools</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-slide-up">
            All Your Tools
            <span className="block text-accent">In One Place</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-slide-up" style={{ animationDelay: "100ms" }}>
            Convert images, calculate numbers, generate codes, and more. 
            Fast, free, and no registration required.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "200ms" }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-4 text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Banner */}
      <div className="container mx-auto px-4 mt-12">
        <div className="ad-placeholder h-20 md:h-24 bg-white/5 border-white/20 text-white/50">
          Advertisement Banner
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
