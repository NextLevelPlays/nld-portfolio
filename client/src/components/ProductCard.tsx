/*
 * Design: Midnight Forge — Industrial Minimalism
 * Product Card: Glass-morphism surface, product icon, status badge, description, CTA
 * Featured products get larger cards; products with timers show ScarcityTimer
 */
import { type Product } from '@/lib/products';
import ScarcityTimer from './ScarcityTimer';
import { Phone, Shield, BookOpen } from 'lucide-react';

const statusBadgeClass: Record<string, string> = {
  live: 'badge-live',
  dev: 'badge-dev',
  complete: 'badge-complete',
  concept: 'badge-concept',
  beta: 'badge-beta',
};

// Placeholder icons for products without logos
function PlaceholderIcon({ productId }: { productId: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    screenclean: <Phone className="w-8 h-8 text-[#00d4ff]" />,
    botstopper: <Shield className="w-8 h-8 text-[#00d4ff]" />,
    mystories: <BookOpen className="w-8 h-8 text-[#00d4ff]" />,
  };

  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-[#00d4ff]/15 to-[#0088cc]/10 border border-[#00d4ff]/20 flex items-center justify-center">
      {iconMap[productId] || <div className="w-8 h-8 rounded-full bg-[#00d4ff]/20" />}
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  index: number;
  onCtaClick: (product: Product) => void;
}

export default function ProductCard({ product, index, onCtaClick }: ProductCardProps) {
  return (
    <div
      className="glass-card rounded-xl p-5 sm:p-6 flex flex-col h-full"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Top: Icon + Name + Status */}
      <div className="flex items-start gap-4 mb-4">
        {product.icon ? (
          <img
            src={product.icon}
            alt={product.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-contain bg-[#0b1120]/50 p-1"
          />
        ) : (
          <PlaceholderIcon productId={product.id} />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-sans font-bold text-white text-lg sm:text-xl mb-1 truncate">
            {product.name}
          </h3>
          <p className="font-body text-[#00d4ff] text-xs sm:text-sm font-medium mb-2">
            {product.tagline}
          </p>
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-medium ${
              statusBadgeClass[product.statusType] || 'badge-dev'
            }`}
          >
            {product.status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-[#94a3b8] text-sm leading-relaxed mb-4 flex-1">
        {product.description}
      </p>

      {/* Scarcity Timer */}
      {product.hasTimer && <ScarcityTimer />}

      {/* CTA Button */}
      <button
        onClick={() => onCtaClick(product)}
        className={`mt-4 w-full py-3 rounded-md text-sm font-sans font-semibold transition-all duration-300 ${
          product.hasTimer
            ? 'btn-cyan'
            : product.statusType === 'live'
            ? 'btn-cyan'
            : 'bg-transparent border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50'
        }`}
      >
        {product.cta}
      </button>
    </div>
  );
}
