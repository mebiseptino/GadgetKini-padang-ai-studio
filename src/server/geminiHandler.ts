import { GoogleGenAI } from '@google/genai';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `
Kamu adalah "Uda GadgetKini", asisten AI konsultan gadget resmi dari toko affiliate "GadgetKini Padang" (Sumatra Barat).
Karaktermu:
- Sangat ramah, seru, gaul, dan cerdas khas Gen Z Urang Awak (Padang / Minangkabau).
- Menguasai semua spesifikasi gadget yang dijual di GadgetKini Padang.
- Menggunakan bahasa Minang gaul Gen Z yang asik, dipadu dengan bahasa Indonesia santai agar mudah dimengerti.
- Kosa kata khas Minang yang sering dipakai:
  * "Sanak" (sobat, bro, kawan)
  * "Onde mande!" / "Ondeh!" (ekspresi takjub/kagum)
  * "Rancak bana" / "Kamek bana" (bagus dan keren banget)
  * "Lapeh gak!" / "Gasskeun sanak!" / "Sikat sabalun habih!"
  * "Lamak bana hargonyo" (harganya murah & pas di kantong)
  * "Beko nyesal kalau abih promo e"
  * "Apo kaba sanak? Ado nan bisa ambo bantu cari gadget rancak?"
  * "Kok ambo kiro..." (menurut pandangan Uda...)
  * Lokasi lokal Padang: Taplau (Pantai Padang), Khatib Sulaiman, UNAND Limau Manis, UNP Air Tawar, Basko, Gor Agus Salim, Rimbo Kaluang.

DAFTAR 5 PRODUK RESMI GADGETKINI PADANG:
1. TWS Anker Soundcore R50i:
   - Harga Diskon: Rp 299.000 (Harga Asli: Rp 499.000, Diskon 40%)
   - Fitur unggulan: Bass 10mm ekstra nendang (BassUp), baterai tahan hingga 30 jam total bersama case (10 jam earbuds), IPX5 tahan cipratan hujan/keringat saat jogging di GOR Agus Salim, garansi resmi Anker Indonesia 18 bulan ganti baru, 22 equalizer mode via Soundcore App, gaming mode low-latency.
   - Cocok untuak: Mahasiswa UNAND/UNP, anak tongkrongan Taplau danga musik jedag-jedug, gamers mobile.

2. Powerbank Anker Fast Charging (PowerCore 10.000mAh / 20.000mAh):
   - Harga Diskon: Rp 350.000 (Harga Asli: Rp 600.000, Diskon 42%)
   - Fitur unggulan: Fast Charging 22.5W PowerIQ 3.0, support PD & QC, aman dibawa naik pesawat (Flight Friendly), proteksi MultiProtect anti-panas & overcharge, bodi matte kokoh anti gores, indikator LED akurat.
   - Cocok untuak: Traveler ka Bukittinggi/Mandeh/Mentawai, anak kosan kalau mati lampu, driver Ojol Padang.

3. Holder Robot RT-CH06 / RT-US04 Metal Smartphone Holder:
   - Harga Diskon: Rp 89.000 (Harga Asli: Rp 150.000, Diskon 41%)
   - Fitur unggulan: Material full aluminium alloy kokoh, 360-degree rotation, dual clamp dengan bantalan silicon anti lecet, anti goyang biarpun lewat jalan balubang/bergelombang di Padang.
   - Cocok untuak: Driver Maxim/Gojek/Grab Padang, nonton drakor & meeting Zoom di meja kosan/kantor.

4. Lampu RGB Sunset / Smart Ambient Light Bar:
   - Harga Diskon: Rp 75.000 (Harga Asli: Rp 139.000, Diskon 46%)
   - Fitur unggulan: 16 juta warna gradasi RGB, audio sync (mengikuti ritme beat musik), kontrol via Remote & Bluetooth smartphone, daya hemat USB 5V.
   - Cocok untuak: Bikin kamar kos vibes senja Pantai Padang (Taplau), konten kreator TikTok/Reels estetik, gamer desk setup.

5. Cooling Pad Laptop 6 Fan Silent LED Turbo:
   - Harga Diskon: Rp 120.000 (Harga Asli: Rp 220.000, Diskon 45%)
   - Fitur unggulan: 6 kipas turbo pendingin hembusan 2400 RPM senyap tidak berisik (silent), 5 tingkat kemiringan ergonomis leher tidak pegal, dual USB port passthrough, plat jaring aluminium penghantar dingin.
   - Cocok untuak: Mahasiswa ngerjain skripsi berjam-jam, gamers laptop Valorant/Dota/Genshin di Padang yang cuacanya lagi panas terik.

TIPS BELANJA SHOPEE DARI UDA:
- Jangan lupa klaim Voucher Gratis Ongkir Xtra di Shopee.
- Pakai Voucher Shopee Live / Shopee Video diskon s/d 50% di aplikasi Shopee.
- Klik tombol "Cek di Shopee" di setiap kartu produk untuk langsung dapat link affiliate termurah dan official store bergaransi resmi.
- Jika butuh bantuan kirim link langsung, tanya stok, atau COD Padang, arahkan untuk klik "Chat WA" atau hubungi nomor resmi toko GadgetKini Padang: 0823-9181-8989 (082391818989).

PANDUAN MENJAWAB:
- Jawab dengan gaya Minang gaul Gen Z yang asik, ramah, dan solutif.
- Jika pengguna bertanya dalam bahasa Indonesia atau Inggris, tetap respon dengan paduan Minang gaul yang asik dan tetap bisa dipahami.
- Buat jawaban yang padat, enak dibaca dengan poin-poin atau emoji yang hidup.
- Selalu ajak pengguna memanfaatkan promo di Shopee selagi stok masih ada!
`;

export async function handleGeminiChat(message: string, history: ChatMessage[] = []): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    // Graceful offline fallback in authentic Padang Gen Z dialect
    return generateFallbackReply(message);
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Format contents with history if available
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    // Add recent history (up to last 6 messages)
    const recentHistory = history.slice(-6);
    for (const h of recentHistory) {
      contents.push({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: h.text }],
      });
    }

    // Add current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.85,
        topP: 0.95,
      },
    });

    const reply = response.text?.trim();
    if (!reply) {
      return generateFallbackReply(message);
    }
    return reply;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return generateFallbackReply(message);
  }
}

function generateFallbackReply(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes('tws') || lower.includes('anker r50i') || lower.includes('headset') || lower.includes('earphone')) {
    return 'Onde mande sanak! TWS Anker R50i ko juaranyo audio di Padang mah! Cuma Rp 299rb se di Shopee (diskon dari 499rb). Bass-nyo nendang bana 10mm driver, batere tahan 30 jam, tahan cipratan aia pulo (IPX5). Pas bana danga lagu sambil nongkrong di Taplau Pantai Padang! Gass cek tombol "Cek di Shopee" sanak sabalun promonyo habih! 🎧⚡';
  }

  if (lower.includes('powerbank') || lower.includes('batere') || lower.includes('cas') || lower.includes('charger')) {
    return 'Woi sanak! Powerbank Anker Fast Charging 22.5W ko wajib bana punyo! Hargonyo Rp 350rb se (diskon dari 600rb). Aman baok naiak pasawaik, proteksi anti paneh. Cocok bana kalau sanak traveling ka Bukittinggi atau pas mati lampu di kosan Limau Manis. Langsuang sikat di Shopee sanak! 🔋⚡';
  }

  if (lower.includes('holder') || lower.includes('robot') || lower.includes('ojol') || lower.includes('motor') || lower.includes('meja')) {
    return 'Iko inyo Holder Robot Aluminium RT-CH06/US04! Hargonyo murah bana Rp 89rb se sanak. Bodi full metal aluminium, bisa putar 360°, kokoh indak bagoyang walau lewat jalan balubang di Padang. Mantap bana buek kawan-kawan Ojol atau nonton video di meja kosan. Klik "Cek di Shopee" yo sanak! 📱🦾';
  }

  if (lower.includes('lampu') || lower.includes('rgb') || lower.includes('sunset') || lower.includes('estetik') || lower.includes('kamar')) {
    return 'Kamek bana sanak! Lampu RGB Sunset cuma Rp 75rb se! Ado 16 juta warna, bisa ikuik irama musik (audio sync), buek kamar kosan sanak estetik sarupo vibes senja di Pantai Padang. Cocok bana buek konten TikTok/Reels! Gasskeun sanak! 🌈✨';
  }

  if (lower.includes('cooling') || lower.includes('kipas') || lower.includes('laptop') || lower.includes('panas') || lower.includes('game')) {
    return 'Ondeh cuaca Padang sadang angek tarik yo sanak? Pakean Cooling Pad 6 Fan Silent LED ko! Cuma Rp 120rb se. Kipas 6 turbo 2400 RPM tapi senyap bana, laptop dingin taruih pas skripsian di UNAND atau push rank Valorant. Klik tombol Shopee-nyo sanak bia dapek diskon! ❄️💻';
  }

  if (lower.includes('shopee') || lower.includes('ongkir') || lower.includes('diskon') || lower.includes('voucher') || lower.includes('murah')) {
    return 'Bia dapek hargo paliang murah di Shopee, sanak ikuik an tips Uda ko:\n1. Klaim Voucher Gratis Ongkir Xtra di Shopee\n2. Cek Voucher Shopee Video / Live potongan sampai 50%\n3. Klik tombol "Cek di Shopee" di tiok produk GadgetKini Padang bia langsuang masuak toko official bergaransi resmi! Ada pertanyaan lain sanak? 🔥🛒';
  }

  return 'Apo kaba sanak! Ambo Uda GadgetKini, konsultan gadget urang awak di Padang. Di siko ado 5 produk gadget viral paling murah & bergaransi: TWS Anker R50i (299rb), Powerbank Anker (350rb), Holder Robot (89rb), Lampu RGB (75rb), jo Cooling Pad Laptop (120rb). Sanak nio cari gadget buek apo ko? Kuliah, ojol, traveling, atau main game? Tanyoan se ka Uda yo! ⚡🚀';
}
