<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Latih Minda! - Jadikan Masa Skrin Lebih Bermakna</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Fredoka & Nunito -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Nunito:wght@300..900&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Nunito', 'sans-serif'],
                        display: ['Fredoka', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            blue: '#6EC6FF',
                            darkBlue: '#0288D1',
                            green: '#81C784',
                            darkGreen: '#2E7D32',
                            yellow: '#FFF59D',
                            pink: '#FF8A80',
                            cream: '#FFFDE7',
                            softWhite: '#FAFAFA',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Nunito', sans-serif;
            background-color: #FFFDE7; /* Cream/Soft Pastel Yellow */
            background-image: radial-gradient(#FFF 1.8px, transparent 1.8px);
            background-size: 30px 30px;
        }
        .heading-font {
            font-family: 'Fredoka', sans-serif;
        }
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #FFFDE7;
        }
        ::-webkit-scrollbar-thumb {
            background: #6EC6FF;
            border-radius: 99px;
        }
    </style>
</head>
<body class="antialiased text-gray-800 selection:bg-yellow-200">

    <!-- HERO SECTION -->
    <section class="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 px-4 bg-gradient-to-b from-[#B2EBF2]/40 to-[#FFFDE7]">
        <!-- Hiasan Sisi (Pastel Shapes) -->
        <div class="absolute top-10 left-10 w-24 h-24 bg-[#FF8A80]/10 rounded-full blur-xl pointer-events-none"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-[#6EC6FF]/10 rounded-full blur-xl pointer-events-none"></div>
        
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <!-- Teks Hero -->
            <div class="lg:col-span-7 text-center lg:text-left space-y-6">
                <!-- Trust Badges Ringkas -->
                <div class="inline-flex flex-wrap justify-center lg:justify-start gap-2">
                    <span class="bg-[#81C784]/20 text-[#2E7D32] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <i data-lucide="shield" class="w-3.5 h-3.5"></i> Tiada Iklan
                    </span>
                    <span class="bg-[#6EC6FF]/20 text-[#0288D1] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Tanpa Langganan
                    </span>
                    <span class="bg-[#FFF59D]/30 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-yellow-200">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Bayar Sekali Sahaja
                    </span>
                    <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <i data-lucide="smile" class="w-3.5 h-3.5"></i> Sesuai Umur 2-5 Tahun
                    </span>
                </div>

                <h1 class="heading-font text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
                    "Telefon Tidak Sepatutnya Menggantikan Ibu Bapa."
                </h1>
                
                <h2 class="heading-font text-xl sm:text-2xl font-bold text-[#0288D1]">
                    Jadikan Masa Skrin Sebagai Masa Belajar Bersama.
                </h2>
                
                <p class="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                    <strong>Latih Minda</strong> ialah permainan pendidikan digital yang direka sebagai pengganti buku pembelajaran. Ia membantu ibu bapa mengajar anak dengan lebih menyeronokkan dengan gabungan kaedah interaktif lakar & uji minda.
                </p>

                <!-- Ciri Utama Trust Point -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-2">
                    <div class="flex items-center gap-3 bg-white/80 p-3.5 rounded-2xl shadow-sm border border-white/60">
                        <div class="p-2.5 bg-emerald-100 rounded-xl text-emerald-600">
                            <i data-lucide="clock" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-700 text-left">Pengehad Masa Sesi (Screentime)</span>
                    </div>
                    <div class="flex items-center gap-3 bg-white/80 p-3.5 rounded-2xl shadow-sm border border-white/60">
                        <div class="p-2.5 bg-[#6EC6FF]/20 rounded-xl text-[#0288D1]">
                            <i data-lucide="pencil" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-bold text-slate-700 text-left">Lakaran Berpandu Sempat Ketat 16px</span>
                    </div>
                </div>

                <div class="pt-4">
                    <a href="#pricing" class="inline-flex items-center gap-2 bg-[#FF8A80] hover:bg-[#ff776c] text-white font-black text-lg py-4 px-8 rounded-full shadow-lg shadow-red-200 hover:-translate-y-0.5 transition-all">
                        Dapatkan Tawaran Lancar RM9.90 <i data-lucide="arrow-right"></i>
                    </a>
                </div>
            </div>

            <!-- Visual Mockup Premium (Membina semula skrin Menu Utama berasaskan permainan HTML/CSS) -->
            <div class="lg:col-span-5 flex justify-center relative">
                <div class="absolute -inset-4 bg-gradient-to-tr from-sky-200 to-amber-100 rounded-[40px] opacity-60 blur-2xl z-0"></div>
                
                <div class="relative z-10 w-full max-w-[340px] sm:max-w-[380px] bg-slate-950 p-3 rounded-[2.5rem] shadow-2xl border-4 border-slate-700 transform rotate-[-1deg] transition-all hover:rotate-0 duration-500">
                    <div class="rounded-[1.8rem] overflow-hidden aspect-[9/14] bg-[#FFFDE7] p-3 flex flex-col justify-between relative border border-slate-800">
                        <!-- Top Header -->
                        <div class="flex items-center justify-between w-full bg-white/95 backdrop-blur-md rounded-xl p-2 border border-yellow-100 shadow-sm z-10">
                            <div class="flex items-center gap-1.5">
                                <div class="w-8 h-8 rounded-full bg-[#FFF59D] border-2 border-white flex items-center justify-center text-lg shadow-inner">👦</div>
                                <div>
                                    <h3 class="font-bold text-[9px] text-gray-700 leading-none">Adik Pintar</h3>
                                    <p class="text-[7px] text-[#2E7D32] font-semibold bg-green-50 px-1 py-0.5 rounded-full mt-0.5">Pintar Cilik</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-0.5 bg-red-100 text-red-700 border border-red-200 px-1.5 py-0.5 rounded-full text-[8px] font-bold">
                                <span>⏱️ 06:19</span>
                            </div>
                            <div class="flex items-center gap-0.5 bg-yellow-100/85 border border-yellow-200 px-2 py-0.5 rounded-full shadow-sm text-[8px] font-bold text-yellow-700">
                                <span>⭐ 8</span>
                            </div>
                        </div>

                        <!-- Menu Body -->
                        <div class="my-auto space-y-2 text-center z-10">
                            <h2 class="heading-font text-xs font-bold text-gray-700">Modul Pembelajaran</h2>
                            <p class="text-[7px] text-gray-400">Pilih salah satu aktiviti di bawah</p>
                            
                            <div class="grid grid-cols-2 gap-1.5">
                                <div class="bg-white/95 p-1.5 rounded-xl border border-red-100 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span class="text-base">✨</span>
                                    <span class="font-bold text-[8px] text-red-500 leading-tight">Kenal Huruf</span>
                                </div>
                                <div class="bg-white/95 p-1.5 rounded-xl border border-blue-100 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span class="text-base">🔟</span>
                                    <span class="font-bold text-[8px] text-blue-500 leading-tight">Kenal Nombor</span>
                                </div>
                                <div class="bg-white/95 p-1.5 rounded-xl border border-green-100 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span class="text-base">✏️</span>
                                    <span class="font-bold text-[8px] text-green-500 leading-tight">Trace Huruf</span>
                                </div>
                                <div class="bg-white/95 p-1.5 rounded-xl border border-yellow-200 flex flex-col items-center justify-center text-center shadow-sm">
                                    <span class="text-base">🔢</span>
                                    <span class="font-bold text-[8px] text-yellow-600 leading-tight">Trace Nombor</span>
                                </div>
                            </div>
                        </div>

                        <!-- Mascot Dialog -->
                        <div class="flex items-end gap-2 bg-white/90 rounded-xl p-2 border border-dashed border-yellow-300 relative z-10">
                            <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center text-3xl">👧</div>
                            <div class="bg-white rounded-lg p-1.5 shadow-sm text-[8px] border border-yellow-100 relative flex-grow text-left">
                                <p class="text-gray-700 font-semibold leading-relaxed">Alia berkata: "Pilih satu modul menyeronokkan untuk mula mengumpul bintang!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PROBLEM SECTION -->
    <section class="py-20 px-4 bg-[#B2EBF2]/20">
        <div class="max-w-4xl mx-auto text-center space-y-12">
            <div class="space-y-4">
                <span class="text-xs font-black text-[#0288D1] tracking-widest uppercase bg-[#6EC6FF]/20 px-4 py-1.5 rounded-full">REALITI MASA KINI</span>
                <h2 class="heading-font text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800">
                    Masih beri telefon supaya anak diam?
                </h2>
                <div class="w-16 h-1 bg-[#FF8A80] mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-12">
                <!-- Masalah -->
                <div class="bg-white rounded-3xl p-8 border-2 border-red-100 shadow-sm flex flex-col justify-between space-y-6">
                    <div class="space-y-4">
                        <div class="w-12 h-12 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
                            <i data-lucide="frown" class="w-6 h-6"></i>
                        </div>
                        <h3 class="heading-font text-lg font-bold text-red-700">Tontonan Pasif (Tanpa Pembelajaran)</h3>
                        <p class="text-sm text-slate-600 leading-relaxed text-left">
                            Ramai ibu bapa memberi telefon hanya supaya anak tidak mengganggu. Tetapi selepas beberapa jam, anak hanya menonton tanpa sebarang bentuk interaktiviti, mengehadkan koordinasi motor dan membantutkan sistem pemikiran kognitif.
                        </p>
                    </div>
                    <ul class="text-left space-y-2 text-xs text-red-600 font-semibold bg-red-50/50 p-4 rounded-2xl border border-red-100">
                        <li class="flex items-center gap-1.5">❌ Tiada interaksi aktif berfikir</li>
                        <li class="flex items-center gap-1.5">❌ Terdedah kepada limpahan iklan tidak sihat</li>
                        <li class="flex items-center gap-1.5">❌ Menjarakkan interaksi sosial bersama ibu bapa</li>
                    </ul>
                </div>

                <!-- Solusi Latih Minda -->
                <div class="bg-white rounded-3xl p-8 border-4 border-[#81C784] shadow-md flex flex-col justify-between space-y-6">
                    <div class="space-y-4">
                        <div class="w-12 h-12 bg-emerald-100 text-[#2E7D32] rounded-2xl flex items-center justify-center mx-auto">
                            <i data-lucide="heart" class="w-6 h-6"></i>
                        </div>
                        <h3 class="heading-font text-lg font-bold text-[#2E7D32]">Interaksi Aktif (Latih Minda)</h3>
                        <p class="text-sm text-slate-600 leading-relaxed text-left">
                            Latih Minda menukarkan gajet pintar menjadi sebuah buku interaktif. Ia direka bagi menggalakkan bimbingan dua hala, di mana anak-anak melakar huruf, belajar mengenal warna asas, bentuk, dan haiwan berserta kesan sound menarik.
                        </p>
                    </div>
                    <ul class="text-left space-y-2 text-xs text-[#2E7D32] font-semibold bg-emerald-50/50 p-4 rounded-2xl border border-[#81C784]">
                        <li class="flex items-center gap-1.5">✅ Pembelajaran dua hala yang merangsang minda</li>
                        <li class="flex items-center gap-1.5">✅ Bebas daripada sebarang bentuk pengiklanan</li>
                        <li class="flex items-center gap-1.5">✅ Memupuk hubungan kekeluargaan yang berkualiti</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="py-20 px-4 bg-white">
        <div class="max-w-6xl mx-auto space-y-12">
            <div class="text-center space-y-4">
                <span class="text-xs font-black text-[#2E7D32] tracking-widest uppercase bg-[#81C784]/20 px-4 py-1.5 rounded-full">MODUL PEMBELAJARAN</span>
                <h2 class="heading-font text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800">
                    Modul Pembelajaran Lengkap & Komprehensif
                </h2>
                <div class="w-16 h-1 bg-[#6EC6FF] mx-auto rounded-full"></div>
            </div>

            <!-- Grid 10 Features -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-8">
                <!-- Feature 1 -->
                <div class="bg-rose-50/50 hover:bg-rose-50 p-6 rounded-3xl border border-rose-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-rose-100 text-rose-600 rounded-2xl w-fit mb-4">
                        <i data-lucide="baseline" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">1. Kenal Huruf A-Z</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            "hai adik, sini kita akan belajar mengenali huruf ya"
                        </p>
                    </div>
                </div>

                <!-- Feature 2 -->
                <div class="bg-blue-50/50 hover:bg-blue-50 p-6 rounded-3xl border border-blue-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-blue-100 text-blue-600 rounded-2xl w-fit mb-4">
                        <i data-lucide="binary" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">2. Kenal Nombor</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            "hai adik, sini kita akan belajar mengenali nombor dan cara sebutannya"
                        </p>
                    </div>
                </div>

                <!-- Feature 3 -->
                <div class="bg-green-50/50 hover:bg-green-50 p-6 rounded-3xl border border-green-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-green-100 text-[#2E7D32] rounded-2xl w-fit mb-4">
                        <i data-lucide="pencil" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">3. Trace Huruf</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            "hai adik, sini kita akan belajar menulis huruf. Adik kena tulis mengikut bentuk huruf yang diberikan"
                        </p>
                    </div>
                </div>

                <!-- Feature 4 -->
                <div class="bg-yellow-50/50 hover:bg-yellow-50 p-6 rounded-3xl border border-yellow-200/60 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-yellow-100 text-amber-700 rounded-2xl w-fit mb-4">
                        <i data-lucide="pencil-line" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">4. Trace Nombor</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            "hai adik, sini kita akan belajar menulis nombor. Adik kena tulis mengikut bentuk nombor yang diberikan"
                        </p>
                    </div>
                </div>

                <!-- Feature 5 -->
                <div class="bg-purple-50/50 hover:bg-purple-50 p-6 rounded-3xl border border-purple-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-purple-100 text-purple-600 rounded-2xl w-fit mb-4">
                        <i data-lucide="palette" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">5. Warna Ceria</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            "hai adik, sini kita akan belajar mengenali warna asas"
                        </p>
                    </div>
                </div>

                <!-- Feature 6 -->
                <div class="bg-pink-50/50 hover:bg-pink-50 p-6 rounded-3xl border border-pink-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-pink-100 text-pink-600 rounded-2xl w-fit mb-4">
                        <i data-lucide="shapes" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">6. Bentuk Comel</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            "hai adik, sini kita akan belajar mengenali bentuk bentuk asas"
                        </p>
                    </div>
                </div>

                <!-- Feature 7 -->
                <div class="bg-emerald-50/50 hover:bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-emerald-100 text-emerald-600 rounded-2xl w-fit mb-4">
                        <i data-lucide="dog" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">7. Dunia Haiwan</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            "hai adik, sini kita akan belajar mengenali haiwan asas"
                        </p>
                    </div>
                </div>

                <!-- Feature 8 -->
                <div class="bg-orange-50/50 hover:bg-orange-50 p-6 rounded-3xl border border-orange-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-orange-100 text-orange-600 rounded-2xl w-fit mb-4">
                        <i data-lucide="help-circle" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">8. Kuiz Interaktif</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            Menjawab teka-teki ganjaran menguji minda secara santai yang dikawal oleh sistem rawak pintar.
                        </p>
                    </div>
                </div>

                <!-- Feature 9 -->
                <div class="bg-indigo-50/50 hover:bg-indigo-50 p-6 rounded-3xl border border-indigo-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-indigo-100 text-indigo-600 rounded-2xl w-fit mb-4">
                        <i data-lucide="clock" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">9. Screen Time Limit</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            Sistem pemasa automatik yang membantu ibu bapa memantau dan mengawal tempoh permainan sihat.
                        </p>
                    </div>
                </div>

                <!-- Feature 10 -->
                <div class="bg-amber-50/50 hover:bg-amber-50 p-6 rounded-3xl border border-amber-100 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-sm">
                    <div class="p-3 bg-amber-100 text-amber-700 rounded-2xl w-fit mb-4">
                        <i data-lucide="trophy" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h4 class="heading-font font-bold text-slate-800 text-base">10. Leaderboard</h4>
                        <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                            Sistem ganjaran mengumpul bintang bintang kejayaan sebagai motivasi berterusan buat si cilik.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- GAME PREVIEW SECTION WITH FLAT CUSTOM MOCKUPS -->
    <section class="py-20 px-4 bg-gradient-to-b from-white to-[#FFFDE7]">
        <div class="max-w-6xl mx-auto space-y-12">
            <div class="text-center space-y-4">
                <span class="text-xs font-black text-[#0288D1] tracking-widest uppercase bg-[#6EC6FF]/20 px-4 py-1.5 rounded-full">PREVIEW PERMAINAN</span>
                <h2 class="heading-font text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800">
                    Saksikan Paparan Antara Muka Sebenar
                </h2>
                <p class="text-slate-600 max-w-2xl mx-auto">
                    Berikut adalah reka bentuk mockup digital yang menyerupai sebulat-bulatnya permainan Latih Minda yang akan dipasang pada telefon pintar atau tablet anda.
                </p>
                <div class="w-16 h-1 bg-[#FF8A80] mx-auto rounded-full"></div>
            </div>

            <!-- Grid 4 Tangkapan Skrin Digital Realistik (Pure HTML/CSS Mockups of our game) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                <!-- Preview 1: Welcome Screen Mockup -->
                <div class="flex flex-col items-center space-y-4">
                    <div class="relative w-full max-w-[260px] bg-slate-950 p-2.5 rounded-[2.2rem] shadow-xl border-4 border-slate-700 overflow-hidden aspect-[9/15.5]">
                        <div class="w-full h-full rounded-[1.5rem] bg-[#FFFDE7] p-3 flex flex-col justify-between text-center select-none">
                            <div class="relative z-10 space-y-2 mt-4">
                                <h1 class="heading-font text-base font-black text-[#0288D1]">Latih Minda!</h1>
                                <p class="text-[8px] font-bold text-slate-400">Edisi Premium Prasekolah</p>
                            </div>
                            
                            <div class="bg-white/90 rounded-xl p-2 border border-yellow-200 shadow-sm flex flex-col items-center gap-1 my-auto">
                                <span class="text-3xl animate-bounce-gentle">🐻</span>
                                <p class="text-[7px] font-bold text-slate-700">"Hai adik pintar! Mari mulakan pengembaraan belajar bersama Cici!"</p>
                            </div>

                            <button class="bg-[#81C784] text-white font-bold text-[10px] py-2 rounded-xl border-b-2 border-green-600">Saya Sedia</button>
                        </div>
                    </div>
                    <div class="text-center space-y-1">
                        <h4 class="heading-font font-bold text-slate-800 text-sm">1. Skrin Aluan</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Antara muka permulaan selamat yang mesra kanak-kanak prasekolah.</p>
                    </div>
                </div>

                <!-- Preview 2: Menu Utama Mockup -->
                <div class="flex flex-col items-center space-y-4">
                    <div class="relative w-full max-w-[260px] bg-slate-950 p-2.5 rounded-[2.2rem] shadow-xl border-4 border-slate-700 overflow-hidden aspect-[9/15.5]">
                        <div class="w-full h-full rounded-[1.5rem] bg-[#FFFDE7] p-2.5 flex flex-col justify-between text-center select-none">
                            <div class="flex justify-between items-center text-[7px] font-black bg-white rounded-lg p-1 border">
                                <span class="text-[#0288D1]">👦 Adik Pintar</span>
                                <span class="text-amber-600">⭐ 8</span>
                            </div>

                            <div class="grid grid-cols-2 gap-1.5 my-auto">
                                <div class="bg-white p-1 rounded-lg border flex flex-col items-center">
                                    <span class="text-xs">✨</span>
                                    <span class="text-[6px] font-black">ABC</span>
                                </div>
                                <div class="bg-white p-1 rounded-lg border flex flex-col items-center">
                                    <span class="text-xs">🔟</span>
                                    <span class="text-[6px] font-black">123</span>
                                </div>
                                <div class="bg-white p-1 rounded-lg border flex flex-col items-center">
                                    <span class="text-xs">✏️</span>
                                    <span class="text-[6px] font-black">Trace</span>
                                </div>
                                <div class="bg-white p-1 rounded-lg border flex flex-col items-center">
                                    <span class="text-xs">🎨</span>
                                    <span class="text-[6px] font-black">Warna</span>
                                </div>
                            </div>

                            <div class="bg-white p-1 border border-yellow-200 rounded-lg text-[6px] flex items-center gap-1">
                                <span>👧</span>
                                <span class="text-left">"Pilih satu modul menyeronokkan untuk mula belajar!"</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-center space-y-1">
                        <h4 class="heading-font font-bold text-slate-800 text-sm">2. Menu Utama</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Akses mudah ke semua 10 modul pembelajaran yang ceria.</p>
                    </div>
                </div>

                <!-- Preview 3: Kenal Huruf Mockup -->
                <div class="flex flex-col items-center space-y-4">
                    <div class="relative w-full max-w-[260px] bg-slate-950 p-2.5 rounded-[2.2rem] shadow-xl border-4 border-slate-700 overflow-hidden aspect-[9/15.5]">
                        <div class="w-full h-full rounded-[1.5rem] bg-[#FFFDE7] p-2.5 flex flex-col justify-between text-center select-none">
                            <div class="flex justify-between items-center text-[7px] font-bold bg-white p-1 rounded border">
                                <span class="text-gray-500">Huruf 1 / 26</span>
                                <span class="text-yellow-600">⭐ 8</span>
                            </div>

                            <div class="bg-white rounded-xl p-3 border shadow-sm my-auto space-y-1 flex flex-col items-center">
                                <h1 class="heading-font text-3xl font-black text-[#0288D1]">A a</h1>
                                <span class="text-3xl">🐔</span>
                                <p class="text-[10px] font-black text-gray-700">Ayam</p>
                            </div>

                            <p class="text-[6px] text-gray-400">Kembali ke Menu Utama</p>
                        </div>
                    </div>
                    <div class="text-center space-y-1">
                        <h4 class="heading-font font-bold text-slate-800 text-sm">3. Kenal Huruf</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Padanan visual huruf besar, kecil, serta sebutan bergambar.</p>
                    </div>
                </div>

                <!-- Preview 4: Lakar Huruf Mockup -->
                <div class="flex flex-col items-center space-y-4">
                    <div class="relative w-full max-w-[260px] bg-slate-950 p-2.5 rounded-[2.2rem] shadow-xl border-4 border-slate-700 overflow-hidden aspect-[9/15.5]">
                        <div class="w-full h-full rounded-[1.5rem] bg-[#FFFDE7] p-2.5 flex flex-col justify-between text-center select-none">
                            <p class="text-[7px] font-black text-purple-700">Lakar Huruf Besar: A</p>

                            <div class="bg-white rounded-xl aspect-square w-full border-2 border-dashed border-purple-200 relative flex items-center justify-center my-auto">
                                <span class="text-6xl font-black text-purple-50">A</span>
                                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                    <path d="M 50 20 L 30 75 M 50 20 L 70 75 M 35 55 L 65 55" fill="none" stroke="#40C4FF" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
                                </svg>
                                <span class="absolute top-[25px] left-[52px] text-base">☝️</span>
                            </div>

                            <div class="grid grid-cols-2 gap-1.5">
                                <button class="bg-gray-100 text-[6px] py-1 rounded font-bold">Padam</button>
                                <button class="bg-emerald-400 text-white text-[6px] py-1 rounded font-black">Selesai Semak</button>
                            </div>
                        </div>
                    </div>
                    <div class="text-center space-y-1">
                        <h4 class="heading-font font-bold text-slate-800 text-sm">4. Lakar Huruf</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">Latihan lakaran tepat berpandu garis sempadan ketat 16px yang dinilai secara automatik.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- WHY LATIH MINDA (COMPARISON CARDS) -->
    <section class="py-20 px-4 bg-[#B2EBF2]/10">
        <div class="max-w-4xl mx-auto space-y-12">
            <div class="text-center space-y-4">
                <span class="text-xs font-black text-[#0288D1] tracking-widest uppercase bg-[#6EC6FF]/20 px-4 py-1.5 rounded-full">KELEBIHAN PERBANDINGAN</span>
                <h2 class="heading-font text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800">
                    Bandingkan Sebelum Anda Memilih
                </h2>
                <div class="w-16 h-1 bg-[#6EC6FF] mx-auto rounded-full"></div>
            </div>

            <!-- Comparison Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <!-- Video Pasif / Biasa -->
                <div class="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm space-y-6">
                    <h3 class="heading-font text-xl font-black text-slate-600 border-b pb-4 flex items-center gap-2">
                        <span>📱</span> Masa Skrin Biasa (Pasif)
                    </h3>
                    
                    <ul class="space-y-4 text-sm text-slate-600">
                        <li class="flex items-start gap-3">
                            <span class="text-red-500 font-bold">✕</span>
                            <div>
                                <strong>Menonton Tanpa Berpikir:</strong> Anak sekadar melihat gambar bergerak di video tanpa menggerakkan minda atau motor fizikal jari.
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="text-red-500 font-bold">✕</span>
                            <div>
                                <strong>Tiada Penglibatan Ibu Bapa:</strong> Kanak-kanak dibiarkan bermain sendiri dan hanyut dalam dunia yang terasing tanpa komunikasi keluarga.
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="text-red-500 font-bold">✕</span>
                            <div>
                                <strong>Iklan Serta Gangguan:</strong> Aplikasi percuma sering dipenuhi iklan tidak sesuai yang boleh mengancam perkembangan minda rapuh.
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Latih Minda -->
                <div class="bg-white rounded-3xl p-8 border-4 border-[#81C784] shadow-md space-y-6 relative overflow-hidden">
                    <div class="absolute top-0 right-0 bg-[#81C784] text-white text-[10px] font-black py-1 px-4 rounded-bl-2xl">
                        DIREKOMENDASIKAN
                    </div>
                    
                    <h3 class="heading-font text-xl font-black text-emerald-700 border-b pb-4 flex items-center gap-2">
                        <span>⭐️</span> Latih Minda (Interaktif Aktif)
                    </h3>
                    
                    <ul class="space-y-4 text-sm text-slate-600">
                        <li class="flex items-start gap-3">
                            <span class="text-emerald-500 font-bold">✓</span>
                            <div>
                                <strong>Sistem Berfikir Dua Hala:</strong> Anak melukis mengikut garis sempadan, memilih jawapan kuiz pintar, dan mendengar kesan sound gembira.
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="text-emerald-500 font-bold">✓</span>
                            <div>
                                <strong>Masa Belajar Bersama:</strong> Sesuai dijadikan alat bantu mengajar yang interaktif bagi mengeratkan hubungan kekeluargaan yang rapat.
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="text-emerald-500 font-bold">✓</span>
                            <div>
                                <strong>Selamat, Bersih & Suci:</strong> Bebas sepenuhnya daripada sebarang iklan berbahaya serta tiada langganan bulanan yang tersembunyi.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- REAL CUSTOMER FEEDBACK SECTION -->
    <section class="py-20 px-4 bg-[#FFFDE7]">
        <div class="max-w-5xl mx-auto space-y-12">
            <div class="text-center space-y-4">
                <span class="text-xs font-black text-[#2E7D32] tracking-widest uppercase bg-[#81C784]/20 px-4 py-1.5 rounded-full">MAKLUM BALAS SEBENAR IBU BAPA</span>
                <h2 class="heading-font text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800">
                    Kisah Kejayaan Ibu Bapa Bersama Latih Minda
                </h2>
                <div class="w-16 h-1 bg-[#6EC6FF] mx-auto rounded-full"></div>
            </div>

            <!-- Testimonial Grid with verbatim user-provided texts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <!-- Testimonial 1 -->
                <div class="bg-white p-6 rounded-3xl shadow-sm border border-yellow-100 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-[#FFF59D]">
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed italic">
                            "Assalamualaikum. Ank sy main kuiz dunia haiwan . Alhamdulilah dia faham. anak umur 3 tahun. Semua ok. Dia knl haiwan. Nmpak dia tertarik main game tersebut."
                        </p>
                    </div>
                    <div class="mt-6 flex items-center gap-3 pt-4 border-t border-slate-50">
                        <div class="w-10 h-10 rounded-full bg-[#B2EBF2] flex items-center justify-center font-bold text-sm text-[#0288D1]">P</div>
                        <div>
                            <h4 class="font-bold text-sm text-slate-800">Puan Hidayah</h4>
                            <p class="text-[10px] text-gray-400">Ibu kepada anak (3 tahun)</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white p-6 rounded-3xl shadow-sm border border-yellow-100 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-[#FFF59D]">
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed italic">
                            "Feedback yg utk tulisan ABC kalau anak tulis tak cantik dapat bintang tak penuh,, bagi saya agak accurate la sbb kne tulis betul-betul baru dapat bintang, part kira-kira 1 2 3 pun okay."
                        </p>
                    </div>
                    <div class="mt-6 flex items-center gap-3 pt-4 border-t border-slate-50">
                        <div class="w-10 h-10 rounded-full bg-[#81C784]/30 flex items-center justify-center font-bold text-sm text-emerald-700">P</div>
                        <div>
                            <h4 class="font-bold text-sm text-slate-800">Puan Sabrina</h4>
                            <p class="text-[10px] text-gray-400">Ibu kepada anak (4 tahun)</p>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-white p-6 rounded-3xl shadow-sm border border-yellow-100 flex flex-col justify-between">
                    <div class="space-y-4">
                        <div class="flex text-[#FFF59D]">
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 fill-current text-amber-400"></i>
                            <i data-lucide="star" class="w-5 h-5 text-slate-200"></i>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed italic">
                            "Kalau anak sy kenal huruf kurang menarik minat dia la, sebab dah 5 tahun kan.. dia dah mengenal huruf.. yang lain2 okey dia suka dan enjoy main."
                        </p>
                    </div>
                    <div class="mt-6 flex items-center gap-3 pt-4 border-t border-slate-50">
                        <div class="w-10 h-10 rounded-full bg-[#FF8A80]/20 flex items-center justify-center font-bold text-sm text-red-500">I</div>
                        <div>
                            <h4 class="font-bold text-sm text-slate-800">Ibu Prihatin</h4>
                            <p class="text-[10px] text-gray-400">Ibu kepada anak (5 tahun)</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Maklum Balas Penambahbaikan Komited -->
            <div class="bg-white/80 p-8 rounded-3xl border border-dashed border-yellow-300 max-w-3xl mx-auto space-y-4 text-center">
                <span class="text-[10px] font-black text-amber-800 uppercase bg-[#FFF59D] px-3 py-1 rounded-full">KOTAK PENAMBAHBAIKAN PEMBANGUN</span>
                <p class="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                    "Kami sentiasa mendengar maklum balas pengguna dan kemas kini akan diberikan dari semasa ke semasa."
                </p>
                <div class="bg-blue-50 text-slate-700 rounded-2xl p-4 text-xs font-semibold leading-relaxed border border-blue-100 max-w-lg mx-auto">
                    👉 <strong>Pesanan Komitmen Kami:</strong> Kami sentiasa mendengar maklum balas anda untuk menghasilkan kemas kini permainan Latih Minda yang lebih berkualiti dari semasa ke semasa!
                </div>
            </div>
        </div>
    </section>

    <!-- ABOUT THE PRODUCT SECTION -->
    <section class="py-20 px-4 bg-white relative">
        <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Ilustrasi / Image Mockup Left -->
            <div class="lg:col-span-5 order-last lg:order-first flex justify-center">
                <div class="bg-gradient-to-tr from-[#FFFDE7] to-[#B2EBF2]/40 p-6 rounded-[36px] shadow-inner max-w-[340px] text-center border-2 border-yellow-100/50">
                    <span class="text-7xl block animate-bounce-gentle">🧸</span>
                    <h4 class="heading-font text-lg font-bold text-slate-700 mt-4">Peralatan, Bukan Pengganti</h4>
                    <p class="text-xs text-gray-500 mt-2 leading-relaxed">
                        Latih Minda dibuat untuk merapatkan interaksi anak dan ibu bapa. Kami tidak bertujuan menggantikan fungsi anda sebagai pendidik, sebaliknya menyuburkan pembelajaran itu sendiri.
                    </p>
                </div>
            </div>

            <!-- Teks Penjelasan -->
            <div class="lg:col-span-7 space-y-6">
                <span class="text-xs font-black text-[#0288D1] tracking-widest uppercase bg-[#6EC6FF]/20 px-4 py-1.5 rounded-full">MOTO LATIH MINDA</span>
                <h2 class="heading-font text-3xl sm:text-4xl font-black text-slate-800">
                    Ini bukan aplikasi yang menggantikan peranan ibu bapa.
                </h2>
                <div class="w-16 h-1 bg-[#FF8A80] rounded-full"></div>
                
                <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Latih Minda direka sepenuhnya berasaskan konsep <strong>Belajar Bersama</strong>. Kami percaya bahawa peranti pintar hanyalah pengganti buku fizikal moden — alat sokongan untuk memudahkan tugasan pengajaran harian anda.
                </p>
                
                <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                    Pembelajaran terbaik untuk kanak-kanak prasekolah berlaku apabila ibu bapa duduk bersama, membimbing, berinteraksi dan membaca bersama anak-anak. Aplikasi ini melancarkan proses tersebut dengan paparan visual yang ceria dan sound kesan gembira yang meningkatkan tumpuan anak.
                </p>

                <div class="flex items-center gap-3 bg-emerald-50 border border-emerald-100 p-4 rounded-2xl max-w-md">
                    <div class="w-10 h-10 bg-emerald-100 text-[#2E7D32] rounded-full flex items-center justify-center shrink-0">
                        <i data-lucide="users" class="w-5 h-5"></i>
                    </div>
                    <span class="text-xs font-bold text-[#2E7D32]">Sesuai untuk anak meluangkan masa berkualiti (bonding time) bersama keluarga.</span>
                </div>
            </div>
        </div>
    </section>

    <!-- PRICING SECTION -->
    <section id="pricing" class="py-20 px-4 bg-[#B2EBF2]/20">
        <div class="max-w-4xl mx-auto space-y-12 text-center">
            <div class="space-y-4">
                <span class="text-xs font-black text-rose-600 tracking-widest uppercase bg-rose-100 px-4 py-1.5 rounded-full">PROMOSI PELANCARAN ISTIMEWA</span>
                <h2 class="heading-font text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800">
                    Mula Melabur dalam Pendidikan Anak Hari Ini
                </h2>
                <p class="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
                    Satu pelaburan kecil tanpa sebarang caj bulanan berulang. Akses serta-merta selepas membuat satu kali pembayaran sahaja.
                </p>
                <div class="w-16 h-1 bg-[#81C784] mx-auto rounded-full"></div>
            </div>

            <!-- Premium Pricing Table -->
            <div class="bg-white rounded-[36px] border-4 border-[#6EC6FF] shadow-2xl max-w-md mx-auto overflow-hidden relative transform transition-all hover:scale-[1.01]">
                <div class="absolute top-0 right-0 bg-rose-500 text-white text-xs font-black py-1 px-6 rounded-bl-3xl uppercase tracking-widest">
                    80% DISKAUN
                </div>
                
                <div class="p-8 space-y-6">
                    <div class="space-y-2">
                        <h3 class="heading-font text-2xl font-black text-slate-700">Akses Penuh Latih Minda</h3>
                        <p class="text-xs text-slate-400">Promosi pelancaran masa terhad</p>
                    </div>

                    <!-- Harga -->
                    <div class="py-4 border-y border-dashed border-gray-100 space-y-1">
                        <span class="text-sm text-gray-400 line-through">Harga Biasa: RM49.00</span>
                        <div class="flex justify-center items-baseline gap-1">
                            <span class="text-lg font-black text-slate-700">RM</span>
                            <span class="text-5xl font-black text-[#0288D1]">9.90</span>
                            <span class="text-xs font-bold text-[#0288D1] bg-sky-100 px-2 py-0.5 rounded-full ml-1 animate-pulse">SAHAJA</span>
                        </div>
                    </div>

                    <!-- Ciri Pakej -->
                    <ul class="text-left space-y-3.5 text-slate-600 text-sm max-w-[280px] mx-auto">
                        <li class="flex items-center gap-2.5 font-semibold text-xs">
                            <span class="w-5 h-5 bg-[#81C784]/20 text-[#2E7D32] rounded-full flex items-center justify-center shrink-0">✓</span>
                            Akses semua 10 Modul (ABC, 123, Kuiz, dll)
                        </li>
                        <li class="flex items-center gap-2.5 font-semibold text-xs">
                            <span class="w-5 h-5 bg-[#81C784]/20 text-[#2E7D32] rounded-full flex items-center justify-center shrink-0">✓</span>
                            Satu kali bayar, akses seumur hidup
                        </li>
                        <li class="flex items-center gap-2.5 font-semibold text-xs">
                            <span class="w-5 h-5 bg-[#81C784]/20 text-[#2E7D32] rounded-full flex items-center justify-center shrink-0">✓</span>
                            Percuma kemas kini masa depan selamanya
                        </li>
                        <li class="flex items-center gap-2.5 font-semibold text-xs">
                            <span class="w-5 h-5 bg-[#81C784]/20 text-[#2E7D32] rounded-full flex items-center justify-center shrink-0">✓</span>
                            Tiada iklan atau caj bulanan tersembunyi
                        </li>
                    </ul>

                    <!-- Pembelian Butang Utama (Satu-satunya CTA Pembelian) -->
                    <div class="pt-4 space-y-3">
                        <a href="https://toyyibpay.com/Latih-Minda" target="_blank" class="block w-full py-4 bg-[#FF8A80] hover:bg-[#ff776c] text-white font-black text-lg rounded-2xl shadow-lg border-b-4 border-red-700 transition-all text-center">
                            Dapatkan Latih Minda Sekarang
                        </a>
                        <p class="text-[10px] text-gray-400 font-bold">🔒 Akses serta-merta selepas pembayaran.</p>
                    </div>

                    <!-- Kesesuaian Sistem Operasi -->
                    <div class="pt-4 border-t border-gray-100 flex justify-center items-center gap-4 text-xs font-bold text-gray-500">
                        <span>Serasi dengan:</span>
                        <span class="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"><i data-lucide="tablet" class="w-3.5 h-3.5"></i> Tablet</span>
                        <span class="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"><i data-lucide="smartphone" class="w-3.5 h-3.5"></i> Telefon</span>
                        <span class="bg-gray-100 px-3 py-1 rounded-full">Android / iOS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ SECTION WITH CORRECT VERBATIM RESPONSES -->
    <section class="py-20 px-4 bg-white">
        <div class="max-w-4xl mx-auto space-y-12">
            <div class="text-center space-y-4">
                <span class="text-xs font-black text-[#0288D1] tracking-widest uppercase bg-[#6EC6FF]/20 px-4 py-1.5 rounded-full">PERLU BANTUAN?</span>
                <h2 class="heading-font text-3xl sm:text-4xl font-black text-slate-800">
                    Soalan Lazim (FAQ)
                </h2>
                <div class="w-16 h-1 bg-[#6EC6FF] mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <!-- Q1 (Verbatim) -->
                <div class="bg-[#FFFDE7]/40 p-6 rounded-3xl border border-yellow-100 space-y-2">
                    <h4 class="heading-font font-bold text-slate-800 text-sm">Adakah saya perlu sentiasa bersambung ke internet?</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Ya. Permainan Latih Minda dimainkan sepenuhnya melalui laman web, jadi sambungan internet diperlukan untuk mengakses dan menggunakan permainan.
                    </p>
                </div>

                <!-- Q2 (Verbatim) -->
                <div class="bg-[#FFFDE7]/40 p-6 rounded-3xl border border-yellow-100 space-y-2">
                    <h4 class="heading-font font-bold text-slate-800 text-sm">Bagaimanakah cara untuk saya memasang (install) permainan ini?</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                       Sangat mudah! Tiada pemasangan (install) diperlukan. Selepas pembayaran berjaya, pautan (link) ke laman web permainan akan dihantar terus ke e-mel anda. Hanya klik pautan tersebut dan anak anda boleh terus mula belajar sambil bermain.
                    </p>
                </div>

                <!-- Q3 -->
                <div class="bg-[#FFFDE7]/40 p-6 rounded-3xl border border-yellow-100 space-y-2">
                    <h4 class="heading-font font-bold text-slate-800 text-sm">Adakah terdapat sebarang langganan bulanan?</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Sama sekali tidak. Anda hanya perlu bayar sekali sahaja pada harga promosi RM9.90 dan ia akan menjadi milik anda seumur hidup bersama semua kemas kini masa depan secara percuma.
                    </p>
                </div>

                <!-- Q4 -->
                <div class="bg-[#FFFDE7]/40 p-6 rounded-3xl border border-yellow-100 space-y-2">
                    <h4 class="heading-font font-bold text-slate-800 text-sm">Adakah terdapat sebarang iklan di dalam permainan?</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Tiada sebarang iklan. Kami komited sepenuhnya untuk menyediakan zon bebas iklan yang 100% safe untuk perkembangan minda kanak-kanak prasekolah.
                    </p>
                </div>

                <!-- Q5 -->
                <div class="bg-[#FFFDE7]/40 p-6 rounded-3xl border border-yellow-100 space-y-2">
                    <h4 class="heading-font font-bold text-slate-800 text-sm">Adakah permainan ini sesuai dimainkan sendirian oleh anak?</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Kami amat mengesyorkan penglibatan aktif ibu bapa atau penjaga di peringkat awal untuk membimbing proses melukis dan membina "bonding time" berkualiti bersama-sama.
                    </p>
                </div>

                <!-- Q6 -->
                <div class="bg-[#FFFDE7]/40 p-6 rounded-3xl border border-yellow-100 space-y-2">
                    <h4 class="heading-font font-bold text-slate-800 text-sm">Berapakah umur kanak-kanak yang paling sesuai?</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Permainan Latih Minda direka secara klinikal sesuai untuk fasa perkembangan minda dan koordinasi fizikal kanak-kanak berumur antara 2 hingga 5 tahun.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-12 bg-[#FFFDE7] border-t border-yellow-100 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-4 px-4">
            <h3 class="heading-font text-xl font-black text-slate-700">Latih Minda!</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
                © 2026 Latih Minda. Hak Cipta Terpelihara. Direka khas dengan penuh kasih sayang untuk kanak-kanak Malaysia.
            </p>
        </div>
    </footer>

    <script>
        // Inisialisasi Lucide Icons
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    </script>
</body>
</html>