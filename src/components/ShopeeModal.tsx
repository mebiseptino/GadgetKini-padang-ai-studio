import React, { useState } from 'react';
import { X, ShoppingBag, ExternalLink, Copy, Check, Sparkles, Tag, ShieldCheck, HelpCircle } from 'lucide-react';
import { Product, VOUCHER_CODES } from '../data/products.ts';
import { trackShopeeClick } from '../utils/analytics.ts';

interface ShopeeModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ShopeeModal: React.FC<ShopeeModalProps> = ({ product, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!product) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleOpenShopee = () => {
    // Send GA4 tracking event
    trackShopeeClick(product, 'modal_buka_shopee_button');
    // Open official Shopee link
    window.open(product.shopeeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg bg-zinc-900 border-2 border-orange-500/60 rounded-2xl shadow-2xl overflow-hidden my-8 text-zinc-100">
        {/* Header with Shopee Signature Colors */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center font-black text-xl shadow-md">
              S
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-orange-100 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Shopee Affiliate Store • Padang
              </div>
              <h3 className="text-lg font-black leading-tight">
                Link Promo Shopee Termurah
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-black/30 hover:bg-black/50 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Target Product Quick Summary */}
          <div className="flex items-center gap-3 bg-zinc-950 p-3 rounded-xl border border-zinc-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 rounded-lg object-cover border border-zinc-700 shrink-0"
            />
            <div className="min-w-0">
              <span className="text-[10px] text-yellow-400 font-bold uppercase">{product.brand}</span>
              <h4 className="text-sm font-bold text-white truncate">{product.name}</h4>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-base font-black text-yellow-400">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                <span className="text-xs text-zinc-500 line-through">
                  Rp {product.originalPrice.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>

          {/* Vouchers to Copy */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-orange-400" />
                Klaim Voucher Diskon Shopee
              </span>
              <span className="text-[11px] text-zinc-400">Klik untuk salin</span>
            </div>

            <div className="space-y-2">
              {VOUCHER_CODES.map((v) => (
                <div
                  key={v.code}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950 border border-zinc-800"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-yellow-400 text-xs">{v.code}</span>
                      <span className="text-[10px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded font-semibold">
                        {v.discount}
                      </span>
                    </div>
                    <div className="text-[11px] text-zinc-400">{v.minSpend}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(v.code)}
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-orange-500 hover:text-white font-medium transition"
                  >
                    {copiedCode === v.code ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Triks Murah dari Uda */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-3.5 space-y-1.5 text-xs">
            <div className="font-bold text-yellow-300 flex items-center gap-1">
              <span>💡 Tips Belanja Paling Murah dari Uda:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 text-[11px] leading-relaxed">
              <li>Buka link Shopee di bawah ini untuk mengunci diskon affiliasi official store.</li>
              <li>Cek tab <strong>Shopee Live</strong> atau <strong>Shopee Video</strong> di aplikasi untuk tambahan diskon s/d 50%.</li>
              <li>Gunakan voucher <strong>Gratis Ongkir Xtra</strong> untuk bebas biaya kirim ke Padang & Sumbar!</li>
            </ul>
          </div>

          {/* Main Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleOpenShopee}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25 transition active:scale-98"
            >
              <span>Buka di Aplikasi Shopee Sekarang</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-2.5 rounded-xl text-xs transition"
            >
              Kembali ke Katalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
