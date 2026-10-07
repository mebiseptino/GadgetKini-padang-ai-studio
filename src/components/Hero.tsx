import React, { useState } from 'react';
import { Sparkles, Bot, ShoppingBag, ShieldCheck, Zap, Copy, Check, MessageSquare, Flame } from 'lucide-react';
import { VOUCHER_CODES, QUICK_AI_QUESTIONS } from '../data/products.ts';

interface HeroProps {
  onOpenAiChat: (initialQuery?: string) => void;
  onOpenVoucherModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiChat, onOpenVoucherModal }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white pt-8 pb-12 border-b border-zinc-800">
      {/* Background Tech Glow & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-5">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/40 text-yellow-300 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
              <span>Gudang Gadget Viral Kota Padang</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-300">Shopee Affiliate Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Cari Gadget Keren di <span className="text-yellow-400 underline decoration-yellow-500 decoration-wavy decoration-2">Padang</span>?
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Harga Shopee Paling Murah!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Dapekkan 5 gadget viral pilihan anak mudo Padang mulai dari <strong className="text-yellow-400">Rp 75rb</strong>!
              Garansi resmi Shopee Mall, link voucher diskon s/d 50%, jo konsultasi asik bareng{' '}
              <span className="text-yellow-300 font-semibold underline">Uda AI bahasa Padang Gen Z</span>.
            </p>

            {/* 5 Price Badges Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              <div className="bg-zinc-900/90 border border-yellow-500/20 rounded-xl p-2.5 flex items-center gap-2">
                <span className="text-lg">🎧</span>
                <div>
                  <div className="text-[11px] text-zinc-400 font-medium">TWS Anker R50i</div>
                  <div className="text-xs font-extrabold text-yellow-400">Rp 299.000</div>
                </div>
              </div>
              <div className="bg-zinc-900/90 border border-yellow-500/20 rounded-xl p-2.5 flex items-center gap-2">
                <span className="text-lg">🔋</span>
                <div>
                  <div className="text-[11px] text-zinc-400 font-medium">Powerbank Anker</div>
                  <div className="text-xs font-extrabold text-yellow-400">Rp 350.000</div>
                </div>
              </div>
              <div className="bg-zinc-900/90 border border-yellow-500/20 rounded-xl p-2.5 flex items-center gap-2">
                <span className="text-lg">🦾</span>
                <div>
                  <div className="text-[11px] text-zinc-400 font-medium">Holder Robot Metal</div>
                  <div className="text-xs font-extrabold text-yellow-400">Rp 89.000</div>
                </div>
              </div>
              <div className="bg-zinc-900/90 border border-yellow-500/20 rounded-xl p-2.5 flex items-center gap-2">
                <span className="text-lg">🌈</span>
                <div>
                  <div className="text-[11px] text-zinc-400 font-medium">Lampu RGB Sunset</div>
                  <div className="text-xs font-extrabold text-yellow-400">Rp 75.000</div>
                </div>
              </div>
              <div className="bg-zinc-900/90 border border-yellow-500/20 rounded-xl p-2.5 flex items-center gap-2 sm:col-span-2">
                <span className="text-lg">❄️</span>
                <div>
                  <div className="text-[11px] text-zinc-400 font-medium">Cooling Pad Laptop 6 Fan Silent</div>
                  <div className="text-xs font-extrabold text-yellow-400">Rp 120.000</div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Prompt Chips */}
            <div className="pt-2">
              <div className="text-xs font-bold text-zinc-400 flex items-center gap-1.5 mb-2">
                <Bot className="w-3.5 h-3.5 text-yellow-400" />
                <span>Tanyo langsuang ka Uda AI Minang (klik pertanyaan):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_AI_QUESTIONS.slice(0, 3).map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOpenAiChat(q)}
                    className="bg-zinc-900 hover:bg-yellow-400 hover:text-zinc-950 text-zinc-300 text-xs px-2.5 py-1 rounded-lg border border-zinc-700/80 transition flex items-center gap-1 group font-medium"
                  >
                    <span>{q}</span>
                    <span className="text-yellow-400 group-hover:text-zinc-950">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Shopee Voucher Hub Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-zinc-900 via-zinc-900 to-black p-5 sm:p-6 rounded-2xl border-2 border-yellow-500/40 shadow-2xl shadow-yellow-500/10">
              {/* Badge top */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Shopee Voucher Hemat Padang</h3>
                    <p className="text-[11px] text-zinc-400">Klaim kode & pakai di Shopee</p>
                  </div>
                </div>
                <span className="bg-yellow-400 text-zinc-950 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  Aktif Hari Ini
                </span>
              </div>

              {/* Voucher items list */}
              <div className="space-y-2.5 my-4">
                {VOUCHER_CODES.map((v) => (
                  <div
                    key={v.code}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/50 transition group"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-yellow-400 text-xs tracking-wider">
                          {v.code}
                        </span>
                        <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-1.5 py-0.2 rounded font-semibold">
                          {v.discount}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">{v.minSpend}</p>
                    </div>

                    <button
                      onClick={() => handleCopy(v.code)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        copiedCode === v.code
                          ? 'bg-emerald-500 text-zinc-950'
                          : 'bg-zinc-800 hover:bg-yellow-400 hover:text-zinc-950 text-zinc-200'
                      }`}
                    >
                      {copiedCode === v.code ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Bot Pitch Inside Card */}
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                  🤠
                </div>
                <div className="text-xs">
                  <p className="font-bold text-yellow-300">Uda AI Siap Bantu Sanak!</p>
                  <p className="text-zinc-300 text-[11px]">
                    "Bingung pilih mana? Tanyoan se ka Uda pakai bahaso Padang, langsuang dijawab detik itu juo!"
                  </p>
                </div>
              </div>

              {/* Action buttons inside Card */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  onClick={() => onOpenAiChat()}
                  className="bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-extrabold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-lg shadow-yellow-500/20"
                >
                  <Bot className="w-4 h-4" />
                  <span>Chat Uda AI</span>
                </button>
                <button
                  onClick={onOpenVoucherModal}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition border border-zinc-700"
                >
                  <ShoppingBag className="w-4 h-4 text-orange-400" />
                  <span>Tips Belanja</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10 mt-8 border-t border-zinc-800/80 text-xs">
          <div className="flex items-center gap-2.5 text-zinc-300 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/60">
            <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
            <div>
              <div className="font-bold text-white">100% Original</div>
              <div className="text-[11px] text-zinc-400">Garansi Shopee Mall & Star+</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-300 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/60">
            <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Gratis Ongkir Xtra</div>
              <div className="text-[11px] text-zinc-400">Kirim sampai Kota Padang & luar kota</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-300 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/60">
            <Bot className="w-4 h-4 text-yellow-400 shrink-0" />
            <div>
              <div className="font-bold text-white">AI Urang Awak</div>
              <div className="text-[11px] text-zinc-400">Chat gaul Minang Gen Z 24 Jam</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-300 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/60">
            <MessageSquare className="w-4 h-4 text-yellow-400 shrink-0" />
            <div>
              <div className="font-bold text-white">Konsultasi WA Cepat</div>
              <div className="text-[11px] text-zinc-400">Respon ramah langsung dari Uda</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
