export interface SiteConfig {
  shopName: string;
  tagline: string;
  subtitle: string;
  whatsappDisplay: string;
  whatsappRaw: string;
  phoneDisplay: string;
  locationDisplay: string;
  locationAddress: string;
  googleMapsUrl: string;
  getWhatsAppUrl: (message?: string) => string;
  getProductInquiryUrl: (productName: string) => string;
  getCategoryInquiryUrl: (categoryName: string) => string;
  getCustomGiftBoxUrl: () => string;
}

export const SITE_CONFIG: SiteConfig = {
  shopName: "OM SAI CRACKERS",
  tagline: "Light Up Your Celebration ✨",
  subtitle: "Premium crackers for brighter celebrations. Discover our collection and order easily on WhatsApp.",
  whatsappDisplay: "9944127799",
  whatsappRaw: "919944127799",
  phoneDisplay: "+91 9944127799",
  locationDisplay: "Second SIPCOT, Hosur, Tamil Nadu",
  locationAddress: "Second SIPCOT Industrial Complex, Hosur, Tamil Nadu 635126, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Om+Sai+Crackers+Second+SIPCOT+Hosur+Tamil+Nadu",
  
  getWhatsAppUrl: (message?: string) => {
    const text = message || "Hi Om Sai Crackers, I would like to know more about your crackers and available products.";
    return `https://wa.me/919944127799?text=${encodeURIComponent(text)}`;
  },
  
  getProductInquiryUrl: (productName: string) => {
    const text = `Hi Om Sai Crackers, I am interested in ${productName}. Please share the price and availability.`;
    return `https://wa.me/919944127799?text=${encodeURIComponent(text)}`;
  },
  
  getCategoryInquiryUrl: (categoryName: string) => {
    const text = `Hi Om Sai Crackers, I am interested in exploring your ${categoryName} collection. Please share the details and pricing.`;
    return `https://wa.me/919944127799?text=${encodeURIComponent(text)}`;
  },
  
  getCustomGiftBoxUrl: () => {
    const text = "Hi Om Sai Crackers, I would like to inquire about customized festive gift boxes and bulk orders.";
    return `https://wa.me/919944127799?text=${encodeURIComponent(text)}`;
  }
};
