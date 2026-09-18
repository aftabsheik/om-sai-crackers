import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "../data/config";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Desktop / Tablet Floating Action Stack (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 text-amber-400 hover:text-white hover:bg-slate-800 border border-amber-500/30 shadow-xl backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Pill / Button */}
        <a
          href={SITE_CONFIG.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold shadow-2xl shadow-emerald-950/80 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Order on WhatsApp"
        >
          {/* Pulsing ring animation */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-60" />
          
          <MessageCircle className="w-6 h-6 fill-white/20 relative z-10" />
          <span className="text-sm font-extrabold pr-1 relative z-10">
            Order on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080c15]/95 backdrop-blur-lg border-t border-amber-500/20 p-2.5 px-3 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:+${SITE_CONFIG.whatsappRaw}`}
          className="p-3 rounded-xl bg-slate-800 text-amber-400 hover:bg-slate-700 transition-colors border border-slate-700 flex-shrink-0"
          aria-label="Call Store"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={SITE_CONFIG.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] active:bg-[#20ba5a] text-white font-extrabold text-sm shadow-lg shadow-emerald-950/60 active:scale-98 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </>
  );
};
