import React from "react";
import { SITE_CONFIG } from "../data/config";
import { Sparkles, MapPin, MessageCircle, Building2, ShieldCheck, HeartHandshake } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1d] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1513297887119-d46091b24b80?auto=format&fit=crop&w=1000&q=80"
                alt="Om Sai Crackers festive fireworks showcase"
                className="w-full h-80 sm:h-96 object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-serif">
                    <Sparkles className="w-4 h-4" />
                    <span>OM SAI CRACKERS</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Second SIPCOT, Hosur, Tamil Nadu</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Ambient decorative glow */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Us</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
                Celebrate Every Moment
              </h2>
              <p className="text-base text-amber-400 font-medium">
                Your destination for festive fireworks in Hosur
              </p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Om Sai Crackers</strong> is a local fireworks shop located at Second SIPCOT, Hosur, Tamil Nadu. We specialize in providing a diverse and vibrant selection of crackers for Diwali, weddings, New Year, temple festivals, and family celebrations.
              </p>
              <p>
                From classic family favorites like sparklers and flower pots to thrilling ground chakkars, aerial rockets, multi-shot cakes, and comprehensive festival gift boxes, our collection brings color and excitement to your special occasions.
              </p>
              <p>
                We believe in simple, transparent communication. Connect with us directly on WhatsApp to explore available varieties, discuss custom requirements, and arrange your festival purchases conveniently.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Carefully Selected Fireworks
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                <HeartHandshake className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  Direct WhatsApp Support
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
