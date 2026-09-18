import type { Product } from "../data/products";
import { SITE_CONFIG } from "../data/config";
import { X, MessageCircle, Sparkles, CheckCircle2, Volume2, ShieldAlert, Package } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Header Image & Badge */}
          <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-950">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            
            {product.badge && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                {product.badge}
              </span>
            )}

            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900/90 text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                {product.categoryName}
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-amber-400 font-serif">
                {product.price}
              </span>
            </div>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-2">
              {product.name}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Packaging & Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Package className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Packaging</span>
                <span className="font-bold text-white">{product.packaging}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Volume2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">Sound Level</span>
                <span className="font-bold text-white">{product.soundLevel}</span>
              </div>
            </div>

            {product.duration && (
              <div className="flex items-center gap-2 text-slate-300 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Duration</span>
                  <span className="font-bold text-white">{product.duration}</span>
                </div>
              </div>
            )}
          </div>

          {/* Key Features */}
          {product.features && product.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                Product Highlights
              </h4>
              <ul className="space-y-1.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Safety Advice */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200/90 leading-relaxed">
              <strong>Safety Reminder:</strong> Light outdoors only on a flat open surface under adult supervision. Keep water bucket handy.
            </p>
          </div>

          {/* Demo Notice */}
          <p className="text-[11px] text-slate-400 italic text-center">
            * Demo product listing for Om Sai Crackers. Please contact the shop on WhatsApp for live stock and actual pricing.
          </p>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={SITE_CONFIG.getProductInquiryUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xl shadow-emerald-950/60 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Inquire & Order on WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
