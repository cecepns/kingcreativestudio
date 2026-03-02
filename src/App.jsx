import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Smartphone,
  ShoppingBag,
  Rocket,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import logo from "./assets/logo.png";
import heroImage from "./assets/hero-image.png";
import pricingImage from "./assets/pricing-image.png";

const services = [
  {
    id: "online-store",
    title: "Toko Online",
    description:
      "Toko online profesional dengan katalog produk, pembayaran online, dan manajemen pesanan yang rapi.",
    // priceLabel: "Mulai dari Rp 600.000",
    icon: ShoppingBag,
    tags: ["Catalog", "Payment gateway", "Responsive"],
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description:
      "Aplikasi mobile custom untuk Android & iOS agar bisnis Anda selalu ada di genggaman pelanggan.",
    // priceLabel: "Mulai dari Rp 800.000",
    icon: Smartphone,
    tags: ["Android & iOS", "Push notification", "Custom fitur"],
  },
  {
    id: "custom-website",
    title: "Custom Website",
    description:
      "Website company profile, landing page campaign, hingga sistem internal yang disesuaikan dengan kebutuhan.",
    // priceLabel: "Mulai dari Rp 300.000",
    icon: Code2,
    tags: ["Desain clean", "SEO ready", "Fast loading"],
  },
];

const clientLogoModules = import.meta.glob(
  "./assets/clients/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    as: "url",
  },
);

const clients = Object.entries(clientLogoModules).map(([path, src]) => {
  const fileName = path.split("/").pop() || "";
  const name = fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return { name, src };
});

const highlights = [
  "Fokus pada UMKM Indonesia",
  "Gratis konsultasi dan brainstorming awal",
  "Pendampingan setelah project selesai",
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const duplicatedClients = useMemo(
    () => (clients.length ? [...clients, ...clients] : []),
    [],
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-0">
          <a href="#hero" className="flex items-center">
            <img
              src={logo}
              alt="Kingcreativestudio logo"
              className="h-14 w-auto"
            />
            <div>
              <p className="text-base font-semibold tracking-tight">
                Kingcreativestudio
              </p>
              <p className="text-xs text-slate-500">Website & App untuk UMKM</p>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="hover:text-indigo-500">
              Layanan
            </a>
            <a href="#clients" className="hover:text-indigo-500">
              Klien
            </a>
            <a href="#pricing" className="hover:text-indigo-500">
              Harga
            </a>
            <a href="#contact" className="hover:text-indigo-500">
              Konsultasi
            </a>
          </div>
        </nav>
      </header>

      <main className="pb-20">
        {/* Hero */}
        <section className="section-container pt-10 lg:pt-20" id="hero">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div className="order-2 lg:order-1" data-aos="fade-up">
              <div className="badge mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Partner digital untuk UMKM
              </div>

              <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Bantu bisnis Anda{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                  tampil profesional di dunia digital.
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                Kingcreativestudio merancang website dan aplikasi yang clean,
                cepat, dan mudah dikelola — khusus untuk kebutuhan UMKM yang
                ingin mengembangkan bisnisnya.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  Lihat paket harga
                  <ChevronDown className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>

              {/* <div className="mt-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div
              className="order-1 mt-4 lg:order-2 lg:mt-0"
              data-aos="fade-left"
              data-aos-delay="80"
            >
              <img src={heroImage} alt="Hero Image" className="h-auto w-full" />
            </div>
          </div>
        </section>

        {/* Our Clients */}
        <section className="pt-4" id="clients">
          <div
            className="max-w-6xl px-4 md:px-0 mx-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            data-aos="fade-up"
          >
            <div>
              <p className="badge mb-3">Our Clients</p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Klien yang sudah mempercayakan tampilan digitalnya.
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-600">
                Logo-logo di bawah mewakili berbagai brand dan pelaku UMKM yang
                kami bantu hadir lebih profesional di ranah digital, dari
                beragam industri dan skala bisnis.
              </p>
            </div>
          </div>

          <div
            className="relative mt-6 overflow-hidden border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-medium">Klien Kami</span>
            </div>

            <div className="mt-4 space-y-4">
              {duplicatedClients.length === 0 ? (
                <p className="text-sm text-slate-500">
                  Belum ada file logo di folder{" "}
                  <strong>src/assets/clients</strong>. Tambahkan logo-logo hitam
                  putih Anda di sana (PNG/SVG/JPG), dan section ini akan
                  menampilkan mereka secara otomatis dengan efek marquee.
                </p>
              ) : (
                <div className="relative">
                  <div className="marquee-track">
                    {duplicatedClients.map((client, index) => (
                      <div
                        key={`${client.name}-${index}`}
                        className="group flex h-20 min-w-[180px] items-center justify-center grayscale transition duration-300 hover:grayscale-0 sm:h-24 sm:min-w-[220px]"
                      >
                        <img
                          src={client.src}
                          alt={client.name}
                          className="max-h-14 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Our Price / Services */}
        <section className="section-container" id="pricing">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="flex justify-center">
              <img
                src={pricingImage}
                alt="Pricing Image"
                className="w-64 h-auto md:w-full md:h-[550px] object-cover"
              />
            </div>

            <div data-aos="fade-up" className="space-y-4">
              <p className="badge mb-3">Our Price</p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Paket terjangkau untuk mulai go digital.
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-600">
                Harga dibuat ramah untuk UMKM tanpa mengorbankan kualitas
                tampilan dan kecepatan. Anda bisa mulai dari paket paling
                sederhana dan meng-upgrade fitur sesuai kebutuhan.
              </p>
              <div
                className="glass-panel w-full max-w-xs border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 p-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Mulai dari
                </p>
                <p className="mt-2 text-2xl font-semibold text-emerald-600">
                  Rp 300.000
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Untuk paket custom website paling basic. Anda bisa upgrade
                  fitur kapan saja seiring bisnis berkembang.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const delays = [0, 80, 140];

              return (
                <article
                  key={service.id}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={delays[index] ?? 0}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    {!!service.priceLabel && (
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                        {service.priceLabel}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill border border-slate-200 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/6282214094779"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Konsultasi paket via WhatsApp
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="section-container" id="contact">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div data-aos="fade-right">
              <p className="badge mb-3">Mulai sekarang</p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ceritakan bisnis Anda,{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                  kami bantu rancang solusinya.
                </span>
              </h2>
              <p className="mt-2 max-w-xl text-base text-slate-600">
                Kirimkan kebutuhan Anda (jenis bisnis, target pasar, dan contoh
                referensi website/aplikasi jika ada). Tim kami akan merespon
                dengan proposal singkat dan estimasi anggaran.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-emerald-50 p-1 text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-500">
                      01. Konsultasi singkat
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Ceritakan kebutuhan dan tantangan bisnis Anda.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-emerald-50 p-1 text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-500">
                      02. Rekomendasi solusi
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Kami ajukan konsep, fitur, dan estimasi biaya.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 rounded-full bg-emerald-50 p-1 text-emerald-600">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-500">
                      03. Eksekusi & go live
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Desain, pengembangan, hingga support setelah launching.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="glass-panel relative border-slate-200 bg-white"
              data-aos="fade-left"
            >
              <div className="relative space-y-4">
                <p className="text-sm font-medium text-slate-900">
                  Hubungi kami sekarang
                </p>
                <p className="text-sm text-slate-600">
                  Masukkan nanti nomor WhatsApp resmi bisnis Anda di tombol
                  berikut:
                </p>

                <a
                  href="https://wa.me/6282214094779"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/30 transition hover:brightness-110"
                >
                  Chat via WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="mt-2 space-y-1 text-xs text-slate-500">
                  <p>
                    Sertakan: nama bisnis, jenis produk/jasa, dan link media
                    sosial jika ada.
                  </p>
                  <p>Tim kami akan membalas maksimal dalam 1×24 jam kerja.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Kingcreativestudio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
