import React from "react";
import { SITE_CONFIG } from "../data/config";
import { Search, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Browse",
      subtitle: "Explore the Collection",
      description: "Look through our popular fireworks catalog, including sparklers, flower pots, rockets, and gift boxes.",
      icon: <Search className="w-6 h-6 text-amber-400" />
    },
    {
      step: "02",
      title: "WhatsApp",
      subtitle: "Send Requirements",
      description: "Click any product's WhatsApp button or send your custom cracker list directly to 9944127799.",
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />
    },
    {
      step: "03",
      title: "Confirm",
      subtitle: "Discuss & Finalize",
      description: "Confirm current availability, pricing, order packing, and collection details directly with the shop.",
      icon: <CheckCircle2 className="w-6 h-6 text-amber-400" />
    }
  ];

  return (
    <section id="how-to-order" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080c15] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Ordering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            How To Order
          </h2>
          <p className="mt-3.5 text-slate-300 text-sm sm:text-base">
            Simple 3-step ordering process. No complicated cart or online checkout — chat directly with us on WhatsApp.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, index) => (
            <div
              key={index}
              className="relative p-7 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-6 text-4xl sm:text-5xl font-extrabold font-serif text-slate-800 group-hover:text-amber-500/20 transition-colors select-none">
                {s.step}
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {s.icon}
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Step {s.step}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors">
                    {s.title} — {s.subtitle}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Progress arrow indicator for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <a
            href={SITE_CONFIG.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Start WhatsApp Chat Now: {SITE_CONFIG.whatsappDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
