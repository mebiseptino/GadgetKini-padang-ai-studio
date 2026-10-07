import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, User, RefreshCw, ShoppingBag, MessageCircle, ExternalLink, ThumbsUp, Volume2 } from 'lucide-react';
import { QUICK_AI_QUESTIONS, PRODUCTS, Product } from '../data/products.ts';

interface Message {
  id: string;
  sender: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface AiChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onOpenShopee: (p: Product) => void;
  onOpenWa: (p: Product) => void;
}

export const AiChatDrawer: React.FC<AiChatDrawerProps> = ({
  isOpen,
  onClose,
  initialQuery,
  onOpenShopee,
  onOpenWa,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'model',
      text: 'Onde mande sanak! Ambo Uda GadgetKini AI 🤖⚡. Konsultan gadget urang awak di Padang. Sanak nio cari gadget apo ko? TWS Anker R50i, Powerbank 22.5W, Holder Robot anti goyang di jalan balubang, Lampu RGB estetik, atau Cooling Pad bia laptop indak angek? Tanyoan se ka Uda, gasskeun!',
      timestamp: 'Barusan',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus and populate initial query
  useEffect(() => {
    if (isOpen) {
      if (initialQuery) {
        setInput(initialQuery);
      }
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, initialQuery]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Build history for API
      const history = messages.map((m) => ({
        role: m.sender,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history,
        }),
      });

      const data = await res.json();
      const replyText = data.reply || 'Onde mande, saketek gangguan sanak. Coba tanyoan sakali lai yo!';

      const modelMsg: Message = {
        id: 'bot-' + Date.now(),
        sender: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback response if network issue
      const fallbackMsg: Message = {
        id: 'bot-err-' + Date.now(),
        sender: 'model',
        text: 'Woi sanak! Sinyal nyo agak lambat saketek, tapi Uda tetap rekomen cek promo 5 produk viral GadgetKini di Shopee kini ko: TWS Anker (299rb), Powerbank (350rb), Holder Robot (89rb), Lampu RGB (75rb), jo Cooling Pad (120rb)! Gass klik tombol Shopee yo!',
        timestamp: 'Barusan',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'model',
        text: 'Chat di-reset sanak! Apo nan nio sanak tanyoan seputar 5 gadget viral di GadgetKini Padang? Uda siap jawab!',
        timestamp: 'Barusan',
      },
    ]);
  };

  // Helper to detect if a message references any product to show quick affiliate action
  const findReferencedProduct = (text: string): Product | undefined => {
    const lower = text.toLowerCase();
    if (lower.includes('anker r50i') || lower.includes('tws')) {
      return PRODUCTS.find((p) => p.id === 'tws-anker-r50i');
    }
    if (lower.includes('powerbank') || lower.includes('charger') || lower.includes('powercore')) {
      return PRODUCTS.find((p) => p.id === 'powerbank-anker-fast');
    }
    if (lower.includes('holder') || lower.includes('robot')) {
      return PRODUCTS.find((p) => p.id === 'holder-robot-metal');
    }
    if (lower.includes('rgb') || lower.includes('lampu') || lower.includes('sunset')) {
      return PRODUCTS.find((p) => p.id === 'lampu-rgb-sunset-bar');
    }
    if (lower.includes('cooling') || lower.includes('kipas') || lower.includes('laptop')) {
      return PRODUCTS.find((p) => p.id === 'cooling-pad-laptop-6fan');
    }
    return undefined;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="flex-1 hidden md:block" onClick={onClose} />

      {/* Drawer Container */}
      <div className="w-full md:w-[480px] bg-zinc-950 border-l-2 border-yellow-500/50 h-full flex flex-col shadow-2xl relative text-zinc-100 animate-slideLeft">
        {/* Header */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-black p-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-yellow-400 text-zinc-950 flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(250,204,21,0.5)] border border-yellow-300">
                🤖
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-base text-white tracking-tight">
                  Uda GadgetKini AI
                </h3>
                <span className="bg-yellow-400 text-zinc-950 text-[10px] font-black px-1.5 py-0.2 rounded uppercase">
                  Padang Gen Z
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Konsultan Gadget Urang Awak • Online 24 Jam
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={resetChat}
              title="Mulai Ulang Percakapan"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              title="Tutup Chat"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dialect Announcement Bar */}
        <div className="bg-yellow-400/10 border-b border-yellow-400/20 px-4 py-2 flex items-center justify-between text-xs text-yellow-300 font-medium">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            Mode: Bahasa Padang / Minang Gaul Gen Z ⚡
          </span>
          <span className="text-[11px] text-zinc-400">Gemini 3.8</span>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            const matchedProduct = !isUser ? findReferencedProduct(m.text) : undefined;

            return (
              <div
                key={m.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-end gap-2 max-w-[88%]">
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-yellow-400 text-zinc-950 flex items-center justify-center font-bold text-xs shrink-0 mb-1">
                      🤖
                    </div>
                  )}

                  <div
                    className={`rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-md ${
                      isUser
                        ? 'bg-yellow-400 text-zinc-950 font-medium rounded-br-xs'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line">{m.text}</div>

                    {/* Quick action button inside bot response if a product was matched */}
                    {matchedProduct && (
                      <div className="mt-3 pt-2.5 border-t border-zinc-800 flex flex-wrap gap-1.5">
                        <button
                          onClick={() => onOpenShopee(matchedProduct)}
                          className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1 transition"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Cek {matchedProduct.brand} di Shopee</span>
                        </button>
                        <button
                          onClick={() => onOpenWa(matchedProduct)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1 transition"
                        >
                          <MessageCircle className="w-3 h-3 fill-white" />
                          <span>Tanya via WA</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-xs shrink-0 mb-1 border border-zinc-700">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-zinc-500 mt-1 px-9">
                  {m.timestamp}
                </span>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-lg bg-yellow-400 text-zinc-950 flex items-center justify-center font-bold text-xs shrink-0">
                🤖
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 text-xs text-yellow-300 flex items-center gap-2">
                <span className="animate-spin text-sm">⚡</span>
                <span className="italic font-medium">Uda sadang bapikia sabanta sanak... 💭</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 py-2 border-t border-zinc-800/80 bg-zinc-950">
          <div className="text-[11px] text-zinc-400 font-semibold mb-1.5 flex items-center gap-1">
            <span>Contoh pertanyaan ka Uda:</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {QUICK_AI_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="bg-zinc-900 hover:bg-yellow-400 hover:text-zinc-950 text-zinc-300 border border-zinc-800 text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Tanyo apo se ka Uda (misal: Anker R50i tahan bara jam?)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1 bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-yellow-400 transition"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className={`p-2.5 rounded-xl font-bold transition flex items-center justify-center ${
                input.trim() && !isLoading
                  ? 'bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-lg shadow-yellow-500/20 active:scale-95'
                  : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-2 px-1">
            <span>Didukung Gemini 3.8 AI & Dialek Minangkabau Gaul</span>
            <span>Tekan Enter untuak kirim</span>
          </div>
        </div>
      </div>
    </div>
  );
};
