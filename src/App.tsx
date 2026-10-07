import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { ShopeeModal } from './components/ShopeeModal.tsx';
import { WhatsAppModal } from './components/WhatsAppModal.tsx';
import { AiChatDrawer } from './components/AiChatDrawer.tsx';
import { Footer } from './components/Footer.tsx';
import { PRODUCTS, Product, VOUCHER_CODES } from './data/products.ts';
import { trackShopeeClick } from './utils/analytics.ts';
import { Bot, MessageCircle, ShoppingBag, Sparkles, HelpCircle, ChevronDown, CheckCircle2, Flame, MapPin } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Global listener for any Shopee link clicked in the document
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (target && target.href && target.href.includes('shopee.co.id')) {
        const matchedProduct = PRODUCTS.find((p) => p.shopeeUrl === target.href);
        trackShopeeClick(matchedProduct || null, 'external_anchor_shopee');
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Modals state
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [shopeeProduct, setShopeeProduct] = useState<Product | null>(null);
  const [waProduct, setWaProduct] = useState<Product | null>(null);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [aiInitialQuery, setAiInitialQuery] = useState<string | undefined>(undefined);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = selectedCategory === 'Semua' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.taglineMinang.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenAiChat = (query?: string) => {
    setAiInitialQuery(query);
    setIsAiChatOpen(true);
  };

  const handleOpenShopee = (product: Product, sourceLocation: string = 'product_card_button') => {
    trackShopeeClick(product, sourceLocation);
    setShopeeProduct(product);
  };

  const handleOpenWa = (product: Product) => {
    setWaProduct(product);
  };

  const handleAskAiForProduct = (product: Product) => {
    const question = `Halo Uda, rancak jalehan ka ambo fitur dan kelebihan ${product.name} (Rp ${product.price.toLocaleString('id-ID')}) jo baa caro dapek harga paliang murah di Shopee!`;
    handleOpenAiChat(question);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-zinc-950">
      {/* Navbar */}
      <Navbar
        onOpenAiChat={() => handleOpenAiChat()}
        onOpenVoucherModal={() => {
          trackShopeeClick(PRODUCTS[0], 'navbar_voucher_button');
          setShopeeProduct(PRODUCTS[0]);
        }}
        onOpenWaModal={() => setWaProduct(PRODUCTS[0])}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAiChat={handleOpenAiChat}
          onOpenVoucherModal={() => {
            trackShopeeClick(PRODUCTS[0], 'hero_voucher_button');
            setShopeeProduct(PRODUCTS[0]);
          }}
        />

        {/* Catalog Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Flame className="w-4 h-4 fill-yellow-400" />
                <span>Katalog Resmi Shopee Affiliate Padang</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                5 Gadget Viral Paling Dicari
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                Setiap produk dilengkapi tombol <strong>Cek di Shopee</strong> untuk link termurah bergaransi resmi, tombol <strong>Chat WA</strong>, dan konsultasi <strong>AI Bahasa Padang Gen Z</strong>!
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl self-start md:self-auto">
              <span className="text-zinc-400 px-2 font-medium">Menampilkan:</span>
              <span className="bg-yellow-400 text-zinc-950 font-bold px-2 py-0.5 rounded-md">
                {filteredProducts.length} dari 5 Produk
              </span>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetail={setDetailProduct}
                  onOpenShopee={handleOpenShopee}
                  onOpenWa={handleOpenWa}
                  onAskAi={handleAskAiForProduct}
                />
              ))}
            </div>
          ) : (
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-12 text-center max-w-md mx-auto space-y-3">
              <div className="text-4xl">🔍</div>
              <h3 className="text-lg font-bold text-white">Gadget Indak Ditemukan Sanak</h3>
              <p className="text-xs text-zinc-400">
                Pencarian untuk "{searchQuery}" tidak ada di 5 produk utama kami. Coba klik kategori lain atau reset pencarian.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                }}
                className="bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs px-4 py-2 rounded-xl transition"
              >
                Reset Filter & Pencarian
              </button>
            </div>
          )}

          {/* Shopee Flash Deals & Affiliate Guarantee Banner */}
          <div className="mt-14 bg-gradient-to-r from-zinc-900 via-zinc-900 to-black rounded-2xl border-2 border-yellow-500/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-zinc-950 font-black text-[11px] px-2.5 py-0.5 rounded uppercase">
                  ⚡ Jaminan Belanja Shopee Affiliate GadgetKini
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                  Manga harus cek gadget lewat link GadgetKini Padang?
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Garansi 100% Produk Original dari Shopee Mall / Star+</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Otomatis klaim link voucher Shopee termurah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Bebas ongkir sampai ka Padang & Sumatera Barat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Konsultasi gratis jo Uda AI Minang 24 jam</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4 flex flex-col gap-2.5">
                <button
                  onClick={() => handleOpenAiChat('Uda, baa trik dapek gratis ongkir jo diskon Shopee Video 50% di Padang?')}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-black py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition active:scale-98"
                >
                  <Bot className="w-4 h-4" />
                  <span>Tanya Trik Diskon ka Uda AI</span>
                </button>
                <button
                  onClick={() => setShopeeProduct(PRODUCTS[0])}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 transition active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Cek Semua Voucher Shopee</span>
                </button>
              </div>
            </div>
          </div>

          {/* Local Padang FAQ Section */}
          <div className="mt-14 max-w-4xl mx-auto space-y-4">
            <div className="text-center space-y-1 mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Tanya Jawab Seputar GadgetKini Padang
              </h3>
              <p className="text-xs text-zinc-400">
                Informasi seputar pembelian gadget affiliate Shopee dan konsultasi AI
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-1.5">
                <h4 className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                  Apakah belanja lewat tombol "Cek di Shopee" aman?
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                  Sangat aman sanak! Saat sanak klik "Cek di Shopee", sanak akan langsung diarahkan ke halaman resmi official store di aplikasi Shopee. Pembayaran menggunakan rekening resmi Shopee (ShopeePay, SPayLater, Transfer Bank, atau COD) dan dilindungi penuh oleh Garansi Shopee.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-1.5">
                <h4 className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                  Bara lamo paket sampai ka Kota Padang & sakitarnyo?
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                  Biasonyo untuak pengiriman reguler (J&T, SPX, SiCepat) dari warehouse resmi memakan waktu 2-3 hari kerja sampai ke alamat sanak di Padang (Khatib, Kuranji, Ulak Karang, Lubeg, Unand, dll.).
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-1.5">
                <h4 className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                  Baa caro pakai fitur Chat Uda AI Minang Gen Z?
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                  Sanak tinggal klik tombol kuning bergambar robot di pojok kanan bawah atau tombol "Tanyo AI Minang" di tiap produk. Sanak bisa tanyo apa saja: perbandingan gadget, rekomendasi buat anak kuliah/ojol/gaming, sampai minta tips voucher Shopee dengan bahasa Minang gaul!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating CTA Buttons on Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Floating Bubble Teaser */}
        <div className="hidden sm:flex items-center gap-2 bg-zinc-900/95 border border-yellow-400/50 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl shadow-black/80 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Woi sanak! Tanyo Uda AI Minang disiko 🤠⚡</span>
        </div>

        <div className="flex items-center gap-2">
          {/* WhatsApp Floating Button */}
          <button
            onClick={() => handleOpenWa(PRODUCTS[0])}
            className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/40 border-2 border-emerald-400/40 active:scale-95 transition"
            title="Chat WhatsApp CS Padang: 082391818989"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>

          {/* AI Chat Floating Button */}
          <button
            onClick={() => handleOpenAiChat()}
            className="group relative flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-300 text-zinc-950 font-black px-4 py-3 rounded-full shadow-[0_0_25px_rgba(250,204,21,0.6)] border-2 border-yellow-200 active:scale-95 transition"
            title="Buka Chat AI Uda Minang Gen Z"
          >
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-extrabold pr-1">Uda AI Minang</span>
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border border-zinc-950"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Modals & Drawers */}
      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onOpenShopee={handleOpenShopee}
          onOpenWa={handleOpenWa}
          onAskAi={handleAskAiForProduct}
        />
      )}

      {shopeeProduct && (
        <ShopeeModal
          product={shopeeProduct}
          onClose={() => setShopeeProduct(null)}
        />
      )}

      {waProduct && (
        <WhatsAppModal
          product={waProduct}
          onClose={() => setWaProduct(null)}
        />
      )}

      <AiChatDrawer
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
        initialQuery={aiInitialQuery}
        onOpenShopee={handleOpenShopee}
        onOpenWa={handleOpenWa}
      />

      {/* Footer */}
      <Footer
        onOpenAiChat={() => handleOpenAiChat()}
        onOpenWaModal={() => handleOpenWa(PRODUCTS[0])}
        onOpenVoucherModal={() => handleOpenShopee(PRODUCTS[0])}
      />
    </div>
  );
}
