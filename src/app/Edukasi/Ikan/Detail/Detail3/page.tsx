import Footer from "@/app/components/homepage/footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="flex flex-col items-center justify-center space-y-16 pb-16">
        <div
          className="h-[400px] w-[85%] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/koi.png')" }}
        >
          <div className=" h-[400px] w-full bg-gradient-to-r from-[#000000] to-[#d9d9d970] opacity-85">
            <div className="ms-[3%] py-[7%]">
              <h1 className="text-5xl font-bold text-white">Edukasi</h1>
              <p className="w-[56%] text-[27px] text-white mt-2">
                Dapatkan informasi terbaru dan praktis tentang cara merawat
                ikan, burung, dan tanaman hias di sini, dan tingkatkan
                pengalaman Anda dalam menjaga keindahan dan kesehatan koleksi
                Anda.
              </p>
            </div>
          </div>
        </div>
        <div id="detail3saran" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Makanan Yang Cocok Untuk Ikan Hias
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Pelet atau Flakes Makanan komersial yang mudah didapat dan seimbang nutrisi. Cacing Sutera Sumber protein tinggi untuk pertumbuhan ikan. Artemia Makanan hidup yang kaya nutrisi untuk ikan kecil. Sayuran Seperti bayam atau selada, cocok untuk ikan herbivora. Daphnia Pakan hidup yang baik untuk menjaga kesehatan ikan.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Makanan yang cocok untuk ikan hias sangat bergantung pada jenis ikan yang dipelihara, namun secara umum, pakan ikan hias dibagi menjadi dua kategori: makanan kering dan makanan hidup. Makanan kering, seperti pelet dan serpihan (flakes), adalah pilihan paling umum dan praktis. Pelet biasanya mengandung nutrisi lengkap dan mudah disimpan. Pelet tenggelam cocok untuk ikan dasar, sementara pelet mengapung baik untuk ikan yang berenang di permukaan. Serpihan sering kali diberikan kepada ikan kecil atau ikan dengan mulut yang lebih kecil. Penting untuk memilih ukuran pelet atau serpihan yang sesuai dengan ukuran ikan agar mereka dapat memakannya dengan mudah.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Selain makanan kering, makanan hidup atau beku seperti cacing darah, daphnia, atau udang kecil (brine shrimp) adalah sumber protein yang baik dan membantu menstimulasi perilaku alami ikan. Makanan hidup cocok untuk ikan karnivora atau omnivora, sementara untuk ikan herbivora, pakan seperti spirulina atau sayuran rebus, seperti bayam atau selada, bisa diberikan. Variasi pakan sangat penting untuk menjaga kesehatan dan kecerahan warna ikan hias. Memberikan makanan yang sesuai dan bergizi akan mendukung pertumbuhan ikan dan memperkuat daya tahan tubuh mereka terhadap penyakit.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
