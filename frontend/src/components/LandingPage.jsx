import React, { useState, useEffect } from 'react';

const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/$/, '');

const AnimatedCounter = ({ end, suffix = '' }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const increment = end / 60;
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end]);
    return <span>{count.toLocaleString()}{suffix}</span>;
};

const IconLeaf = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 5.25-8 5.25S14.36 11.34 13 12.5A3.77 3.77 0 017.5 13.5c.66-2.32 2.48-4.56 6.5-5.5z"/>
    </svg>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-forest-deep/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-sprout flex items-center justify-center">
                        <IconLeaf />
                    </div>
                    <span className="font-display font-semibold text-xl text-cream">Eco-Loop</span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#fitur" className="text-cream/80 hover:text-sprout transition-colors font-medium">Fitur</a>
                    <a href="#cara-kerja" className="text-cream/80 hover:text-sprout transition-colors font-medium">Cara Kerja</a>
                    <a href="#kategori" className="text-cream/80 hover:text-sprout transition-colors font-medium">Kategori</a>
                </div>
                <div className="flex items-center gap-3">
                    <a href={`${BACKEND_URL}/login`} className="px-5 py-2 text-sprout font-semibold rounded-lg hover:bg-sprout/10 transition-colors">Masuk</a>
                    <a href={`${BACKEND_URL}/register`} className="px-7 py-2 rounded-full font-semibold text-forest-deep bg-sprout hover:brightness-110 transition-all">Daftar Gratis</a>
                </div>
            </div>
        </nav>
    );
};

const HeroSection = () => (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-deep">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(ellipse 80% 50% at 70% 50%, #2d6a4f 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #95d5b2 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-7 bg-sprout/15 text-sprout-light border border-sprout/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Innoventure Chapter II 2026
                    </div>
                    <h1 className="font-display font-bold mb-7 text-cream" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                        Jual. Beli.{' '}
                        <span className="italic text-sprout">Selamatkan Bumi.</span>
                    </h1>
                    <p className="text-lg mb-10 max-w-lg text-cream/65" style={{ lineHeight: 1.75 }}>
                        Platform jual-beli barang bekas, rumput segar, dan sisa makanan — setiap transaksi secara otomatis mengurangi jejak karbon Anda dan memberi{' '}
                        <span className="text-sprout-light">Voucher Karbon</span> sebagai hadiah.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-14">
                        <a href={`${BACKEND_URL}/register`} className="px-7 py-3.5 rounded-full font-semibold bg-sprout text-forest-deep hover:brightness-110 transition-all">
                            Mulai Sekarang — Gratis
                        </a>
                        <a href={`${BACKEND_URL}/products`} className="px-7 py-3.5 rounded-full font-medium border border-cream/25 text-cream hover:bg-white/5 transition-all">
                            Lihat Katalog →
                        </a>
                    </div>
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-sprout/10 border border-sprout/20">
                        <div className="w-10 h-10 rounded-xl bg-sprout/20 flex items-center justify-center">
                            <IconLeaf />
                        </div>
                        <div>
                            <div className="text-xs text-cream/50 mb-0.5">Total Karbon Dihemat</div>
                            <div className="font-display font-bold text-xl text-sprout-light">
                                <AnimatedCounter end={48720} suffix=" kg CO₂" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    <div className="grid grid-cols-2 gap-4" style={{ height: '520px' }}>
                        <div className="rounded-3xl overflow-hidden row-span-2" style={{ backgroundColor: '#1f4d2e' }}>
                            <img src="https://images.unsplash.com/photo-1750343293522-2f08b60a317a?w=500&h=600&fit=crop" alt="Daur ulang" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: '#1f4d2e' }}>
                            <img src="https://images.unsplash.com/photo-1569163139500-66446e2926ca?w=400&h=220&fit=crop" alt="Bumi" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-3xl p-5 flex flex-col justify-between bg-sprout">
                            <div className="text-xs font-medium text-forest-deep/70">Voucher Karbon</div>
                            <div>
                                <div className="font-display font-bold text-3xl text-forest-deep">2.340</div>
                                <div className="text-xs font-medium text-forest-deep/80">poin karbon</div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -left-8 bottom-20 px-4 py-3 rounded-2xl float-anim bg-cream shadow-xl">
                        <div className="text-xs font-medium text-gray-500 mb-1">Transaksi terbaru</div>
                        <div className="flex items-center gap-2 font-semibold text-sm text-forest">
                            <IconLeaf />
                            <span>Rumput 2kg — hemat 0.9kg CO₂</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full">
                <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#f5f2e8" />
            </svg>
        </div>
    </section>
);

const StatsSection = () => {
    const stats = [
        { value: 12480, suffix: '+', label: 'Pengguna Aktif' },
        { value: 48720, suffix: ' kg', label: 'CO₂ Dihemat' },
        { value: 9340, suffix: '+', label: 'Produk Tersedia' },
        { value: 3200, suffix: '+', label: 'Voucher Ditukarkan' },
    ];
    return (
        <section className="py-16 bg-cream">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s) => (
                    <div key={s.label} className="text-center">
                        <div className="font-display font-bold mb-2 text-forest" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                            <AnimatedCounter end={s.value} suffix={s.suffix} />
                        </div>
                        <div className="text-sm font-medium text-gray-500">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const CategoriesSection = () => {
    const cats = [
        { name: 'Barang Bekas', sub: 'Pakaian, elektronik, furnitur', carbon: '0,3 – 2 kg CO₂', color: '#2d4a22', img: 'https://images.unsplash.com/photo-1768145488790-185e20abfd08?w=600&h=400&fit=crop' },
        { name: 'Rumput Segar', sub: 'Pakan ternak berkualitas', carbon: '0,45 kg CO₂/kg', color: '#1f4d2e', img: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&h=400&fit=crop' },
        { name: 'Sisa Makanan', sub: 'Untuk kompos & biogas', carbon: '0,6 kg CO₂/kg', color: '#4a3520', img: 'https://images.unsplash.com/photo-1726572330396-0947f571ac19?w=600&h=400&fit=crop' },
    ];
    return (
        <section id="kategori" className="py-20 bg-forest-deep">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <div className="text-xs font-semibold tracking-widest uppercase mb-5 text-sprout">Kategori</div>
                        <h2 className="font-display font-bold text-cream" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                            Apa yang bisa kamu <span className="italic text-sprout-light">jual & beli</span>
                        </h2>
                    </div>
                    <a href={`${BACKEND_URL}/products`} className="text-sm font-medium text-sprout hover:opacity-80">Lihat semua →</a>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {cats.map((cat) => (
                        <div key={cat.name} className="rounded-3xl overflow-hidden group cursor-pointer" style={{ backgroundColor: cat.color }}>
                            <div className="relative h-52 overflow-hidden">
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${cat.color} 15%, transparent 70%)` }} />
                            </div>
                            <div className="p-6">
                                <h3 className="font-display font-bold text-xl mb-2 text-cream">{cat.name}</h3>
                                <p className="text-sm mb-4 text-cream/60">{cat.sub}</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-sprout/15 text-sprout-light">
                                    <IconLeaf />
                                    <span>Hemat {cat.carbon}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection = () => {
    const steps = [
        { num: '01', title: 'Daftarkan Barang', desc: 'Upload foto barang bekas, rumput segar, atau sisa makanan.' },
        { num: '02', title: 'Transaksi Terjadi', desc: 'Pembeli checkout, sistem otomatis mencatat penghematan karbon.' },
        { num: '03', title: 'Dapat Voucher', desc: 'Voucher langsung masuk ke akun Anda.' },
    ];
    return (
        <section id="cara-kerja" className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-xs font-semibold tracking-widest uppercase mb-5 text-sprout">Cara Kerja</div>
                        <h2 className="font-display font-bold mb-6 text-forest" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                            Tiga langkah menuju <span className="italic">ekonomi hijau</span>
                        </h2>
                        <p className="text-gray-600" style={{ lineHeight: 1.75 }}>
                            Eco-Loop menghubungkan penjual dan pembeli dalam ekosistem sirkular yang transparan.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        {steps.map((step, i) => (
                            <div key={step.num} className={`flex gap-5 p-6 rounded-2xl ${i === 1 ? 'bg-forest text-cream' : 'bg-white shadow-lg'}`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${i === 1 ? 'bg-sprout/20 text-sprout' : 'bg-green-50 text-forest'}`}>
                                    <span className="font-bold">{step.num}</span>
                                </div>
                                <div>
                                    <div className={`font-semibold mb-2 ${i === 1 ? 'text-cream' : 'text-forest'}`}>{step.title}</div>
                                    <div className={`text-sm ${i === 1 ? 'text-cream/65' : 'text-gray-500'}`}>{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="relative rounded-3xl px-8 py-16 overflow-hidden bg-forest">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 bg-sprout" />
                <h2 className="font-display font-bold mb-5 text-cream" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                    Bergabung dan mulai <span className="italic text-sprout-light">ubah sampahmu</span> jadi nilai
                </h2>
                <p className="mb-10 text-cream/60 max-w-md mx-auto">
                    Daftar gratis sekarang. Setiap transaksi pertama kamu sudah membantu mengurangi jejak karbon Indonesia.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href={`${BACKEND_URL}/register`} className="px-8 py-4 rounded-full font-semibold bg-sprout text-forest-deep hover:brightness-110">
                        Daftar Gratis Sekarang
                    </a>
                    <a href={`${BACKEND_URL}/products`} className="px-8 py-4 rounded-full font-medium border border-cream/25 text-cream hover:bg-white/5"> 
                        Lihat Katalog
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-14 bg-forest-deep border-t border-sprout/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sprout flex items-center justify-center">
                        <IconLeaf />
                    </div>
                    <span className="font-display font-semibold text-lg text-cream">Eco-Loop</span>
                </div>
                <div className="text-xs text-cream/30">© 2026 Eco-Loop Marketplace · Tim Hanchou Sanchou</div>
            </div>
        </div>
    </footer>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <StatsSection />
            <HowItWorksSection />
            <CategoriesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
