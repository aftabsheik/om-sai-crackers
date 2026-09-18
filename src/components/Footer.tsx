import React from "react";
import { SITE_CONFIG } from "../data/config";
import { Sparkles, MapPin, Phone, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
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
    <footer className="bg-[#060911] border-t border-slate-800 text-slate-400 pt-16 pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
                <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <span className="text-xl font-extrabold font-serif text-white tracking-wider">
                {SITE_CONFIG.shopName}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premium crackers and fireworks for brighter celebrations. Serving families and festival shoppers across Hosur, Tamil Nadu.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-amber-400/90 font-medium">
              <span>✨ Sivakasi Fireworks Demo Catalog</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, "home")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={(e) => handleScrollTo(e, "categories")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Product Categories
                </a>
              </li>
              <li>
                <a
                  href="#crackers"
                  onClick={(e) => handleScrollTo(e, "crackers")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Popular Crackers
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, "about")}
                  className="hover:text-amber-400 transition-colors"
                >
                  About Shop
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Location Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Shop Information
            </h4>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <span>{SITE_CONFIG.locationDisplay}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={SITE_CONFIG.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-medium"
                >
                  WhatsApp: {SITE_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:+${SITE_CONFIG.whatsappRaw}`}
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  Phone: {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.shopName}. All rights reserved.
          </p>
          <p className="text-slate-400 text-center sm:text-right">
            Sales Demo Website for Om Sai Crackers • Second SIPCOT, Hosur
          </p>
        </div>
      </div>
    </footer>
  );
};
