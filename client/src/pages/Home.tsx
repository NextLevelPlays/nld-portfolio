/*
 * Design: Midnight Forge — Industrial Minimalism
 * Home Page: Full single-page portfolio for Next Level Digital, LLC
 * Sections: Navbar → Hero → About → Portfolio → Contact → Footer
 */
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SignupModal from '@/components/SignupModal';
import { type Product } from '@/lib/products';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCtaClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#0b1120]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection onCtaClick={handleCtaClick} />
      <ContactSection />
      <Footer />

      {/* Product Signup Modal */}
      {selectedProduct && (
        <SignupModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
