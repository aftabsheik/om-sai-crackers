import { useState } from "react";
import { PRODUCTS, type Product } from "../data/products";
import { CATEGORIES } from "../data/categories";
import { SITE_CONFIG } from "../data/config";
import { ProductModal } from "./ProductModal";
import { MessageCircle, Search, Sparkles, Eye, Info, PackageCheck } from "lucide-react";

interface ProductSectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Filter products by selected category and search query
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="crackers" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080c15] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Selection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Popular Crackers
          </h2>
          <p className="mt-3.5 text-slate-300 text-sm sm:text-base">
            Explore our bestselling fireworks range. Click WhatsApp to inquire directly about any product.
          </p>

          {/* Demo Disclaimer notice */}
          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] sm:text-xs text-slate-400">
            <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>
              <strong>Demo Products:</strong> Shown for presentation purposes. Contact shop for live prices & availability.
            </span>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="mb-10 space-y-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 no-scrollbar justify-start lg:justify-center">
            <button
              onClick={() => onSelectCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              All Crackers ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sparklers, flower pots, rockets, gift boxes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm text-slate-200 placeholder-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Grid (12-16 items) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-900/40 rounded-2xl border border-slate-800">
            <PackageCheck className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No crackers found</h3>
            <p className="text-sm text-slate-400 mb-4">
              Try searching with different keywords or switch categories.
            </p>
            <button
              onClick={() => {
                onSelectCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/40 shadow-lg hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Product Card Image */}
                <div
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-slate-950 shadow-md">
                      {product.badge}
                    </span>
                  )}

                  {/* Category Tag */}
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-950/80 text-amber-300 border border-amber-400/20 backdrop-blur-sm">
                    {product.categoryName}
                  </span>

                  {/* Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProduct(product);
                    }}
                    className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-slate-950/80 text-slate-200 hover:text-white hover:bg-slate-800 border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Quick View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Packaging Info */}
                    <div className="text-[11px] font-medium text-slate-400 mb-1 flex items-center gap-1">
                      <span>📦 {product.packaging}</span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="text-base sm:text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price and WhatsApp CTA */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Estimate:</span>
                      <span className="text-base font-extrabold text-amber-400 font-serif">
                        {product.price}
                      </span>
                    </div>

                    {/* WhatsApp Action Button */}
                    <a
                      href={SITE_CONFIG.getProductInquiryUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs shadow-md shadow-emerald-950/40 active:scale-95 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
