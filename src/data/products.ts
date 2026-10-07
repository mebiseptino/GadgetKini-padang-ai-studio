export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Audio' | 'Power' | 'Aksesoris' | 'Estetik' | 'Komputer';
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  soldCount: string;
  badge: string;
  highlight: string;
  taglineMinang: string;
  image: string;
  shopeeMall: boolean;
  shopeeStarPlus: boolean;
  shortDescription: string;
  fullDescription: string;
  specs: { label: string; value: string }[];
  features: string[];
  shopeeUrl: string;
  shopeeAffiliateCode: string;
  whatsappMessage: string;
  padangReview: {
    reviewer: string;
    area: string;
    comment: string;
    commentMinang: string;
    rating: number;
    date: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'tws-anker-r50i',
    name: 'Anker Soundcore R50i True Wireless Earbuds',
    brand: 'Anker Soundcore',
    category: 'Audio',
    price: 299000,
    originalPrice: 499000,
    discountPercentage: 40,
    rating: 4.9,
    reviewCount: 3420,
    soldCount: '8.4rb+ terjual',
    badge: '🔥 PALING LARIS',
    highlight: 'Bass Mantap 10mm • Baterai 30 Jam • Garansi 18 Bulan',
    taglineMinang: 'Suaro bass-nyo mantap badendang, rancak danga lagu di Taplau!',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
    shopeeMall: true,
    shopeeStarPlus: true,
    shortDescription: 'Earphone TWS legendaris paling best-value dengan teknologi BassUp, tahan air IPX5, dan 22 preset equalizer Soundcore App.',
    fullDescription: 'Anker Soundcore R50i dirancang untuk pencinta audio yang menginginkan dentuman bass bertenaga tanpa kompromi. Dilengkapi driver 10mm ekstra besar, daya tahan baterai hingga 30 jam dengan casing pengisi daya (10 jam penggunaan sekali charge), serta sertifikasi IPX5 tahan keringat dan hujan rintik. Dilengkapi 2 mikrofon bertenaga AI untuk panggilan telepon jernih bebas bising knalpot jalanan.',
    specs: [
      { label: 'Driver Audio', value: '10mm Dynamic BassUp Driver' },
      { label: 'Baterai Earbuds', value: 'Hingga 10 Jam non-stop' },
      { label: 'Total Baterai Case', value: '30 Jam playtime' },
      { label: 'Konektivitas', value: 'Bluetooth 5.3 Low Latency' },
      { label: 'Ketahanan Air', value: 'IPX5 Sweat & Splash Proof' },
      { label: 'Aplikasi Kontrol', value: 'Soundcore App (22 Preset EQ)' },
      { label: 'Garansi Resmi', value: '18 Bulan Ganti Baru Anker ID' },
    ],
    features: [
      'Bass Menggelegar dengan teknologi Soundcore BassUp',
      'Gaming Mode latensi super rendah anti delay pas main ML/PUBG',
      'Dual AI Microphone untuk teleponan jernih di luar ruangan',
      'Bentuk ergonomis pas di telinga, tidak sakit dipakai seharian',
      'Fast Charging: Cas 10 menit bisa dengerin lagu 2 jam',
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=Anker%20Soundcore%20R50i',
    shopeeAffiliateCode: 'GK-ANKER-R50I',
    whatsappMessage: 'Halo GadgetKini Padang, ambo nio tanyo stok jo promo Shopee untuak TWS Anker R50i (Rp 299rb). Rancak kirim link voucher nyo yo Uda!',
    padangReview: {
      reviewer: 'Fajri Pratama',
      area: 'Ulak Karang, Padang Utara',
      comment: 'Keren banget, bass nya bulat dan gak cempreng. Garansi resmi 18 bulan bikin tenang. Pengiriman kilat!',
      commentMinang: 'Onde mande bass-nyo mantap bana! Danga lagu Minang remik di oto langsuang badendang. Pas bana di talingo!',
      rating: 5,
      date: '2 hari lalu',
    },
  },
  {
    id: 'powerbank-anker-fast',
    name: 'Anker PowerCore 10.000mAh / 20.000mAh 22.5W Fast Charge',
    brand: 'Anker',
    category: 'Power',
    price: 350000,
    originalPrice: 600000,
    discountPercentage: 42,
    rating: 4.9,
    reviewCount: 2150,
    soldCount: '5.2rb+ terjual',
    badge: '⚡ FLASH SALE',
    highlight: '22.5W Fast Charging • Flight Approved • Anti-Overheat MultiProtect',
    taglineMinang: 'Batere awet taruih, traveling ka Bukittinggi atau Mandeh lapeh se!',
    image: 'https://images.unsplash.com/photo-1609592426867-b5a88e998616?w=800&auto=format&fit=crop&q=80',
    shopeeMall: true,
    shopeeStarPlus: true,
    shortDescription: 'Powerbank kapasitas besar ultra-ringkas dengan dukungan PowerIQ 3.0, Power Delivery 22.5W, dan aman masuk kabin pesawat.',
    fullDescription: 'Jangan biarkan smartphone Anda kehabisan daya saat beraktivitas! Anker PowerCore hadir dengan sel baterai densitas tinggi dan bodi tahan banting anti-gores. Mengisi daya iPhone atau Android dari 0% ke 55% hanya dalam 30 menit. Dilengkapi sistem proteksi 11 titik keselamatan MultiProtect yang mencegah korsleting dan suhu panas.',
    specs: [
      { label: 'Kapasitas Nyata', value: '10.000mAh / 20.000mAh Real Capacity' },
      { label: 'Output Daya Maks', value: '22.5W Max Fast Charging (PD & QC)' },
      { label: 'Port Output', value: '1x USB-C (In/Out) + 1x USB-A' },
      { label: 'Kompatibilitas', value: 'iPhone 11-16, Samsung, Xiaomi, iPad' },
      { label: 'Regulasi Terbang', value: 'Aman Kabin Pesawat (UN38.3 Compliant)' },
      { label: 'Dimensi & Berat', value: 'Ultra Slim 212 gram bodi matte' },
      { label: 'Garansi Resmi', value: '18 Bulan Anker Indonesia' },
    ],
    features: [
      'Fast Charging 22.5W isi baterai iPhone 3x lebih cepat dari cas biasa',
      'Dual Device Charging: Bisa cas 2 HP sekaligus bersamaan',
      'Trickle-Charging Mode untuk isi aman TWS dan Smartwatch',
      'Indikator LED 4 titik persentase daya yang presisi',
      'Bodi textured matte anti licin dan anti bekas sidik jari',
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=Anker%20Powerbank%20Fast%20Charging',
    shopeeAffiliateCode: 'GK-ANKER-PB22',
    whatsappMessage: 'Halo GadgetKini Padang, ambo nio konsultasi Powerbank Anker 22.5W (Rp 350rb). Apakah aman buek iPhone jo Android ambo?',
    padangReview: {
      reviewer: 'Rizka Handayani',
      area: 'Limau Manis (Kampus UNAND)',
      comment: 'Wajib banget buat anak kuliahan. Pas mati lampu di kosan atau kuliah seharian aman banget.',
      commentMinang: 'Slamatkan hiduik pas kosan di Limau Manis mati lampu! 2 hari indak ngecas ka colokan aman se.',
      rating: 5,
      date: 'Kemarin',
    },
  },
  {
    id: 'holder-robot-metal',
    name: 'Robot RT-CH06 / RT-US04 Metal Smartphone Holder 360°',
    brand: 'Robot Original',
    category: 'Aksesoris',
    price: 89000,
    originalPrice: 150000,
    discountPercentage: 41,
    rating: 4.8,
    reviewCount: 4890,
    soldCount: '12rb+ terjual',
    badge: '🦾 WAJIB PUNYO',
    highlight: 'Full Aluminium Alloy • Putar 360° • Anti Goyang di Jalan Balubang',
    taglineMinang: 'Kokoh bana indak bagoyang di jalanan Padang, ojol jo drakor lancar!',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80',
    shopeeMall: false,
    shopeeStarPlus: true,
    shortDescription: 'Stand / holder smartphone kokoh berbahan paduan aluminium solid anti patah dengan rotasi 360 derajat dan bantalan silikon.',
    fullDescription: 'Didesain khusus untuk kestabilan maksimal! Menggunakan rangka logam aluminium murni dengan sendi pengunci ganda. Mau ditaruh di meja belajar, meja kerja, ataupun dashboard motor/mobil, HP Anda terkunci mantap tanpa goyang. Dilengkapi rongga khusus kabel charger agar bisa cas sambil nonton atau live streaming.',
    specs: [
      { label: 'Bahan Material', value: 'Aerospace Aluminium Alloy + Anti-slip Silicone' },
      { label: 'Sudut Rotasi', value: '360° Horizontal & 180° Vertical Tilt' },
      { label: 'Ukuran Kompatibel', value: 'HP 4.0 - 7.2 inch & Tablet s/d 11 inch' },
      { label: 'Beban Maksimal', value: 'Hingga 1.2 kg tanpa kendur' },
      { label: 'Sistem Kunci', value: 'Dual Hex Screws with damping silicone' },
      { label: 'Slot Pengisian', value: 'Dedicated Cable Cutout Port' },
      { label: 'Garansi', value: '1 Tahun Tukar Baru Robot Official' },
    ],
    features: [
      'Bodi full metal padat tidak reyot seperti holder plastik murahan',
      'Bantalan silikon tebal melindungi bodi HP dari baret/lecet',
      'Bisa dilipat pipih masuk saku celana atau tas selempang',
      'Ketinggian dan sudut kemiringan bisa diatur ergonomis',
      'Pilihan terbaik driver ojol & pecinta maraton serial film',
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=Robot%20Holder%20Metal%20RT-CH06',
    shopeeAffiliateCode: 'GK-ROBOT-HLD89',
    whatsappMessage: 'Halo GadgetKini Padang, ambo nio order Holder Robot Metal Rp 89rb. Ado pilihan warna apo se Da?',
    padangReview: {
      reviewer: 'Doni Saputra',
      area: 'Khatib Sulaiman, Padang',
      comment: 'Bagus pol metalnya kokoh. Dipasang buat motor matic lewat polisi tidur tetap anteng.',
      commentMinang: 'Alumuniumnyo taba bana sanak! Lewat jalan ba-ombak di Khatib indak goyang saketek juo. Mantap!',
      rating: 5,
      date: '3 hari lalu',
    },
  },
  {
    id: 'lampu-rgb-sunset-bar',
    name: 'Smart RGB Sunset & Ambient Light Bar 16 Juta Warna',
    brand: 'AuraSync Smart',
    category: 'Estetik',
    price: 75000,
    originalPrice: 139000,
    discountPercentage: 46,
    rating: 4.8,
    reviewCount: 1670,
    soldCount: '3.9rb+ terjual',
    badge: '🌈 VIRAL TIKTOK',
    highlight: '16 Juta Warna • Audio Music Sync • Remote & Smart App Control',
    taglineMinang: 'Kamar kosan langsuang estetik sarupo senja di Pantai Padang!',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop&q=80',
    shopeeMall: false,
    shopeeStarPlus: true,
    shortDescription: 'Lampu ambient pintar RGB yang mengubah suasana kamar atau meja kerja menjadi studio aesthetic dengan ritme lampu berdetak sesuai musik.',
    fullDescription: 'Ciptakan atmosfer estetik yang sinematik di kamar tidur atau setup meja Anda! Memiliki 16 juta warna gradasi halus dan fitur mikrofon pintar beresolusi tinggi yang membuat efek lampu menari mengikuti dentuman bass musik atau game. Dapat dikontrol menggunakan remote nirkabel ataupun aplikasi smartphone via Bluetooth.',
    specs: [
      { label: 'Rentang Warna', value: '16 Juta RGB Spectrum + Warm Sunset' },
      { label: 'Fitur Utama', value: 'Music Sync Micro-pickup 32 Bit' },
      { label: 'Mode Cahaya', value: '18 Mode Dinamis + 8 Mode Ritme Musik' },
      { label: 'Metode Kontrol', value: 'IR Remote Control & Bluetooth Mobile App' },
      { label: 'Sumber Daya', value: 'USB 5V (Bisa colok Powerbank / Charger / PC)' },
      { label: 'Panjang / Bentuk', value: 'Vertical Desk Standing Bar + Sunset Lens' },
      { label: 'Material', value: 'ABS High Grade + Acrylic Diffuser Anti-Silau' },
    ],
    features: [
      'Mikrofon internal sensitif menangkap beat musik secara real-time',
      'Pengaturan kecerahan (brightness) dari 1% hingga 100%',
      'Timer otomatis untuk lampu tidur rileks',
      'Cocok untuk background foto Instagram, live TikTok, & gaming room',
      'Konsumsi listrik super hemat hanya 5 Watt',
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=Lampu%20RGB%20Sunset%20Ambient%20Bar',
    shopeeAffiliateCode: 'GK-RGB-AURA75',
    whatsappMessage: 'Halo GadgetKini Padang, ambo nio Lampu RGB Sunset Rp 75rb. Bisa dikirim link toko Shopee nan dapek gratis ongkir?',
    padangReview: {
      reviewer: 'Siti Rahmawati',
      area: 'Air Tawar Barat (Dekat UNP)',
      comment: 'Cahaya lampunya soft banget, warm sunset bikin kamar kos jadi warm aesthetic kayak di cafe.',
      commentMinang: 'Kamek bana kamarku kini sanak! Sarupo sadang mandeh senja di Taplau tiap malam. Rancak!',
      rating: 5,
      date: '4 hari lalu',
    },
  },
  {
    id: 'cooling-pad-laptop-6fan',
    name: 'Cooling Pad Laptop 6 Fan Turbo Silent LED Gaming',
    brand: 'FrostCore Pro',
    category: 'Komputer',
    price: 120000,
    originalPrice: 220000,
    discountPercentage: 45,
    rating: 4.9,
    reviewCount: 2980,
    soldCount: '7.1rb+ terjual',
    badge: '❄️ ANTI OVERHEAT',
    highlight: '6 Kipas Turbo 2400 RPM • Senyap Tanpa Bising • 5 Sudut Ergonomis',
    taglineMinang: 'Laptop dingin taruih biarpun cuaca Padang sadang angek garang!',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
    shopeeMall: false,
    shopeeStarPlus: true,
    shortDescription: 'Alas pendingin laptop bertenaga 6 kipas turbo dengan jaring metal konduktif, lampu LED gaming, dan penyangga leher ergonomis.',
    fullDescription: 'Lindungi prosesor dan GPU laptop Anda dari panas berlebih saat rendering, skripsian, atau push rank game berat. Dengan 6 buah kipas kecepatan tinggi (2400 RPM) yang berputar sangat senyap di bawah 21 dB. Dilengkapi plat aluminium honeycomb yang menyerap dan membuang panas laptop dengan seketika, serta 2 port USB tambahan.',
    specs: [
      { label: 'Jumlah Kipas', value: '6 Kipas Turbo High-Velocity Silent' },
      { label: 'Kecepatan Kipas', value: '2400 ± 10% RPM dengan knob speed' },
      { label: 'Tingkat Kebisingan', value: '< 21 dBA (Sangat Hening / Silent)' },
      { label: 'Kompatibilitas', value: 'Laptop 11 inch hingga 17.3 inch' },
      { label: 'Pengaturan Sudut', value: '5 Level Adjustable Ergonomic Stand' },
      { label: 'Port Tambahan', value: 'Dual USB 2.0 Passthrough Port' },
      { label: 'Material', value: 'Aluminium Mesh + Heavy Duty ABS' },
    ],
    features: [
      'Suhu laptop langsung turun 10°C - 18°C dalam 5 menit pemakaian',
      'Desain ergonomis mencegah sakit leher dan punggung saat ngetik lama',
      'Ada stopper anti-slip di bagian bawah agar laptop tidak merosot',
      'Dual USB port: Colokan USB laptop Anda tidak berkurang',
      'Lampu LED ice-blue cool gaming vibes',
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=Cooling%20Pad%20Laptop%206%20Fan%20Silent',
    shopeeAffiliateCode: 'GK-COOL-6FAN120',
    whatsappMessage: 'Halo GadgetKini Padang, ambo nio takok Cooling Pad Laptop 6 Fan Rp 120rb. Muat untuak laptop 15.6 inch kan Uda?',
    padangReview: {
      reviewer: 'Alif Kurniawan',
      area: 'Lubuk Begalung, Padang',
      comment: 'Laptop gaming saya biasanya 85 derajat langsung adem ke 68 derajat pas render blender. Mantap!',
      commentMinang: 'Laptop ambo nan biasonyo marabo angek pas main game, kini dingin sarupo aia batang aie! Rekomen!',
      rating: 5,
      date: '5 hari lalu',
    },
  },
];

export const VOUCHER_CODES = [
  { code: 'GRATISONGKIR', discount: 'Gratis Ongkir Xtra', minSpend: 'Min. Belanja 0', expires: 'Aktif Hari Ini' },
];

export const QUICK_AI_QUESTIONS = [
  '🎧 Rekomendasi TWS Anker R50i rancak buek apo?',
  '🔋 Powerbank Anker bisa baok ka pasawaik?',
  '🦾 Holder Robot tahan di jalan balubang Padang?',
  '🌈 Lampu RGB estetik cocok buek kamar kos?',
  '❄️ Cooling Pad bisa buek laptop 15 inch indak angek?',
  '🛒 Bagian tips voucher Shopee paliang murah da!',
];
