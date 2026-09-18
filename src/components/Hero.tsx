import React from "react";
import { SITE_CONFIG } from "../data/config";
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck, MapPin, Zap } from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const handleScrollToCrackers = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    }
    const elem = document.getElementById("crackers");
    if (elem) {
      const navOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#080c15]"
    >
      {/* Real Fireworks Hero Background Image with Atmospheric Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85"
          alt="Night fireworks festive sky celebration"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.15]"
          loading="eager"
        />
        {/* Deep Festive Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c15] via-[#080c15]/60 to-[#080c15]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c15] via-transparent to-[#080c15]/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Festive Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-black/40 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Hosur's Trusted Fireworks Destination • Second SIPCOT</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif text-white tracking-tight leading-[1.15] sm:leading-[1.1] mb-6 drop-shadow-md">
          Light Up Your <br className="hidden sm:inline" />
          <span className="text-gradient-gold">Celebration ✨</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
          {SITE_CONFIG.subtitle}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none">
          {/* Explore Crackers Button */}
          <a
            href="#crackers"
            onClick={handleScrollToCrackers}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 group cursor-pointer"
          >
            <span>Explore Crackers</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* WhatsApp Order Button */}
          <a
            href={SITE_CONFIG.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Key Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16 w-full max-w-3xl pt-8 border-t border-white/10">
          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              Genuine Sivakasi Fireworks
            </span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              Quick WhatsApp Inquiries
            </span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              Second SIPCOT, Hosur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
