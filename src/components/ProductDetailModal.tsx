import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Bot, ShieldCheck, Truck, Check, Copy, ArrowUpRight } from 'lucide-react';
import { Product } from '../data/products.ts';
import { trackShopeeClick } from '../utils/analytics.ts';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenShopee: (p: Product) => void;
  onOpenWa: (p: Product) => void;
  onAskAi: (p: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenShopee,
  onOpenWa,
  onAskAi,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!product) return null;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCopyCode = () => {
    trackShopeeClick(product, 'copy_affiliate_code_detail');
    navigator.clipboard.writeText(product.shopeeAffiliateCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-zinc-900 border-2 border-yellow-500/50 rounded-2xl shadow-2xl overflow-hidden my-8 text-zinc-100 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-zinc-950 font-black text-xs px-2.5 py-1 rounded uppercase">
              {product.badge}
            </span>
            <span className="text-xs text-zinc-400 font-mono">Kode Promo: {product.shopeeAffiliateCode}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Section: Image and Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-square border border-zinc-800 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-zinc-950/80 backdrop-blur px-2.5 py-1 rounded text-xs text-yellow-400 font-semibold border border-yellow-400/30">
                100% Produk Original Bergaransi
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                  {product.brand}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mt-1">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex items-center text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-zinc-500">•</span>
                  <span className="text-zinc-400">{product.soldCount}</span>
                  <span className="text-zinc-500">•</span>
                  <span className="text-emerald-400 font-semibold">{product.reviewCount} Ulasan Pembeli</span>
                </div>
              </div>

              {/* Price Banner */}
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-1">
                <div className="text-xs text-zinc-400">Harga Promo Shopee Eksklusif:</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-yellow-400">
                    {formatRupiah(product.price)}
                  </span>
                  <span className="text-sm text-zinc-500 line-through">
                    {formatRupiah(product.originalPrice)}
                  </span>
                  <span className="bg-red-600/90 text-white font-bold text-xs px-2 py-0.5 rounded">
                    Hemat {product.discountPercentage}%
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 pt-1 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Dukung Voucher Gratis Ongkir Xtra se-Sumbar & Indonesia</span>
                </div>
              </div>

              {/* Padang Dialect Highlight */}
              <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-3 rounded-r-xl">
                <div className="text-xs font-bold text-yellow-400">Komentar Uda GadgetKini:</div>
                <p className="text-xs text-zinc-200 italic mt-0.5">
                  "{product.taglineMinang}"
                </p>
              </div>

              {/* Shopee Code Copier */}
              <div className="flex items-center justify-between p-3 bg-zinc-800/80 rounded-xl border border-zinc-700">
                <div className="text-xs">
                  <span className="text-zinc-400 block text-[11px]">Kode Tracking Promo Shopee:</span>
                  <span className="font-mono font-bold text-yellow-400 text-sm">{product.shopeeAffiliateCode}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-700 hover:bg-yellow-400 hover:text-zinc-950 text-xs font-semibold transition"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-yellow-400">
              Deskripsi Produk
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-yellow-400">
              Fitur Unggulan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80 text-xs">
                  <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-200">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs Table */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-yellow-400">
              Spesifikasi Lengkap
            </h3>
            <div className="border border-zinc-800 rounded-xl overflow-hidden divide-y divide-zinc-800 bg-zinc-950">
              {product.specs.map((s, idx) => (
                <div key={idx} className="flex text-xs p-3">
                  <span className="w-1/3 font-semibold text-zinc-400">{s.label}</span>
                  <span className="w-2/3 font-medium text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Local Padang User Review */}
          <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 border border-yellow-500/30 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white">{product.padangReview.reviewer}</span>
                <span className="text-[11px] text-zinc-400 ml-2">📍 {product.padangReview.area}</span>
              </div>
              <div className="flex text-amber-400">
                {[...Array(product.padangReview.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-300 italic">
              "{product.padangReview.comment}"
            </p>
            <div className="bg-yellow-400/10 p-2 rounded text-[11px] text-yellow-300 font-medium">
              🗣️ <strong>Versi Urang Awak:</strong> "{product.padangReview.commentMinang}"
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-950 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {/* Cek di Shopee CTA */}
          <button
            onClick={() => {
              onClose();
              onOpenShopee(product);
            }}
            className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 transition"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cek di Shopee ({formatRupiah(product.price)})</span>
          </button>

          {/* Chat WhatsApp CTA */}
          <button
            onClick={() => {
              onClose();
              onOpenWa(product);
            }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat WhatsApp Toko</span>
          </button>

          {/* Ask AI CTA */}
          <button
            onClick={() => {
              onClose();
              onAskAi(product);
            }}
            className="bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 active:scale-95 transition"
          >
            <Bot className="w-4 h-4" />
            <span>Tanyo Uda AI Minang</span>
          </button>
        </div>
      </div>
    </div>
  );
};
