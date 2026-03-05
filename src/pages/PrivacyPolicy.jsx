import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
            Kebijakan Privasi
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Terakhir diperbarui: 5 Maret 2026
          </p>
        </header>

        {/* 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Pendahuluan</h2>
          <p className="leading-relaxed text-slate-600">
            <strong>Kingcreativestudio</strong> (selanjutnya disebut
            &ldquo;Kami&rdquo;) menghormati dan melindungi privasi setiap
            pengguna yang mengakses website dan layanan Kami. Kebijakan Privasi
            ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, menyimpan,
            dan melindungi informasi pribadi Anda saat Anda menggunakan website{" "}
            <strong>kingcreativestudio.com</strong> serta layanan terkait.
          </p>
          <p className="leading-relaxed text-slate-600">
            Dengan mengakses atau menggunakan Website dan layanan Kami, Anda
            menyatakan telah membaca, memahami, dan menyetujui praktik yang
            dijelaskan dalam Kebijakan Privasi ini. Apabila Anda tidak
            menyetujui kebijakan ini, Anda dipersilakan untuk tidak melanjutkan
            penggunaan Website.
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            2. Informasi yang Kami Kumpulkan
          </h2>
          <p className="leading-relaxed text-slate-600">
            Kami dapat mengumpulkan informasi berikut saat Anda menggunakan
            Website atau melakukan transaksi:
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-800">
              a. Informasi yang Anda Berikan Secara Langsung
            </h3>
            <ul className="list-inside list-disc space-y-1 text-slate-600">
              <li>Nama lengkap</li>
              <li>Nomor telepon / WhatsApp</li>
              <li>Jenis bisnis dan kebutuhan layanan</li>
              <li>Catatan atau pesan tambahan melalui formulir pemesanan</li>
              <li>
                Informasi lain yang Anda kirimkan melalui komunikasi langsung
                dengan Kami
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-800">
              b. Informasi Pembayaran
            </h3>
            <ul className="list-inside list-disc space-y-1 text-slate-600">
              <li>
                Data transaksi pembayaran yang diproses melalui{" "}
                <strong>Midtrans</strong> (payment gateway)
              </li>
              <li>
                Metode pembayaran yang dipilih (transfer bank, e-wallet, kartu
                kredit/debit, dll.)
              </li>
              <li>Status dan riwayat transaksi</li>
            </ul>
            <p className="leading-relaxed text-slate-600">
              <strong>Penting:</strong> Kami tidak menyimpan informasi kartu
              kredit/debit Anda secara langsung. Seluruh data pembayaran
              sensitif diproses dan disimpan oleh Midtrans sesuai standar
              keamanan <strong>PCI-DSS</strong> (Payment Card Industry Data
              Security Standard).
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-800">
              c. Informasi yang Dikumpulkan Secara Otomatis
            </h3>
            <ul className="list-inside list-disc space-y-1 text-slate-600">
              <li>Alamat IP</li>
              <li>Jenis dan versi browser</li>
              <li>Sistem operasi perangkat</li>
              <li>Halaman yang dikunjungi dan durasi kunjungan</li>
              <li>Sumber rujukan (referral)</li>
              <li>Data cookies dan teknologi pelacakan serupa</li>
            </ul>
          </div>
        </section>

        {/* 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            3. Penggunaan Informasi
          </h2>
          <p className="leading-relaxed text-slate-600">
            Informasi yang Kami kumpulkan digunakan untuk tujuan berikut:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              Memproses dan mengelola pesanan serta pembayaran Anda
            </li>
            <li>
              Menghubungi Anda terkait layanan yang dipesan, termasuk
              konfirmasi, pembaruan progres, dan penyerahan hasil
            </li>
            <li>
              Memberikan dukungan pelanggan dan merespons pertanyaan atau
              keluhan
            </li>
            <li>
              Meningkatkan kualitas Website, layanan, dan pengalaman pengguna
            </li>
            <li>
              Mengirimkan informasi promosi atau penawaran khusus (hanya jika
              Anda memberikan persetujuan)
            </li>
            <li>
              Memenuhi kewajiban hukum dan regulasi yang berlaku
            </li>
            <li>
              Mencegah penipuan dan melindungi keamanan sistem
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            4. Pembagian Informasi kepada Pihak Ketiga
          </h2>
          <p className="leading-relaxed text-slate-600">
            Kami tidak menjual, memperdagangkan, atau menyewakan informasi
            pribadi Anda kepada pihak ketiga. Namun, Kami dapat membagikan
            informasi Anda dalam situasi berikut:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              <strong>Payment gateway (Midtrans):</strong> untuk memproses
              transaksi pembayaran secara aman. Midtrans memiliki kebijakan
              privasi tersendiri yang mengatur pengelolaan data pembayaran Anda.
            </li>
            <li>
              <strong>Penyedia layanan pihak ketiga:</strong> yang membantu Kami
              dalam operasional bisnis (hosting, analitik, komunikasi), dengan
              kewajiban menjaga kerahasiaan data Anda.
            </li>
            <li>
              <strong>Kewajiban hukum:</strong> apabila diwajibkan oleh hukum,
              perintah pengadilan, atau permintaan resmi dari lembaga pemerintah
              yang berwenang.
            </li>
            <li>
              <strong>Perlindungan hak:</strong> untuk melindungi hak,
              properti, atau keselamatan Kingcreativestudio, pengguna, atau
              masyarakat umum.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Keamanan Data</h2>
          <p className="leading-relaxed text-slate-600">
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang
            wajar untuk melindungi informasi pribadi Anda dari akses tidak sah,
            penggunaan yang tidak semestinya, pengungkapan, pengubahan, atau
            perusakan. Langkah-langkah tersebut meliputi:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>Enkripsi data saat transmisi (SSL/TLS)</li>
            <li>
              Pemrosesan pembayaran melalui Midtrans yang memenuhi standar
              PCI-DSS
            </li>
            <li>Pembatasan akses internal terhadap data pribadi</li>
            <li>Pemantauan keamanan secara berkala</li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Meskipun demikian, tidak ada metode transmisi data melalui internet
            atau penyimpanan elektronik yang 100% aman. Kami tidak dapat
            menjamin keamanan absolut atas informasi yang Anda kirimkan kepada
            Kami.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Cookies</h2>
          <p className="leading-relaxed text-slate-600">
            Website Kami dapat menggunakan <em>cookies</em> dan teknologi serupa
            untuk meningkatkan pengalaman pengguna. Cookies adalah file kecil
            yang disimpan di perangkat Anda saat mengunjungi Website.
          </p>
          <p className="leading-relaxed text-slate-600">
            Cookies yang Kami gunakan dapat meliputi:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              <strong>Cookies esensial:</strong> diperlukan agar Website dapat
              berfungsi dengan baik
            </li>
            <li>
              <strong>Cookies analitik:</strong> membantu Kami memahami
              bagaimana pengunjung berinteraksi dengan Website untuk peningkatan
              layanan
            </li>
            <li>
              <strong>Cookies preferensi:</strong> menyimpan pengaturan dan
              preferensi pengguna
            </li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Anda dapat mengatur atau menonaktifkan cookies melalui pengaturan
            browser Anda. Namun, menonaktifkan cookies tertentu dapat
            memengaruhi fungsionalitas Website.
          </p>
        </section>

        {/* 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Hak Pengguna</h2>
          <p className="leading-relaxed text-slate-600">
            Sesuai dengan peraturan perlindungan data yang berlaku di Indonesia,
            Anda memiliki hak-hak berikut terkait informasi pribadi Anda:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              <strong>Hak akses:</strong> meminta salinan data pribadi yang
              Kami simpan tentang Anda
            </li>
            <li>
              <strong>Hak koreksi:</strong> meminta perbaikan data pribadi yang
              tidak akurat atau tidak lengkap
            </li>
            <li>
              <strong>Hak penghapusan:</strong> meminta penghapusan data
              pribadi Anda, dengan mempertimbangkan kewajiban hukum atau
              kontraktual yang masih berlaku
            </li>
            <li>
              <strong>Hak pembatasan:</strong> meminta pembatasan pemrosesan
              data pribadi Anda dalam kondisi tertentu
            </li>
            <li>
              <strong>Hak keberatan:</strong> mengajukan keberatan atas
              pemrosesan data pribadi Anda untuk tujuan tertentu, termasuk
              pemasaran langsung
            </li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Untuk menggunakan hak-hak tersebut, silakan hubungi Kami melalui
            kontak yang tercantum di bagian akhir kebijakan ini. Kami akan
            merespons permintaan Anda dalam waktu yang wajar sesuai peraturan
            yang berlaku.
          </p>
        </section>

        {/* 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8. Penyimpanan Data</h2>
          <p className="leading-relaxed text-slate-600">
            Kami menyimpan informasi pribadi Anda selama diperlukan untuk
            memenuhi tujuan yang dijelaskan dalam Kebijakan Privasi ini, atau
            selama diwajibkan oleh hukum. Kriteria penyimpanan meliputi:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              Data transaksi disimpan sesuai kewajiban perpajakan dan akuntansi
              yang berlaku
            </li>
            <li>
              Data komunikasi proyek disimpan selama masa layanan dan periode
              garansi berlangsung
            </li>
            <li>
              Data yang tidak lagi diperlukan akan dihapus atau dianonimkan
              secara aman
            </li>
          </ul>
        </section>

        {/* 9 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            9. Layanan Pembayaran Pihak Ketiga (Midtrans)
          </h2>
          <p className="leading-relaxed text-slate-600">
            Kami menggunakan <strong>Midtrans</strong> sebagai penyedia layanan
            payment gateway untuk memproses pembayaran. Saat Anda melakukan
            transaksi, data pembayaran Anda akan diproses langsung oleh Midtrans
            sesuai dengan kebijakan privasi dan standar keamanan mereka.
          </p>
          <p className="leading-relaxed text-slate-600">
            Hal-hal penting terkait Midtrans:
          </p>
          <ul className="list-inside list-disc space-y-1 text-slate-600">
            <li>
              Midtrans telah tersertifikasi <strong>PCI-DSS Level 1</strong>,
              standar keamanan tertinggi dalam industri pembayaran
            </li>
            <li>
              Data kartu kredit/debit tidak pernah melewati atau disimpan di
              server Kami
            </li>
            <li>
              Transaksi dienkripsi menggunakan teknologi SSL/TLS
            </li>
            <li>
              Midtrans memiliki kebijakan privasi tersendiri yang mengatur
              bagaimana mereka mengelola data pembayaran Anda
            </li>
          </ul>
          <p className="leading-relaxed text-slate-600">
            Kami menyarankan Anda untuk membaca kebijakan privasi Midtrans di{" "}
            <a
              href="https://midtrans.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              midtrans.com/privacy-policy
            </a>{" "}
            untuk memahami bagaimana data pembayaran Anda dikelola.
          </p>
        </section>

        {/* 10 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            10. Perubahan Kebijakan Privasi
          </h2>
          <p className="leading-relaxed text-slate-600">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu
            untuk mencerminkan perubahan dalam praktik pengelolaan data,
            persyaratan hukum, atau layanan Kami. Perubahan akan dipublikasikan
            di halaman ini dengan memperbarui tanggal &ldquo;Terakhir
            diperbarui&rdquo; di bagian atas.
          </p>
          <p className="leading-relaxed text-slate-600">
            Kami menyarankan Anda untuk meninjau halaman ini secara berkala.
            Penggunaan Website setelah perubahan dipublikasikan berarti Anda
            menerima Kebijakan Privasi yang telah diperbarui.
          </p>
        </section>

        {/* 11 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">11. Kontak</h2>
          <p className="leading-relaxed text-slate-600">
            Apabila Anda memiliki pertanyaan, permintaan, atau keluhan terkait
            Kebijakan Privasi ini atau pengelolaan data pribadi Anda, silakan
            hubungi Kami melalui:
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
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                kingcreativestudio.com
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
