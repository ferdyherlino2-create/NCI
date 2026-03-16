// ===== DATA =====
const data = {
  provinces: {
    'Kalimantan Selatan': {
      cities: ['Banjarmasin', 'Banjarbaru', 'Martapura', 'Pelaihari', 'Rantau', 'Kandangan', 'Kotabaru', 'Batulicin'],
      insights: {
        'Banjarmasin': {
          score: 88, growth: '+14%', outlets: '3.8K', revenue: 'Rp 2.4T',
          topCulinary: [
            { name: 'Soto Banjar', category: 'Kuliner Ikonik Kalsel', score: 98, bars: 98 },
            { name: 'Nasi Kuning Banjar', category: 'Sarapan Tradisional', score: 95, bars: 95 },
            { name: 'Ketupat Kandangan', category: 'Kuliner Khas', score: 91, bars: 91 },
            { name: 'Patin Baubar / Bakar', category: 'Olahan Ikan Sungai', score: 88, bars: 88 },
            { name: 'Iwak Pakasam', category: 'Fermentasi Tradisional', score: 84, bars: 84 },
            { name: 'Apam Barabai', category: 'Kue Tradisional', score: 80, bars: 80 },
            { name: 'Kue Bingka', category: 'Kue Tradisional', score: 77, bars: 77 },
            { name: 'Mandai Cempedak', category: 'Fermentasi Lokal', score: 73, bars: 73 },
          ],
          trendingCategories: [
            { name: 'Resto Tepi Sungai Martapura', detail: 'Wisata kuliner sungai naik daun', score: '+380%', bars: 95 },
            { name: 'Kopi Banjar Kekinian', detail: 'Kedai kopi lokal tumbuh pesat', score: '+290%', bars: 85 },
            { name: 'Street Food Pasar Terapung', detail: 'Potensi wisata gastronomi', score: '+240%', bars: 78 },
            { name: 'Frozen & Kemasan Oleh-oleh', detail: 'Produk UMKM go digital', score: '+190%', bars: 65 },
            { name: 'Kuliner Halal Premium', detail: 'Segmen menengah atas meningkat', score: '+160%', bars: 55 },
          ]
        },
        'Banjarbaru': {
          score: 74, growth: '+11%', outlets: '1.9K', revenue: 'Rp 1.1T',
          topCulinary: [
            { name: 'Soto Banjar', category: 'Kuliner Ikonik', score: 94, bars: 94 },
            { name: 'Nasi Itik Gambut', category: 'Kuliner Khas', score: 89, bars: 89 },
            { name: 'Ketupat Kandangan', category: 'Kuliner Tradisional', score: 84, bars: 84 },
            { name: 'Burger & Western Fusion', category: 'Modern F&B', score: 78, bars: 78 },
            { name: 'Kopi Susu Kekinian', category: 'Minuman', score: 74, bars: 74 },
          ],
          trendingCategories: [
            { name: 'Cafe & Study Space', detail: 'Segmen mahasiswa & ASN', score: '+310%', bars: 90 },
            { name: 'Kuliner Halal Modern', detail: 'Tumbuh seiring ekspansi kota', score: '+220%', bars: 72 },
            { name: 'Food Court Premium', detail: 'Tren pusat kuliner terpadu', score: '+170%', bars: 58 },
            { name: 'Delivery App F&B', detail: 'Penetrasi GoFood & Grab meningkat', score: '+140%', bars: 48 },
          ]
        },
        'Martapura': {
          score: 68, growth: '+9%', outlets: '1.1K', revenue: 'Rp 620M',
          topCulinary: [
            { name: 'Ketupat Kandangan', category: 'Kuliner Ikonik', score: 97, bars: 97 },
            { name: 'Soto Banjar', category: 'Kuliner Tradisional', score: 91, bars: 91 },
            { name: 'Kue Putu Mayang', category: 'Kue Tradisional', score: 82, bars: 82 },
            { name: 'Es Puding Martapura', category: 'Minuman & Dessert', score: 76, bars: 76 },
            { name: 'Ayam Goreng Bumbu Banjar', category: 'Lauk Tradisional', score: 71, bars: 71 },
          ],
          trendingCategories: [
            { name: 'Wisata Religi + Kuliner', detail: 'Sinergi Masjid Agung & kuliner', score: '+260%', bars: 85 },
            { name: 'Oleh-oleh Intan & Kuliner', detail: 'Paket wisata belanja + makan', score: '+190%', bars: 65 },
            { name: 'UMKM Kue Tradisional', detail: 'Digitalisasi produk lokal', score: '+140%', bars: 50 },
            { name: 'Kuliner Ramadan Khas', detail: 'Pasar takjil seasonal', score: '+120%', bars: 42 },
          ]
        }
      }
    },
    'Kalimantan Timur': {
      cities: ['Samarinda', 'Balikpapan', 'Bontang', 'Tenggarong', 'Sangatta', 'Penajam'],
      insights: {
        'Balikpapan': {
          score: 91, growth: '+16%', outlets: '4.6K', revenue: 'Rp 3.8T',
          topCulinary: [
            { name: 'Kepiting Soka', category: 'Seafood Premium', score: 97, bars: 97 },
            { name: 'Ikan Bakar Teluk Balikpapan', category: 'Seafood Khas', score: 93, bars: 93 },
            { name: 'Nasi Kuning Balikpapan', category: 'Sarapan Tradisional', score: 89, bars: 89 },
            { name: 'Sate Payau (Rusa)', category: 'Kuliner Khas Kaltim', score: 84, bars: 84 },
            { name: 'Amplang Ikan', category: 'Snack Khas', score: 80, bars: 80 },
          ],
          trendingCategories: [
            { name: 'Premium Seafood Resto', detail: 'Booming pasca IKN announcement', score: '+450%', bars: 98 },
            { name: 'Cafe Modern Migas', detail: 'Segmen pekerja minyak & gas', score: '+310%', bars: 85 },
            { name: 'Food Delivery Enterprise', detail: 'Catering korporat meningkat', score: '+260%', bars: 75 },
            { name: 'Kuliner Fusion Dayak', detail: 'Identitas kuliner lokal naik', score: '+190%', bars: 60 },
          ]
        },
        'Samarinda': {
          score: 82, growth: '+12%', outlets: '3.2K', revenue: 'Rp 2.2T',
          topCulinary: [
            { name: 'Nasi Bekepor', category: 'Kuliner Khas Kutai', score: 95, bars: 95 },
            { name: 'Gence Ruan', category: 'Olahan Ikan Sungai', score: 90, bars: 90 },
            { name: 'Amplang Samarinda', category: 'Snack Oleh-oleh', score: 86, bars: 86 },
            { name: 'Bubur Pedas', category: 'Sarapan Khas', score: 81, bars: 81 },
            { name: 'Ayam Cincane', category: 'Kuliner Tradisional', score: 77, bars: 77 },
          ],
          trendingCategories: [
            { name: 'Resto Tepi Sungai Mahakam', detail: 'Wisata kuliner sungai terbesar', score: '+320%', bars: 90 },
            { name: 'IKN Effect F&B', detail: 'Lonjakan permintaan pasca IKN', score: '+280%', bars: 82 },
            { name: 'Kopi Lokal Kaltim', detail: 'Brand kopi daerah bermunculan', score: '+210%', bars: 70 },
            { name: 'Frozen Food Ikan Sungai', detail: 'Produk olahan ikan Mahakam', score: '+160%', bars: 55 },
          ]
        }
      }
    },
    'Kalimantan Barat': {
      cities: ['Pontianak', 'Singkawang', 'Sambas', 'Ketapang', 'Sanggau', 'Sintang'],
      insights: {
        'Pontianak': {
          score: 83, growth: '+13%', outlets: '3.4K', revenue: 'Rp 2.0T',
          topCulinary: [
            { name: 'Chai Kwe Pontianak', category: 'Kuliner Tionghoa Khas', score: 96, bars: 96 },
            { name: 'Mie Tiaw Sapi', category: 'Kuliner Khas Kalbar', score: 92, bars: 92 },
            { name: 'Bubur Pedas Sambas', category: 'Kuliner Tradisional', score: 87, bars: 87 },
            { name: 'Sotong Pangkong', category: 'Street Food Khas', score: 83, bars: 83 },
            { name: 'Pengkang', category: 'Kue Khas', score: 78, bars: 78 },
          ],
          trendingCategories: [
            { name: 'Wisata Kuliner Ekuator', detail: 'Branding kota khatulistiwa', score: '+290%', bars: 88 },
            { name: 'Kopi Tiam Modern', detail: 'Budaya kopi Tionghoa-Melayu', score: '+240%', bars: 78 },
            { name: 'Kuliner Festival Cap Go Meh', detail: 'Seasonal event kuliner besar', score: '+200%', bars: 68 },
            { name: 'Durian Monthong Lokal', detail: 'Agrowisata kuliner durian', score: '+170%', bars: 58 },
          ]
        },
        'Singkawang': {
          score: 76, growth: '+10%', outlets: '1.6K', revenue: 'Rp 880M',
          topCulinary: [
            { name: 'Dim Sum Singkawang', category: 'Kuliner Tionghoa', score: 97, bars: 97 },
            { name: 'Mie Singkawang', category: 'Kuliner Khas', score: 93, bars: 93 },
            { name: 'Kue Bulan', category: 'Kue Tradisional', score: 87, bars: 87 },
            { name: 'Bakcang', category: 'Kuliner Festival', score: 82, bars: 82 },
            { name: 'Es Krim Potong Khas', category: 'Dessert Lokal', score: 76, bars: 76 },
          ],
          trendingCategories: [
            { name: 'Wisata Kuliner Cap Go Meh', detail: 'Event kuliner terbesar Kalbar', score: '+420%', bars: 95 },
            { name: 'Restoran Heritage Tionghoa', detail: 'Autentisitas budaya kuliner', score: '+280%', bars: 80 },
            { name: 'Street Food Malam', detail: 'Pasar malam kuliner ramai', score: '+190%', bars: 62 },
            { name: 'Oleh-oleh Kue Premium', detail: 'Kemasan modern, rasa autentik', score: '+150%', bars: 50 },
          ]
        }
      }
    },
    'Kalimantan Tengah': {
      cities: ['Palangkaraya', 'Sampit', 'Pangkalan Bun', 'Kuala Kapuas', 'Muara Teweh', 'Kasongan'],
      insights: {
        'Palangkaraya': {
          score: 71, growth: '+10%', outlets: '1.8K', revenue: 'Rp 980M',
          topCulinary: [
            { name: 'Juhu Umbut Rotan', category: 'Kuliner Dayak Khas', score: 95, bars: 95 },
            { name: 'Kalumpe / Sayur Katuk', category: 'Sayuran Tradisional', score: 88, bars: 88 },
            { name: 'Ikan Bakar Sungai Kahayan', category: 'Olahan Ikan Sungai', score: 84, bars: 84 },
            { name: 'Nasi Kuning Kalimantan', category: 'Sarapan Tradisional', score: 79, bars: 79 },
            { name: 'Wadi (Ikan Fermentasi)', category: 'Fermentasi Tradisional', score: 74, bars: 74 },
          ],
          trendingCategories: [
            { name: 'Kuliner Dayak Heritage', detail: 'Identitas budaya kuliner Kalteng', score: '+310%', bars: 90 },
            { name: 'Cafe Tepi Sungai Kahayan', detail: 'Wisata kuliner sungai', score: '+240%', bars: 76 },
            { name: 'Agroturisme Kuliner', detail: 'Sagu & rotan jadi produk unggulan', score: '+180%', bars: 60 },
            { name: 'UMKM Digital Kalteng', detail: 'Onboarding marketplace lokal', score: '+140%', bars: 48 },
          ]
        },
        'Sampit': {
          score: 64, growth: '+9%', outlets: '1.2K', revenue: 'Rp 640M',
          topCulinary: [
            { name: 'Ikan Jelawat Bakar', category: 'Olahan Ikan Sungai', score: 94, bars: 94 },
            { name: 'Nasi Kuning Sampit', category: 'Sarapan Tradisional', score: 88, bars: 88 },
            { name: 'Soto Banjar Khas Sampit', category: 'Kuliner Tradisional', score: 83, bars: 83 },
            { name: 'Kerupuk Ikan Sungai', category: 'Camilan Khas', score: 77, bars: 77 },
            { name: 'Lontong Orari', category: 'Kuliner Lokal', score: 71, bars: 71 },
          ],
          trendingCategories: [
            { name: 'Kuliner Tepi Sungai Mentaya', detail: 'Resto & warung tepi sungai', score: '+260%', bars: 82 },
            { name: 'Olahan Sawit & Kuliner', detail: 'Kota perkebunan kelapa sawit', score: '+190%', bars: 65 },
            { name: 'Warung Makan Khas Dayak', detail: 'Autentisitas kuliner lokal', score: '+150%', bars: 52 },
            { name: 'Frozen Food Ikan Sungai', detail: 'Produk kemasan UMKM lokal', score: '+120%', bars: 42 },
          ]
        },
        'Pangkalan Bun': {
          score: 60, growth: '+8%', outlets: '980', revenue: 'Rp 510M',
          topCulinary: [
            { name: 'Ikan Patin Bakar', category: 'Olahan Ikan Sungai', score: 92, bars: 92 },
            { name: 'Nasi Kuning Dayak', category: 'Sarapan Tradisional', score: 85, bars: 85 },
            { name: 'Kerupuk Basah', category: 'Camilan Khas', score: 80, bars: 80 },
            { name: 'Sate Ikan Sungai', category: 'Street Food Khas', score: 74, bars: 74 },
            { name: 'Kue Bingka Kalteng', category: 'Kue Tradisional', score: 68, bars: 68 },
          ],
          trendingCategories: [
            { name: 'Wisata Orangutan + Kuliner', detail: 'Tanjung Puting kuliner lokal', score: '+290%', bars: 88 },
            { name: 'Cafe & Penginapan Ekowisata', detail: 'Segmen turis mancanegara', score: '+220%', bars: 72 },
            { name: 'Kuliner Sungai Arut', detail: 'Wisata kuliner tepi sungai', score: '+160%', bars: 55 },
            { name: 'Oleh-oleh Khas Kotawaringin', detail: 'Produk lokal dikemas modern', score: '+130%', bars: 44 },
          ]
        },
        'Kuala Kapuas': {
          score: 57, growth: '+7%', outlets: '760', revenue: 'Rp 390M',
          topCulinary: [
            { name: 'Ikan Baung Bakar', category: 'Olahan Ikan Sungai', score: 93, bars: 93 },
            { name: 'Nasi Jagung Dayak', category: 'Kuliner Tradisional', score: 84, bars: 84 },
            { name: 'Wadi Ikan Kapuas', category: 'Fermentasi Tradisional', score: 78, bars: 78 },
            { name: 'Sayur Umbut Kelapa', category: 'Sayuran Khas', score: 71, bars: 71 },
            { name: 'Kerupuk Amplang Kapuas', category: 'Camilan Khas', score: 65, bars: 65 },
          ],
          trendingCategories: [
            { name: 'Wisata Sungai Kapuas', detail: 'Kuliner tepi sungai terpanjang', score: '+240%', bars: 78 },
            { name: 'Kuliner Tradisional Dayak Ngaju', detail: 'Identitas budaya lokal', score: '+180%', bars: 60 },
            { name: 'Pasar Terapung Kapuas', detail: 'Potensi wisata gastronomi', score: '+140%', bars: 48 },
            { name: 'UMKM Olahan Ikan', detail: 'Produk kemasan ikan sungai', score: '+110%', bars: 38 },
          ]
        },
        'Muara Teweh': {
          score: 54, growth: '+7%', outlets: '620', revenue: 'Rp 310M',
          topCulinary: [
            { name: 'Ikan Lais Bakar', category: 'Olahan Ikan Sungai', score: 91, bars: 91 },
            { name: 'Nasi Kuning Barito', category: 'Sarapan Tradisional', score: 83, bars: 83 },
            { name: 'Juhu Singkah', category: 'Kuliner Dayak Khas', score: 76, bars: 76 },
            { name: 'Soto Khas Barito Utara', category: 'Kuliner Lokal', score: 69, bars: 69 },
            { name: 'Kue Cucur Dayak', category: 'Kue Tradisional', score: 62, bars: 62 },
          ],
          trendingCategories: [
            { name: 'Kuliner Sungai Barito', detail: 'Wisata alam + kuliner lokal', score: '+210%', bars: 70 },
            { name: 'Warung Dayak Tradisional', detail: 'Autentisitas kuliner pedalaman', score: '+160%', bars: 54 },
            { name: 'Cafe & Resto Modern Barito', detail: 'Tumbuh seiring pertambangan', score: '+130%', bars: 44 },
            { name: 'Olahan Rotan & Sagu', detail: 'Diversifikasi produk lokal', score: '+100%', bars: 35 },
          ]
        },
        'Kasongan': {
          score: 50, growth: '+6%', outlets: '480', revenue: 'Rp 240M',
          topCulinary: [
            { name: 'Ikan Sepat Bakar', category: 'Olahan Ikan Sungai', score: 90, bars: 90 },
            { name: 'Nasi Kuning Katingan', category: 'Sarapan Tradisional', score: 81, bars: 81 },
            { name: 'Sayur Pakis Hutan', category: 'Sayuran Khas Hutan', score: 74, bars: 74 },
            { name: 'Ikan Asin Sungai Katingan', category: 'Olahan Tradisional', score: 67, bars: 67 },
            { name: 'Kue Gagatas', category: 'Kue Tradisional', score: 60, bars: 60 },
          ],
          trendingCategories: [
            { name: 'Ekowisata Kuliner Katingan', detail: 'Hutan & sungai jadi daya tarik', score: '+200%', bars: 68 },
            { name: 'Kuliner Dayak Katingan', detail: 'Kekayaan budaya kuliner lokal', score: '+150%', bars: 52 },
            { name: 'Warung Makan Tepi Sungai', detail: 'Berkembang di ibukota kabupaten', score: '+120%', bars: 42 },
            { name: 'Produk UMKM Anyaman + Kuliner', detail: 'Paket wisata budaya lokal', score: '+90%', bars: 32 },
          ]
        }
      }
    },
    'Kalimantan Utara': {
      cities: ['Tarakan', 'Nunukan', 'Tanjung Selor', 'Malinau', 'Bulungan'],
      insights: {
        'Tarakan': {
          score: 65, growth: '+8%', outlets: '980', revenue: 'Rp 520M',
          topCulinary: [
            { name: 'Kepiting Soka Tarakan', category: 'Seafood Premium', score: 97, bars: 97 },
            { name: 'Ikan Kakap Bakar', category: 'Seafood Khas', score: 90, bars: 90 },
            { name: 'Nasi Kuning Tarakan', category: 'Sarapan Khas', score: 83, bars: 83 },
            { name: 'Udang Galah Bakar', category: 'Seafood Sungai', score: 78, bars: 78 },
            { name: 'Kue Bayao', category: 'Kue Tradisional', score: 70, bars: 70 },
          ],
          trendingCategories: [
            { name: 'Kepiting & Seafood Segar', detail: 'Ekspor & konsumsi lokal tinggi', score: '+350%', bars: 92 },
            { name: 'Kuliner Perbatasan Malaysia', detail: 'Fusion melayu-Kaltara unik', score: '+210%', bars: 68 },
            { name: 'Cafe & Resto Modern', detail: 'Tumbuh pasca infrastruktur baru', score: '+170%', bars: 56 },
            { name: 'Frozen Seafood Artisan', detail: 'Produk olahan seafood kemasan', score: '+130%', bars: 44 },
          ]
        }
      }
    }
  }
};

// ===== LANG =====
const lang = {
  id: {
    heroTag: '🔥 Platform Kuliner Bisnis Indonesia',
    heroSub: 'Platform insight bisnis kuliner profesional terlengkap di Indonesia. Dimulai dari jantung Kalimantan — Banjarmasin hingga seluruh nusantara.',
    heroCta1: '🗺️ Jelajahi Insight Kota',
    heroCta2: 'Lihat Semua Fitur →',
    sl1: 'Kota / Kabupaten', sc1: 'coming soon',
    sl2: 'Provinsi Terdata', sc2: 'coming soon',
    sl3: 'Index Kuliner', sc3: 'coming soon',
    sl4: 'Kota Aktif Beta', sc4: 'aktif sekarang',
    featTag: 'Platform Features',
    featTitle: ['Fitur ', 'Lengkap', ' Sedang Disiapkan'],
    insTag: '🏙️ City Insight — Beta Aktif',
    insTitle: ['Insight ', 'Skala Kota'],
    provLabel: 'Pilih Provinsi:',
    cityLabel: 'Pilih Kota:',
    footerDesc: 'Platform referensi bisnis kuliner profesional pertama di Indonesia yang memetakan tren, data, dan insight dari seluruh nusantara.',
    f1t: 'Trending Kuliner Index', f1d: 'Pantau tren kuliner terpanas di seluruh Indonesia dengan data real-time dan analisis sentimen pasar.',
    f2t: 'Peta Interaktif Indonesia', f2d: 'Visualisasi peta kuliner nusantara — eksplorasi potensi bisnis berdasarkan geografi secara interaktif.',
    f3t: 'Berita & Insight Terbaru', f3d: 'Agregasi berita bisnis F&B, regulasi, dan insight dari para pakar industri kuliner Indonesia.',
    f4t: 'Statistik & Data Bisnis', f4d: 'Dashboard statistik bisnis kuliner nasional — omset, pertumbuhan, dan proyeksi pasar berbasis data.',
    f5t: 'Insight Skala Kota', f5d: 'Data dan analisis kuliner mendalam per kota — tren lokal, pemain utama, dan peluang bisnis di level kota.',
    f6t: 'Forum Profesional', f6d: 'Komunitas eksklusif pelaku bisnis kuliner, investor, dan konsultan F&B se-Indonesia untuk berdiskusi.',
  },
  en: {
    heroTag: '🔥 Indonesia\'s Culinary Business Platform',
    heroSub: 'Indonesia\'s most comprehensive professional culinary business insight platform. Starting from the heart of Borneo — Banjarmasin and beyond.',
    heroCta1: '🗺️ Explore City Insights',
    heroCta2: 'View All Features →',
    sl1: 'Cities / Regencies', sc1: 'coming soon',
    sl2: 'Mapped Provinces', sc2: 'coming soon',
    sl3: 'Culinary Index', sc3: 'coming soon',
    sl4: 'Active Beta Cities', sc4: 'active now',
    featTag: 'Platform Features',
    featTitle: ['Full ', 'Features', ' Coming Soon'],
    insTag: '🏙️ City Insight — Beta Active',
    insTitle: ['City-Scale ', 'Insights'],
    provLabel: 'Select Province:',
    cityLabel: 'Select City:',
    footerDesc: 'Indonesia\'s first professional culinary business reference platform mapping trends, data, and insights from across the archipelago.',
    f1t: 'Trending Culinary Index', f1d: 'Monitor the hottest culinary trends across Indonesia with real-time data and market sentiment analysis.',
    f2t: 'Interactive Indonesia Map', f2d: 'Visualization of the archipelago culinary map — explore business potential geographically and interactively.',
    f3t: 'Latest News & Insights', f3d: 'Aggregated F&B business news, regulations, and insights from Indonesian culinary industry experts.',
    f4t: 'Business Statistics & Data', f4d: 'National culinary business statistics dashboard — revenue, growth, and data-driven market projections.',
    f5t: 'City-Scale Insight', f5d: 'In-depth culinary data and analysis per city — local trends, key players, and business opportunities at city level.',
    f6t: 'Professional Forum', f6d: 'Exclusive community of culinary business owners, investors, and F&B consultants across Indonesia.',
  }
};

let currentLang = 'id';
let currentProvince = 'Kalimantan Selatan';
let currentCity = 'Banjarmasin';

function setLang(l) {
  currentLang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  applyLang();
}

function applyLang() {
  const t = lang[currentLang];
  document.getElementById('hero-tag').innerHTML = `<span style="width:6px;height:6px;border-radius:50%;background:var(--ember-orange);display:inline-block;"></span>${t.heroTag}`;
  document.getElementById('hero-sub').textContent = t.heroSub;
  document.getElementById('hero-cta1').innerHTML = '🗺️ ' + (currentLang === 'id' ? 'Jelajahi Insight Kota' : 'Explore City Insights');
  document.getElementById('hero-cta2').innerHTML = (currentLang === 'id' ? 'Lihat Semua Fitur →' : 'View All Features →');
  ['1','2','3','4'].forEach(i => {
    document.getElementById('sl'+i).textContent = t['sl'+i];
    document.getElementById('sc'+i).textContent = t['sc'+i];
  });
  document.getElementById('feat-tag').textContent = t.featTag;
  document.getElementById('feat-title').innerHTML = t.featTitle[0] + `<span>${t.featTitle[1]}</span>` + t.featTitle[2];
  document.getElementById('ins-tag').textContent = t.insTag;
  document.getElementById('ins-title').innerHTML = t.insTitle[0] + `<span>${t.insTitle[1]}</span>`;
  document.getElementById('prov-label').textContent = t.provLabel;
  document.getElementById('city-label').textContent = t.cityLabel;
  document.getElementById('footer-desc').textContent = t.footerDesc;
  ['1','2','3','4','5','6'].forEach(i => {
    document.getElementById('f'+i+'t').textContent = t['f'+i+'t'];
    document.getElementById('f'+i+'d').textContent = t['f'+i+'d'];
  });
  renderInsight();
}

// ===== PROVINCE TABS =====
function renderProvinceTabs() {
  const container = document.getElementById('provinceTabs');
  container.innerHTML = '';
  Object.keys(data.provinces).forEach(prov => {
    const btn = document.createElement('button');
    btn.className = 'region-tab' + (prov === currentProvince ? ' active' : '');
    btn.textContent = prov;
    btn.onclick = () => {
      currentProvince = prov;
      currentCity = Object.keys(data.provinces[prov].insights)[0];
      renderProvinceTabs();
      renderCityGrid();
      renderInsight();
    };
    container.appendChild(btn);
  });
}

// ===== CITY GRID =====
function renderCityGrid() {
  const container = document.getElementById('cityGrid');
  container.innerHTML = '';
  const cities = data.provinces[currentProvince].cities;
  cities.forEach(city => {
    const chip = document.createElement('div');
    const hasData = !!data.provinces[currentProvince].insights[city];
    chip.className = 'city-chip' + (city === currentCity ? ' active' : '');
    chip.innerHTML = city + (hasData ? '' : ' <span style="font-size:9px;opacity:0.4">soon</span>');
    chip.onclick = () => {
      if (!hasData) return;
      currentCity = city;
      renderCityGrid();
      renderInsight();
    };
    container.appendChild(chip);
  });
}

// ===== INSIGHT RENDER =====
function renderInsight() {
  const container = document.getElementById('insightMain');
  const insight = data.provinces[currentProvince].insights[currentCity];
  if (!insight) {
    container.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text-muted);">
      <div style="font-size:40px;margin-bottom:16px">🔧</div>
      <p style="font-family:'Space Mono',monospace;font-size:13px;">Data untuk kota ini sedang disiapkan.<br>Coming Soon...</p>
    </div>`;
    return;
  }

  const isEn = currentLang === 'en';

  container.innerHTML = `
    <div class="selected-city-header">
      <div>
        <p style="font-family:'Space Mono',monospace;font-size:11px;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:2px;">${currentProvince}</p>
        <h2 class="city-title">${currentCity} <span>Index</span></h2>
      </div>
      <div class="city-meta">
        <div>${isEn ? 'Updated' : 'Update'}: ${new Date().toLocaleDateString(isEn ? 'en-US' : 'id-ID', { day:'numeric', month:'long', year:'numeric' })}</div>
        <div style="color:var(--saffron);">NCI Score: ${insight.score}/100</div>
      </div>
    </div>

    <div class="metrics-row">
      <div class="metric-card">
        <div class="metric-label">${isEn ? 'NCI Score' : 'Skor NCI'}</div>
        <div class="metric-value">${insight.score}</div>
        <div class="metric-change up">▲ ${insight.growth} ${isEn ? 'this quarter' : 'kuartal ini'}</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">${isEn ? 'Active Outlets' : 'Outlet Aktif'}</div>
        <div class="metric-value">${insight.outlets}</div>
        <div class="metric-change up">▲ ${isEn ? 'growing' : 'tumbuh'}</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">${isEn ? 'Est. Revenue' : 'Est. Omset'}</div>
        <div class="metric-value" style="font-size:28px;">${insight.revenue}</div>
        <div class="metric-change up">▲ ${isEn ? 'annually' : 'per tahun'}</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">${isEn ? 'Culinary Index' : 'Index Kuliner'}</div>
        <div class="metric-value">${insight.topCulinary.length}</div>
        <div class="metric-change">${isEn ? 'categories tracked' : 'kategori terpantau'}</div>
      </div>
    </div>

    <div class="trending-grid">
      <div class="trending-card">
        <div class="trending-card-header">
          <span class="trending-card-title">🍜 ${isEn ? 'Top Culinary Index' : 'Top Kuliner Index'}</span>
          <span style="font-size:11px;color:var(--text-muted);font-family:'Space Mono',monospace;">${currentCity}</span>
        </div>
        ${insight.topCulinary.map((item, i) => `
          <div class="trending-item">
            <div class="trend-rank">${String(i+1).padStart(2,'0')}</div>
            <div class="trend-info">
              <div class="trend-name">${item.name}</div>
              <div class="trend-detail">${item.category}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;">
              <div class="trend-score">${item.score}</div>
              <div class="trend-bar"><div class="trend-fill" style="width:${item.bars}%"></div></div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="trending-card">
        <div class="trending-card-header">
          <span class="trending-card-title">📈 ${isEn ? 'Business Trends' : 'Tren Bisnis'}</span>
          <span style="font-size:11px;color:var(--text-muted);font-family:'Space Mono',monospace;">${isEn ? 'YoY Growth' : 'Pertumbuhan YoY'}</span>
        </div>
        ${insight.trendingCategories.map((item, i) => `
          <div class="trending-item">
            <div class="trend-rank">${String(i+1).padStart(2,'0')}</div>
            <div class="trend-info">
              <div class="trend-name">${item.name}</div>
              <div class="trend-detail">${item.detail}</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;">
              <div class="trend-score" style="color:#2ECC71;">${item.score}</div>
              <div class="trend-bar"><div class="trend-fill" style="width:${item.bars}%;background:linear-gradient(90deg,#2ECC71,#27AE60)"></div></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===== INIT =====
renderProvinceTabs();
renderCityGrid();
renderInsight();

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.observe-fade').forEach(el => observer.observe(el));
