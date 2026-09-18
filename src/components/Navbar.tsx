import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "../data/config";
import { Sparkles, Menu, X, MessageCircle, Phone, MapPin } from "lucide-react";

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    }
    const elem = document.getElementById(targetId);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080c15]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl shadow-black/40"
          : "bg-gradient-to-b from-[#080c15]/95 via-[#080c15]/80 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-slate-950 fill-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-lg sm:text-xl text-white font-serif flex items-center gap-1.5">
                {SITE_CONFIG.shopName}
              </span>
              <span className="text-[11px] font-medium text-amber-400/90 tracking-widest uppercase flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" /> Hosur • Sivakasi Crackers
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={(e) => handleLinkClick(e, "categories")}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Categories
            </a>
            <a
              href="#crackers"
              onClick={(e) => handleLinkClick(e, "crackers")}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Crackers
            </a>
            <a
              href="#why-us"
              onClick={(e) => handleLinkClick(e, "why-us")}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Why Us
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
            >
              About
            </a>
            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, "location")}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Location
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors rounded-lg hover:bg-white/5"
            >
              Contact
            </a>
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm shadow-md shadow-emerald-950/40 hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 border-b border-slate-800/80 pb-3">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={(e) => handleLinkClick(e, "categories")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Categories
            </a>
            <a
              href="#crackers"
              onClick={(e) => handleLinkClick(e, "crackers")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Popular Crackers
            </a>
            <a
              href="#why-us"
              onClick={(e) => handleLinkClick(e, "why-us")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#how-to-order"
              onClick={(e) => handleLinkClick(e, "how-to-order")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              How to Order
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              About Shop
            </a>
            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, "location")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Location & Map
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={SITE_CONFIG.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 active:scale-98 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Order on WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
              <span className="flex items-center gap-1 text-amber-400">
                <MapPin className="w-3.5 h-3.5" /> Second SIPCOT, Hosur
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" /> Call: {SITE_CONFIG.whatsappDisplay}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
