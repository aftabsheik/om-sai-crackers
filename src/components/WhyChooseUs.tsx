import React from "react";
import { Sparkles, MessageCircle, Layers, MapPin, Check } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Quality Products",
      description: "Carefully selected fireworks sourced from trusted Sivakasi manufacturers for your celebrations."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      title: "Easy Ordering",
      description: "Order quickly and directly through WhatsApp without cumbersome signups or payment gateway hassles."
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-400" />,
      title: "Wide Collection",
      description: "Explore diverse types of crackers including sparklers, flower pots, sky rockets, and festive gift boxes."
    },
    {
      icon: <MapPin className="w-6 h-6 text-rose-400" />,
      title: "Local & Convenient",
      description: "Conveniently located at Second SIPCOT, Hosur, dedicated to serving local families and businesses."
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1d] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Check className="w-3.5 h-3.5" />
            <span>Our Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Why Choose Om Sai Crackers
          </h2>
          <p className="mt-3.5 text-slate-300 text-sm sm:text-base">
            We focus on genuine products, straightforward communication, and personalized service for Hosur celebrations.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-amber-500/30 transition-transform">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors mb-2.5">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
