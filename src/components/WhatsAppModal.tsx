import React, { useState } from 'react';
import { X, MessageCircle, Send, Check, Phone, ArrowUpRight, Copy } from 'lucide-react';
import { Product } from '../data/products.ts';

interface WhatsAppModalProps {
  product: Product | null;
  onClose: () => void;
}

const STORE_WA_NUMBER = '6282391818989';

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const defaultText = product.whatsappMessage || 'Halo Uda GadgetKini Padang, ambo nio tanyo rekomendasi gadget viral!';

  const [message, setMessage] = useState(defaultText);
  const [copied, setCopied] = useState(false);

  const handleSendWa = () => {
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${STORE_WA_NUMBER}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyWa = () => {
    navigator.clipboard.writeText(STORE_WA_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-md bg-zinc-900 border-2 border-emerald-500/60 rounded-2xl shadow-2xl overflow-hidden my-8 text-zinc-100">
        {/* WhatsApp Branded Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 flex items-center justify-center shadow-md">
              <MessageCircle className="w-6 h-6 fill-emerald-600" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                Customer Service Padang
              </div>
              <h3 className="text-lg font-black leading-tight">
                Chat WhatsApp GadgetKini
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
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-zinc-400 block text-[10px]">Nomor WhatsApp Toko:</span>
                <span className="font-mono font-bold text-white text-sm">+62 823-9181-8989</span>
              </div>
            </div>
            <button
              onClick={handleCopyWa}
              className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-emerald-600 text-zinc-200 text-xs transition"
            >
              {copied ? 'Tersalin!' : 'Salin Nomor'}
            </button>
          </div>

          {product && (
            <div className="bg-yellow-400/10 border border-yellow-400/30 p-2.5 rounded-xl text-xs flex items-center gap-2">
              <span className="text-lg">📦</span>
              <div>
                <span className="text-yellow-400 font-bold block">{product.name}</span>
                <span className="text-zinc-400 text-[11px]">Harga Shopee: Rp {product.price.toLocaleString('id-ID')}</span>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1.5">
              Pesan yang akan dikirim ke WhatsApp:
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-400 transition resize-none"
            />
            <p className="text-[11px] text-zinc-500 mt-1">
              *Pesan otomatis terisi sesuai gadget yang sanak pilih.
            </p>
          </div>

          {/* Quick preset chips */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-semibold text-zinc-400">Pilihan pesan cepat:</div>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <button
                onClick={() => setMessage('Halo Uda GadgetKini, ambo nio minta link voucher Shopee Gratis Ongkir Xtra untuak produk ko yo!')}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-700 transition"
              >
                Minta Voucher Gratis Ongkir
              </button>
              <button
                onClick={() => setMessage('Halo Uda, ambo urang Padang. Apakah bisa order langsung atau dikirim instant Grab/Gojek?')}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-700 transition"
              >
                Tanya Pengiriman Padang
              </button>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 space-y-2">
            <button
              onClick={handleSendWa}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 transition active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Buka Chat WhatsApp Sekarang</span>
            </button>
            <button
              onClick={onClose}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-2 rounded-xl text-xs transition"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
