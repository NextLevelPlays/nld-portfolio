/*
 * Design: Midnight Forge — Industrial Minimalism
 * Portfolio: Section header, 3-column grid for featured, 3-column for additional
 * Scroll-triggered stagger animation
 */
import { products } from '@/lib/products';
import ProductCard from './ProductCard';
import { type Product } from '@/lib/products';
import { useStaggerAnimation } from '@/hooks/useScrollAnimation';

interface PortfolioSectionProps {
  onCtaClick: (product: Product) => void;
}

export default function PortfolioSection({ onCtaClick }: PortfolioSectionProps) {
  const featured = products.filter((p) => p.featured);
  const additional = products.filter((p) => !p.featured);
  const { ref: featuredRef, isVisible: featuredVisible } = useStaggerAnimation(featured.length);
  const { ref: additionalRef, isVisible: additionalVisible } = useStaggerAnimation(additional.length);

  return (
    <section id="products" className="relative py-24 sm:py-32">
      {/* Subtle top divider */}
      <div className="cyan-line w-full mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-xs tracking-[0.3em] uppercase block mb-4">
            Product Portfolio
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What We're Building
          </h2>
          <p className="font-body text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto">
            Nine AI-powered products across outdoor safety, contractor tools, personal development,
            social gaming, and consumer protection.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div ref={featuredRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featured.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${
                  featuredVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <ProductCard
                  product={product}
                  index={index}
                  onCtaClick={onCtaClick}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Products */}
        {additional.length > 0 && (
          <>
            <div className="cyan-line w-1/3 mx-auto my-12" />
            <div className="text-center mb-10">
              <span className="font-mono text-[#475569] text-xs tracking-[0.2em] uppercase">
                More in the Pipeline
              </span>
            </div>
            <div ref={additionalRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additional.map((product, index) => (
                  <div
                    key={product.id}
                    className={`transition-all duration-700 ${
                      additionalVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <ProductCard
                      product={product}
                      index={index}
                      onCtaClick={onCtaClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
