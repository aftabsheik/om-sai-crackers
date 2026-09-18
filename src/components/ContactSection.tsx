import React from "react";
import { SITE_CONFIG } from "../data/config";
import { MessageCircle, Navigation, Sparkles, PhoneCall } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1d] relative overflow-hidden">
      {/* Festive atmospheric radial glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-amber-500/30 shadow-2xl text-center flex flex-col items-center">
          {/* Sparkle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Celebrate with Om Sai Crackers</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-white tracking-tight mb-4 max-w-3xl">
            Ready to Light Up Your Celebration?
          </h2>

          {/* Description */}
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Browse our collection and contact Om Sai Crackers on WhatsApp for product details and orders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
            {/* Primary WhatsApp CTA */}
            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl shadow-emerald-950/60 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
            </a>

            {/* Direct Call / Contact CTA */}
            <a
              href={`tel:+${SITE_CONFIG.whatsappRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <PhoneCall className="w-5 h-5 text-amber-400" />
              <span>Call: {SITE_CONFIG.whatsappDisplay}</span>
            </a>

            {/* Get Directions CTA */}
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <Navigation className="w-4 h-4 fill-slate-950" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Location reassurance footer */}
          <div className="mt-8 text-xs text-slate-400 font-medium">
            📍 Store Address: {SITE_CONFIG.locationDisplay}
          </div>
        </div>
      </div>
    </section>
  );
};
