import React from 'react';
import { Bot, MessageCircle, ShoppingBag, Sparkles, MapPin, Zap, Tag } from 'lucide-react';
import { RumahGadangLogo } from './RumahGadangLogo.tsx';

interface NavbarProps {
  onOpenAiChat: (initialQuery?: string) => void;
  onOpenVoucherModal: () => void;
  onOpenWaModal: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const CATEGORIES = ['Semua', 'Audio', 'Power', 'Aksesoris', 'Estetik', 'Komputer'];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAiChat,
  onOpenVoucherModal,
  onOpenWaModal,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-yellow-500/20 shadow-lg shadow-black/80">
      {/* Top Bar Banner - Sleek Black Background */}
      <div className="bg-black text-zinc-300 border-b border-zinc-800/80 px-4 py-1.5 text-xs font-semibold flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap mx-auto md:mx-0">
          <span className="flex items-center gap-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase">
            ⚡ PADANG VIRAL
          </span>
          <span className="flex items-center gap-1 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-yellow-400" />
            Rekomendasi Affiliate Shopee Resmi Kota Padang & Sumbar
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="hidden sm:inline text-zinc-400">100% Produk Original Garansi Shopee Mall</span>
        </div>

        <button
          onClick={onOpenVoucherModal}
          className="hidden md:flex items-center gap-1.5 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400 hover:text-zinc-950 px-2.5 py-0.5 rounded-full text-xs transition font-bold"
        >
          <Tag className="w-3.5 h-3.5" />
          Klaim Voucher Gratis Ongkir
        </button>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          {/* Brand Logo: Rumah Gadang Gold */}
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer flex items-center justify-center">
              <RumahGadangLogo className="w-11 h-11 sm:w-13 sm:h-13 transition-transform duration-300 group-hover:scale-105" />
              <div
                className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black animate-pulse"
                title="Toko Online & CS Aktif"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                  Gadget<span className="text-yellow-400">Kini</span>
                </span>
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-yellow-400 uppercase leading-none">
                  PADANG
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 tracking-wider uppercase font-medium mt-1 hidden sm:block">
                E-Commerce • Shopee Affiliate Resmi
              </p>
            </div>
          </div>

          {/* Search Box on Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Cari gadget (TWS, Anker, Holder, Lampu RGB, Cooling Pad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-zinc-500 hover:text-zinc-200 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp button */}
            <button
              onClick={onOpenWaModal}
              className="flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition border border-emerald-400/40 shadow-sm"
              title="Chat WhatsApp Toko: 082391818989"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">Chat WA</span>
            </button>

            {/* Shopee Voucher CTA */}
            <button
              onClick={onOpenVoucherModal}
              className="flex items-center gap-1.5 bg-orange-600/90 hover:bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition border border-orange-400/40 shadow-sm"
              title="Cek Promo Shopee"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Voucher Shopee</span>
            </button>

            {/* AI Assistant CTA */}
            <button
              onClick={() => onOpenAiChat()}
              className="relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-zinc-950 font-black px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition shadow-[0_0_18px_rgba(250,204,21,0.4)] group"
            >
              <Bot className="w-4 h-4 animate-bounce" />
              <span>Uda AI Minang</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search & Category Pills */}
        <div className="mt-3 flex flex-col gap-2.5">
          <div className="lg:hidden">
            <input
              type="text"
              placeholder="Cari gadget viral Padang..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 rounded-xl px-3.5 py-1.5 text-xs focus:outline-none focus:border-yellow-400 transition"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-zinc-500 text-[11px] font-medium mr-1 whitespace-nowrap">Filter:</span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition text-xs ${
                    active
                      ? 'bg-yellow-400 text-zinc-950 font-bold shadow-md shadow-yellow-500/20'
                      : 'bg-zinc-900/90 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
