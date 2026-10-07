import React from 'react';
import { ShoppingBag, MessageCircle, Bot, MapPin, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { RumahGadangLogo } from './RumahGadangLogo.tsx';

interface FooterProps {
  onOpenAiChat: () => void;
  onOpenWaModal: () => void;
  onOpenVoucherModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAiChat,
  onOpenWaModal,
  onOpenVoucherModal,
}) => {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-800 text-xs">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <RumahGadangLogo className="w-10 h-10" />
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black text-white tracking-tight">
                  Gadget<span className="text-yellow-400">Kini</span>
                </span>
                <span className="text-xs font-extrabold text-yellow-400 tracking-[0.2em] uppercase">
                  PADANG
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              Pusat rekomendasi affiliate Shopee gadget viral pilihan anak muda Kota Padang dan Sumatra Barat.
              Belanja aman dengan garansi 100% Shopee Mall, harga paling murah, gratis ongkir, plus asisten AI bahasa Padang Gen Z.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 font-semibold text-xs pt-1">
              <MapPin className="w-4 h-4" />
              <span>Kota Padang, Sumatra Barat (Taplau - Khatib Sulaiman - Limau Manis)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-yellow-400">
              Layanan Toko
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenVoucherModal}
                  className="hover:text-yellow-400 transition flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-orange-400" />
                  <span>Klaim Voucher Shopee Diskon</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenWaModal}
                  className="hover:text-yellow-400 transition flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chat WhatsApp: <strong className="text-emerald-400 font-mono">0823-9181-8989</strong></span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAiChat}
                  className="hover:text-yellow-400 transition flex items-center gap-1.5"
                >
                  <Bot className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Tanyo Uda AI Minang Gen Z</span>
                </button>
              </li>
            </ul>
          </div>

          {/* 5 Produk Unggulan */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-yellow-400">
              5 Gadget Viral Pilihan
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li className="flex justify-between">
                <span>TWS Anker R50i</span>
                <span className="text-yellow-400 font-bold">Rp 299rb</span>
              </li>
              <li className="flex justify-between">
                <span>Powerbank Anker 22.5W</span>
                <span className="text-yellow-400 font-bold">Rp 350rb</span>
              </li>
              <li className="flex justify-between">
                <span>Holder Robot Metal</span>
                <span className="text-yellow-400 font-bold">Rp 89rb</span>
              </li>
              <li className="flex justify-between">
                <span>Lampu RGB Sunset Bar</span>
                <span className="text-yellow-400 font-bold">Rp 75rb</span>
              </li>
              <li className="flex justify-between">
                <span>Cooling Pad 6 Fan Silent</span>
                <span className="text-yellow-400 font-bold">Rp 120rb</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-zinc-900 pt-6 text-[11px] text-zinc-500 space-y-2">
          <p>
            *Disclaimer: GadgetKini Padang adalah kurator resmi produk Shopee Affiliate. Seluruh tautan "Cek di Shopee" mengarahkan pengguna ke toko resmi bergaransi resmi di Shopee. Transaksi, pembayaran, dan pengiriman dilindungi sepenuhnya oleh sistem Garansi Shopee Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-zinc-400">
            <div>
              © 2026 GadgetKini Padang • Dibuat khusus untuak dunsanak kasadonyo di Ranah Minang ⚡
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bangga Buatan Ranah Minang</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
