import React from 'react';
import { ShoppingBag, MessageCircle, Bot, Star, ShieldCheck, ArrowUpRight, Zap, Info } from 'lucide-react';
import { Product } from '../data/products.ts';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (p: Product) => void;
  onOpenShopee: (p: Product) => void;
  onOpenWa: (p: Product) => void;
  onAskAi: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetail,
  onOpenShopee,
  onOpenWa,
  onAskAi,
}) => {
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="group relative bg-zinc-900/90 rounded-2xl border-2 border-zinc-800 hover:border-yellow-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] flex flex-col overflow-hidden">
      {/* Top Banner Tag */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-zinc-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/60" />

        {/* Badges on Top */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
          <span className="bg-yellow-400 text-zinc-950 font-black text-[11px] px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
            {product.badge}
          </span>
          {product.shopeeMall && (
            <span className="bg-red-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow">
              Shopee Mall
            </span>
          )}
          {product.shopeeStarPlus && !product.shopeeMall && (
            <span className="bg-orange-500 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow">
              Star+
            </span>
          )}
        </div>

        {/* Discount Badge on Right */}
        <div className="absolute top-3 right-3 bg-red-600/90 text-white font-black text-xs px-2 py-1 rounded-lg border border-red-400 shadow-lg">
          -{product.discountPercentage}%
        </div>

        {/* Category Pill at bottom left of image */}
        <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
          <span className="bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-zinc-700/80 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {product.brand}
          </span>
          <span className="bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {product.soldCount}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-zinc-500 font-normal">({product.reviewCount})</span>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Asli
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-base sm:text-lg font-bold text-white hover:text-yellow-400 transition-colors cursor-pointer line-clamp-2 leading-snug"
          >
            {product.name}
          </h3>

          {/* Local Minang Tagline Quote */}
          <div className="mt-2 text-[11px] text-yellow-300/90 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-2.5 py-1 italic flex items-start gap-1.5">
            <span className="text-yellow-400 font-bold not-italic">Uda:</span>
            <span>"{product.taglineMinang}"</span>
          </div>

          {/* Pricing Highlight */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-yellow-400 tracking-tight">
              {formatRupiah(product.price)}
            </span>
            <span className="text-xs text-zinc-500 line-through">
              {formatRupiah(product.originalPrice)}
            </span>
          </div>

          {/* Key Specs tags */}
          <div className="mt-2.5 flex flex-wrap gap-1">
            {product.specs.slice(0, 3).map((s, idx) => (
              <span
                key={idx}
                className="bg-zinc-800/80 text-zinc-300 text-[10px] px-2 py-0.5 rounded border border-zinc-700/60"
              >
                {s.value}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons (Cek di Shopee & Chat WA) */}
        <div className="space-y-2 pt-2 border-t border-zinc-800">
          {/* Main Affiliate CTA Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {/* Cek di Shopee Button */}
            <button
              onClick={() => onOpenShopee(product)}
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-2.5 px-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-lg shadow-orange-500/20 active:scale-95 group/btn"
              title="Cek harga promo termurah di Shopee"
            >
              <ShoppingBag className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              <span>Cek di Shopee</span>
            </button>

            {/* Chat WA Button */}
            <button
              onClick={() => onOpenWa(product)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-lg shadow-emerald-600/20 active:scale-95"
              title="Konsultasi cepat via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat WA</span>
            </button>
          </div>

          {/* Secondary Buttons: Tanya Uda AI & Detail Lengkap */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onAskAi(product)}
              className="bg-zinc-800 hover:bg-yellow-400 hover:text-zinc-950 text-yellow-400 border border-yellow-500/40 font-semibold py-1.5 px-2 rounded-lg text-xs flex items-center justify-center gap-1 transition"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Tanyo AI Minang</span>
            </button>

            <button
              onClick={() => onOpenDetail(product)}
              className="bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 font-medium py-1.5 px-2 rounded-lg text-xs flex items-center justify-center gap-1 transition"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Spesifikasi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
