import React from "react";
import { SITE_CONFIG } from "../data/config";
import { MapPin, Navigation, MessageCircle, Phone, Clock, Compass } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080c15] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Visit Om Sai Crackers
          </h2>
          <p className="mt-3.5 text-slate-300 text-sm sm:text-base">
            Easily accessible location in Hosur for purchasing and collecting your celebration crackers.
          </p>
        </div>

        {/* Location Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Column */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Shop Address
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
                  {SITE_CONFIG.shopName}
                </h3>
                <p className="text-base text-slate-300 mt-2 leading-relaxed">
                  {SITE_CONFIG.locationDisplay}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Near SIPCOT Phase II, Hosur, Krishnagiri District, Tamil Nadu.
                </p>
              </div>

              {/* Quick Contact & Info Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 block">
                      WhatsApp / Phone
                    </span>
                    <a
                      href={SITE_CONFIG.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-400 block">
                      Festival Inquiries
                    </span>
                    <span className="text-sm font-bold text-white">
                      Open Every Day
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                💡 <strong>Visiting Tip:</strong> You can message us on WhatsApp before visiting to verify stock availability of specific gift boxes and crackers.
              </div>
            </div>

            {/* Direction Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={SITE_CONFIG.getWhatsAppUrl("Hi Om Sai Crackers, I would like to get directions and visit your shop at Second SIPCOT, Hosur.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Ask Location on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Column */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 min-h-[360px] flex flex-col justify-between">
            {/* Map Preview Graphic Background */}
            <div className="absolute inset-0 bg-slate-950">
              <iframe
                title="Om Sai Crackers Second SIPCOT Hosur Map"
                src="https://maps.google.com/maps?q=Second+SIPCOT+Hosur+Tamil+Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2] opacity-80"
                loading="lazy"
                aria-hidden="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c15] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Map Overlay Card */}
            <div className="relative z-10 m-6 p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md max-w-sm self-start shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>Second SIPCOT, Hosur</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Direct navigation via Google Maps Search destination.
              </p>
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 mt-2.5 underline"
              >
                <span>Open in Google Maps App</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
