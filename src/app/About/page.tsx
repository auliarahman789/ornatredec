"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "@/components/homepage/footer";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1100, // durasi animasi dalam milidetik
      once: true, // animasi hanya muncul sekali ketika di-scroll
    });
  }, []);

  return (
    <div className="bg-[#E4FFF2] w-full min-h-screen">
      <div>
        <h1
          data-aos="fade-up"
          className="text-center py-8 text-[40px] font-bold text-[#3F9272]"
        >
          Tentang kami
        </h1>
        <div className="bg-[#51CB9F] px-28 h-[300px]">
          <h1
            data-aos="fade-up"
            className="text-center font-bold text-[25px] text-white py-6"
          >
            Informasi Website
          </h1>
          <p
            data-aos="fade-up"
            className="text-[18px] text-white animate-fade-in delay-500"
          >
            Selamat Datang di T-Trana Temukan keindahan alam di rumah Anda
            dengan koleksi eksklusif tanaman, ikan, dan burung hias kami. Di
            T-Trana, kami menghadirkan aneka flora dan fauna yang tidak hanya
            mempercantik ruangan, tetapi juga menghadirkan ketenangan dan
            keseimbangan. 🌿 Tanaman Hias: Koleksi tanaman terbaik untuk
            mempercantik sudut rumah Anda, mulai dari tanaman indoor yang mudah
            dirawat hingga tanaman langka yang eksotis. 🐟 Ikan Hias: Hiasi
            akuarium Anda dengan berbagai pilihan ikan yang memukau. Kami
            menawarkan spesies ikan hias berwarna-warni yang sehat dan siap
            memperindah suasana. 🐦 Burung Hias: Nikmati kicauan indah dan
            warna-warna cerah burung hias pilihan kami. Dari burung paruh
            bengkok hingga burung kecil eksotis, semua tersedia di T-Trana.
          </p>
        </div>

        <div className="grid grid-cols-3 ms-20 space-y-10 pb-10">
          <div className="col-span-2 my-10">
            <h1
              data-aos="fade-up"
              className="text-[#3F9272] font-bold text-[33px]"
            >
              Edukasi
            </h1>
            <p data-aos="fade-up" className="pe-8 text-justify text-[#54A082]">
              T-Trana menawarkan produk berkualitas, tetapi juga berfokus pada
              edukasi bagi para pecinta ikan hias, tanaman hias, dan burung
              hias. Melalui berbagai program dan sumber daya yang tersedia,
              T-Trana berupaya membantu Anda merawat koleksi hobi dengan lebih
              baik dan mendalam.
              <br />
              Panduan Perawatan: T-Trana menyediakan panduan dasar yang
              komprehensif mengenai cara merawat ikan hias, tanaman hias, dan
              burung hias. Panduan ini mencakup berbagai aspek penting seperti
              memilih habitat yang sesuai, menjaga kebersihan, serta memberikan
              nutrisi yang tepat untuk memastikan kesehatan dan kesejahteraan
              mereka. <br />
              Sesi Tanya Jawab: Selain panduan perawatan, T-Trana juga
              menyediakan sesi tanya jawab interaktif yang memungkinkan Anda
              berkomunikasi langsung dengan para ahli dan anggota komunitas
              berpengalaman. Dalam sesi ini, Anda bisa mengajukan berbagai
              pertanyaan terkait perawatan, pemilihan produk, atau solusi untuk
              masalah yang dihadapi dalam memelihara ikan, tanaman, atau burung
              hias. <br />
              Dengan edukasi yang menyeluruh, T-Trana berkomitmen untuk
              menyediakan informasi dan sumber daya yang bermanfaat, membantu
              Anda memperdalam pengetahuan dan keterampilan dalam merawat
              koleksi hobi Anda.
            </p>
          </div>
          <div>
            <Image
              data-aos="zoom-in"
              src="/img/about1.png"
              alt={""}
              width={300}
              height={400}
            />
          </div>
          <div>
            <Image
              data-aos="zoom-in"
              src="/img/about2.png"
              alt={""}
              width={300}
              height={400}
            />
          </div>
          <div className="col-span-2 -translate-x-12">
            <h1
              data-aos="fade-up"
              className="text-[#3F9272] font-bold text-[33px]"
            >
              Produk
            </h1>
            <p data-aos="fade-up" className="pe-11 text-justify text-[#54A082]">
              T-Trana menyediakan berbagai kebutuhan untuk pecinta ikan hias,
              tanaman hias, dan burung hias, dengan produk berkualitas yang
              membantu merawat dan mempercantik koleksi Anda. <br />
              Ikan Hias: T-Trana menawarkan berbagai jenis ikan hias yang
              menarik, lengkap dengan perlengkapan akuarium seperti filter
              berkualitas, pompa, dan dekorasi yang estetis. Selain itu,
              tersedia pakan ikan yang diformulasikan khusus untuk menjaga
              kesehatan dan keindahan ikan peliharaan Anda. <br />
              Tanaman Hias: Untuk tanaman hias, T-Trana menyediakan koleksi
              tanaman indoor dan outdoor yang beragam, pupuk khusus, media tanam
              berkualitas, serta peralatan berkebun yang memudahkan perawatan
              tanaman kesayangan Anda. <br />
              Burung Hias: T-Trana menghadirkan berbagai jenis burung hias
              dengan aksesoris pendukung seperti tempat makan, serta pakan yang
              bergizi dan disesuaikan dengan kebutuhan spesies burung. <br />
              Dengan produk yang lengkap dan berkualitas, T-Trana menjadi
              pilihan terbaik untuk merawat dan memperindah koleksi ikan,
              tanaman, dan burung hias Anda dengan mudah dan nyaman. <br />
            </p>
          </div>
          <div className="col-span-2">
            <h1
              data-aos="fade-up"
              className="text-[#3F9272] font-bold text-[33px]"
            >
              Forum
            </h1>
            <p data-aos="fade-up" className="text-justify pe-8 text-[#54A082]">
              Forum T-trana adalah ruang diskusi khusus untuk para pecinta
              tanaman, ikan, dan burung hias. Di sini, Anda dapat terhubung
              dengan komunitas yang memiliki minat yang sama, berbagi
              pengalaman, serta mendapatkan tips dan saran untuk merawat koleksi
              Anda.
              <br /> Beberapa fitur unggulan dari forum ini meliputi: Diskusi
              Terbuka: Buat dan ikuti berbagai topik menarik seputar tanaman,
              ikan, dan burung hias. Dari cara merawat hingga rekomendasi
              spesies terbaik, semua bisa dibahas di sini.
              <br />
              Tips & Trik: Dapatkan informasi dan saran dari anggota forum yang
              berpengalaman, serta bagikan tips Anda untuk membantu sesama
              anggota.
              <br />
              Tanya Jawab: Punya masalah dengan tanaman yang layu, ikan yang
              stres, atau burung yang sedang sakit? Ajukan pertanyaan di forum,
              dan dapatkan jawaban dari komunitas atau ahli yang siap membantu.
              <br />
              Galeri Foto: Bagikan foto koleksi tanaman, ikan, atau burung hias
              Anda, serta lihat koleksi anggota lain untuk inspirasi dan ide.
              Forum T-Trana diciptakan untuk menjadi wadah bertukar informasi
              dan memperdalam pengetahuan tentang flora dan fauna hias yang Anda
              cintai. Temukan solusi, inspirasi, dan jalin persahabatan baru di
              komunitas yang penuh semangat ini!
            </p>
          </div>
          <div>
            <Image
              data-aos="zoom-in"
              src="/img/about2.png"
              alt={""}
              width={300}
              height={400}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Page;
