import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CategorySection } from "./components/CategorySection";
import { ProductSection } from "./components/ProductSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowToOrder } from "./components/HowToOrder";
import { AboutSection } from "./components/AboutSection";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleExploreClick = () => {
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen bg-[#080c15] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar onNavigate={() => {}} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 2. Categories Section */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* 3. Popular Products Section with Filter & Search */}
        <ProductSection
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. How To Order (3-Step WhatsApp process) */}
        <HowToOrder />

        {/* 6. About OM SAI CRACKERS */}
        <AboutSection />

        {/* 7. Store Location & Directions */}
        <LocationSection />

        {/* 8. Contact & Final CTA */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Elements */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
