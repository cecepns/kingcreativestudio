import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-0">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke beranda
        </Link>
      </div>

      <article className="space-y-10">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Syarat &amp; Ketentuan
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Terakhir diperbarui: 5 Maret 2026
          </p>
        </header>

        {/* 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Syarat Penggunaan</h2>
          <p className="leading-relaxed text-slate-600">
            Dengan mengakses dan menggunakan website{" "}
            <strong>Kingcreativestudio</strong> (selanjutnya disebut
            &ldquo;Kami&rdquo;, &ldquo;Website&rdquo;, atau
            &ldquo;Layanan&rdquo;), Anda menyatakan bahwa Anda telah membaca,
            memahami, dan menyetujui seluruh syarat &amp; ketentuan yang
            tercantum di halaman ini. Apabila Anda tidak menyetujui salah satu
            atau seluruh ketentuan, Anda dipersilakan untuk tidak melanjutkan
            penggunaan Website.
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Gambaran Umum</h2>
          <p className="leading-relaxed text-slate-600">
            Kingcreativestudio menyediakan jasa pembuatan website, aplikasi
            mobile, dan produk digital lainnya yang ditujukan terutama bagi
            pelaku UMKM. Syarat &amp; Ketentuan ini berlaku untuk seluruh
            halaman, fitur, dan layanan yang tersedia di Website, termasuk namun
            tidak terbatas pada halaman layanan, harga, formulir pemesanan, serta
            seluruh konten yang ditampilkan.
          </p>
          <p className="leading-relaxed text-slate-600">
            Dengan tetap menggunakan Website, Anda dianggap menyetujui semua
            aturan, kebijakan, pedoman, dan ketentuan tambahan yang berlaku.
          </p>
        </section>

        {/* 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Perubahan Syarat</h2>
          <p className="leading-relaxed text-slate-600">
            Kami berhak untuk mengubah, memperbarui, atau merevisi Syarat &amp;
            Ketentuan ini kapan saja tanpa pemberitahuan terlebih dahulu.
            Perubahan dapat meliputi:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>Perubahan harga layanan atau paket</li>
            <li>Penambahan, pengurangan, atau modifikasi fitur layanan</li>
            <li>Perubahan kebijakan transaksi atau pembayaran</li>
            <li>Pembaruan aturan penggunaan Website</li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Anda disarankan untuk mengunjungi halaman ini secara berkala.
            Penggunaan Website setelah perubahan dipublikasikan berarti Anda
            menerima perubahan tersebut. Jika terjadi kesalahan harga atau
            informasi di Website, Kami berhak menolak atau membatalkan pesanan
            yang terkait.
          </p>
        </section>

        {/* 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Penggunaan Website</h2>
          <p className="leading-relaxed text-slate-600">
            Anda setuju untuk menggunakan Website ini hanya untuk tujuan yang
            sah, sesuai dengan hukum yang berlaku di Republik Indonesia. Anda
            dilarang untuk:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              Menggunakan Website untuk aktivitas ilegal atau melanggar hukum
            </li>
            <li>
              Mencoba merusak, mengganggu, atau mengakses sistem Website secara
              tidak sah
            </li>
            <li>
              Menyebarkan virus, malware, atau kode berbahaya lainnya melalui
              Website
            </li>
            <li>Melakukan penipuan, spam, atau penyalahgunaan layanan</li>
            <li>
              Mengumpulkan data pengguna lain tanpa persetujuan yang sah
            </li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Pelanggaran terhadap ketentuan ini dapat mengakibatkan pembatasan
            akses, pemblokiran akun, dan/atau tindakan hukum sesuai peraturan
            yang berlaku.
          </p>
        </section>

        {/* 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            5. Hak Kekayaan Intelektual
          </h2>
          <p className="leading-relaxed text-slate-600">
            Seluruh konten yang terdapat di Website ini — termasuk namun tidak
            terbatas pada logo, desain, teks, gambar, ikon, ilustrasi, kode
            sumber, dan tata letak — merupakan milik Kingcreativestudio atau
            pemegang lisensi resmi yang terkait. Konten tersebut dilindungi oleh
            hukum hak cipta dan hak kekayaan intelektual yang berlaku di
            Indonesia.
          </p>
          <p className="leading-relaxed text-slate-600">
            Anda tidak diperkenankan untuk menyalin, mereproduksi,
            mendistribusikan, memodifikasi, atau menjual kembali konten Website
            tanpa izin tertulis dari Kami.
          </p>
          <p className="leading-relaxed text-slate-600">
            Untuk produk digital (website, aplikasi, dan/atau software) yang
            dibuat untuk klien, hak kepemilikan dan lisensi penggunaan akan
            diatur secara terpisah dalam perjanjian kerja sama masing-masing
            proyek.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            6. Informasi Produk &amp; Harga
          </h2>
          <p className="leading-relaxed text-slate-600">
            Kami berupaya untuk menampilkan informasi produk dan harga secara
            akurat di Website. Namun, kemungkinan kesalahan teknis atau
            pengetikan tetap dapat terjadi. Informasi yang ditampilkan meliputi:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>Harga paket layanan</li>
            <li>Spesifikasi dan fitur layanan</li>
            <li>Estimasi waktu pengerjaan</li>
            <li>Ketersediaan layanan</li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Apabila terjadi kesalahan informasi — seperti harga yang tidak
            sesuai, deskripsi yang tidak akurat, atau ketersediaan yang berubah —
            Kami berhak untuk memperbaiki informasi tersebut dan/atau
            membatalkan pesanan terkait. Harga final akan dikonfirmasikan melalui
            komunikasi langsung sebelum proses pembayaran.
          </p>
        </section>

        {/* 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            7. Pembayaran &amp; Transaksi
          </h2>
          <p className="leading-relaxed text-slate-600">
            Pembayaran untuk layanan Kingcreativestudio diproses melalui{" "}
            <strong>Midtrans</strong> sebagai payment gateway resmi. Midtrans
            menyediakan berbagai metode pembayaran termasuk transfer bank,
            e-wallet, kartu kredit/debit, dan metode lainnya sesuai
            ketersediaan.
          </p>
          <p className="leading-relaxed text-slate-600">
            Dengan melakukan pembayaran, Anda menyetujui bahwa:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              Data pembayaran Anda diproses secara aman oleh Midtrans sesuai
              standar keamanan PCI-DSS
            </li>
            <li>
              Kami tidak menyimpan informasi kartu kredit/debit Anda secara
              langsung
            </li>
            <li>
              Konfirmasi transaksi akan dikirimkan setelah pembayaran berhasil
              diverifikasi
            </li>
            <li>
              Proses pengerjaan dimulai setelah pembayaran diterima dan
              dikonfirmasi
            </li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Kingcreativestudio bertanggung jawab atas penyediaan layanan yang
            telah disepakati, pelayanan pelanggan, dan proses pengembalian dana
            (refund) sesuai dengan kebijakan yang berlaku. Kebijakan refund
            diatur sebagai berikut:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              Permintaan refund dapat diajukan sebelum proses pengerjaan dimulai
            </li>
            <li>
              Refund sebagian dapat diberikan apabila pengerjaan telah berjalan
              sebagian, dengan perhitungan proporsional
            </li>
            <li>
              Refund tidak berlaku untuk layanan yang telah diselesaikan dan
              diserahterimakan
            </li>
            <li>
              Proses refund memakan waktu 7–14 hari kerja tergantung metode
              pembayaran
            </li>
          </ul>
        </section>

        {/* 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Konten Pengguna</h2>
          <p className="leading-relaxed text-slate-600">
            Apabila Website menyediakan fasilitas bagi pengguna untuk
            mengirimkan konten seperti ulasan, komentar, testimoni, atau materi
            lainnya, maka Anda bertanggung jawab penuh atas konten yang Anda
            kirimkan. Konten yang dilarang antara lain:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>Konten yang mengandung unsur pornografi atau asusila</li>
            <li>Ujaran kebencian, SARA, atau diskriminasi</li>
            <li>Konten yang bersifat penipuan atau menyesatkan</li>
            <li>
              Konten yang melanggar hak cipta atau hak kekayaan intelektual pihak
              lain
            </li>
            <li>Konten yang melanggar hukum yang berlaku di Indonesia</li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Kami berhak untuk meninjau, mengedit, atau menghapus konten pengguna
            yang melanggar ketentuan ini, serta mengambil tindakan yang diperlukan
            termasuk pemblokiran akun.
          </p>
        </section>

        {/* 9 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">9. Batasan Tanggung Jawab</h2>
          <p className="leading-relaxed text-slate-600">
            Website dan layanan Kingcreativestudio disediakan dalam kondisi
            &ldquo;sebagaimana adanya&rdquo; (<em>as is</em>) tanpa jaminan
            dalam bentuk apapun, baik tersurat maupun tersirat.
            Kingcreativestudio tidak bertanggung jawab atas:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              Kerugian langsung atau tidak langsung yang timbul dari penggunaan
              Website
            </li>
            <li>
              Kesalahan, ketidakakuratan, atau ketidaklengkapan informasi di
              Website
            </li>
            <li>
              Gangguan layanan, termasuk downtime server atau masalah teknis
              lainnya
            </li>
            <li>Kerusakan perangkat atau kehilangan data pengguna</li>
            <li>
              Tindakan pihak ketiga yang terkait dengan penggunaan Website
            </li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Kami tidak menjamin bahwa Website akan selalu tersedia, bebas dari
            kesalahan, atau bebas dari virus dan komponen berbahaya lainnya.
          </p>
        </section>

        {/* 10 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">10. Tautan Pihak Ketiga</h2>
          <p className="leading-relaxed text-slate-600">
            Website ini dapat mengandung tautan (link) ke website atau layanan
            pihak ketiga. Tautan tersebut disediakan untuk kenyamanan Anda dan
            bukan merupakan bentuk dukungan atau persetujuan dari Kami terhadap
            konten, produk, atau layanan pihak ketiga tersebut.
          </p>
          <p className="leading-relaxed text-slate-600">
            Kingcreativestudio tidak bertanggung jawab atas isi, kebijakan
            privasi, keamanan, atau praktik dari website pihak ketiga. Anda
            mengakses tautan pihak ketiga sepenuhnya atas risiko Anda sendiri.
          </p>
        </section>

        {/* 11 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">11. Hukum yang Berlaku</h2>
          <p className="leading-relaxed text-slate-600">
            Syarat &amp; Ketentuan ini diatur dan ditafsirkan berdasarkan hukum
            yang berlaku di Republik Indonesia. Segala sengketa yang timbul
            sehubungan dengan penggunaan Website atau layanan Kingcreativestudio
            akan diselesaikan terlebih dahulu melalui musyawarah untuk mufakat.
          </p>
          <p className="leading-relaxed text-slate-600">
            Apabila musyawarah tidak mencapai kesepakatan, maka para pihak
            sepakat untuk menyelesaikan sengketa melalui jalur hukum yang
            berlaku di wilayah yurisdiksi pengadilan Indonesia.
          </p>
        </section>

        {/* 12 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">12. Kontak</h2>
          <p className="leading-relaxed text-slate-600">
            Apabila Anda memiliki pertanyaan, keluhan, atau memerlukan
            klarifikasi terkait Syarat &amp; Ketentuan ini, Anda dapat
            menghubungi Kami melalui:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/6282214094779"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                0822-1409-4779
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:cecepns29@gmail.com"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                cecepns29@gmail.com
              </a>
            </li>
            <li>
              Website:{" "}
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-700">
                kingcreativestudio.com
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
