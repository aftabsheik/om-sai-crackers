import { CATEGORIES, type Category } from "../data/categories";
import { SITE_CONFIG } from "../data/config";
import { MessageCircle, ArrowUpRight, Flame } from "lucide-react";

interface CategorySectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: Category) => {
    onSelectCategory(category.id);
    const elem = document.getElementById("crackers");
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
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090e1a] relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Product Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Explore Our Crackers
          </h2>
          <p className="mt-3.5 text-slate-300 text-sm sm:text-base">
            Discover carefully curated fireworks designed to bring brilliance, color, and excitement to every celebration.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Category Image Header */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                {/* Badge if present */}
                {category.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                    {category.badge}
                  </span>
                )}

                {/* Variety Count Tag */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-amber-300 border border-amber-400/20 backdrop-blur-sm">
                  {category.itemCount}
                </span>

                {/* Category Title Overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                    {category.highlight}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {category.description}
                </p>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:underline cursor-pointer"
                  >
                    <span>View Products</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <a
                    href={SITE_CONFIG.getCategoryInquiryUrl(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
