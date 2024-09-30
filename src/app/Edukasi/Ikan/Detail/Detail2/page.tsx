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
        <div id="detail2cara" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Cara Merawat Merawat Ikan Hias
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat ikan hias bukan hanya soal memberi makan setiap hari, tetapi juga menciptakan lingkungan yang sehat dan nyaman bagi mereka. Di T-trana, kami menyediakan panduan praktis untuk membantu Anda merawat ikan hias agar tetap sehat dan memperindah akuarium Anda. Berikut adalah beberapa cara efektif untuk merawat ikan hias dengan baik`}
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
              {`Merawat ikan hias membutuhkan perhatian khusus, terutama dalam menjaga kualitas air akuarium. Pastikan air di akuarium selalu bersih dan bebas dari kotoran, karena kualitas air yang buruk dapat menyebabkan stres dan penyakit pada ikan. Gunakan sistem filtrasi yang baik untuk menyaring kotoran dan menjaga kadar oksigen tetap stabil. Selain itu, rutin mengganti sebagian air akuarium setiap minggu (sekitar 20-30%) agar lingkungan air tetap sehat tanpa mengganggu keseimbangan ekosistem di dalamnya. Suhu air juga harus diperhatikan sesuai dengan jenis ikan yang dipelihara, karena ikan hias air tawar dan air laut memiliki kebutuhan suhu yang berbeda.`}
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
              {`Selain menjaga kualitas air, pemberian pakan juga penting dalam perawatan ikan hias. Berikan makanan yang sesuai dengan jenis ikan, seperti pelet, cacing beku, atau makanan hidup. Jangan memberi makan secara berlebihan, karena sisa makanan yang tidak dimakan dapat mencemari air dan memicu pertumbuhan bakteri. Cukup beri makan 1-2 kali sehari dengan porsi yang bisa habis dalam waktu beberapa menit. Jika akuarium memiliki berbagai spesies ikan, pastikan semua ikan mendapatkan cukup makanan, karena beberapa jenis ikan bisa lebih agresif dalam berebut pakan. Dengan perawatan yang tepat, ikan hias akan tumbuh sehat dan mempertahankan warna yang indah.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
