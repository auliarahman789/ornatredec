import Footer from "@/app/components/homepage/footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="flex flex-col items-center justify-center space-y-16 pb-16">
        <div
          className="h-[400px] w-[85%] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/burung1.png')" }}
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
        <div id="detail3lingkungan" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Lingkungan Yang Baik Untuk Burung Hias
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Untuk merawat burung dengan baik, diperlukan lingkungan yang nyaman, bersih, dan aman. Kandang yang luas dan berventilasi baik adalah hal utama, memungkinkan burung bergerak bebas dan mendapatkan sirkulasi udara yang cukup. Tempatkan kandang di area yang terhindar dari angin kencang, panas matahari berlebih, dan kebisingan yang dapat membuat burung stres. Selain itu, lingkungan harus menyediakan akses air bersih dan pakan yang teratur, serta mainan atau ranting untuk memenuhi kebutuhan bermain dan eksplorasi burung.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Lingkungan yang baik untuk burung hias harus dirancang sedemikian rupa agar memenuhi kebutuhan fisik dan psikologis mereka. Pertama, penting untuk menyediakan kandang atau sangkar yang cukup luas, sehingga burung dapat bergerak dengan leluasa, terbang, dan melakukan aktivitas alaminya seperti memanjat atau bermain. Ukuran sangkar harus disesuaikan dengan ukuran burung, dan materialnya harus aman tanpa bahan-bahan beracun. Selain itu, pastikan sangkar memiliki ventilasi yang baik, namun terlindungi dari angin kencang atau perubahan suhu ekstrem yang bisa membahayakan kesehatan burung.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Selain aspek fisik, lingkungan burung hias juga harus menyediakan stimulasi mental yang cukup. Tambahkan mainan, ranting, atau tempat bertengger di dalam kandang untuk menjaga burung tetap aktif dan tidak bosan. Lokasi kandang sebaiknya berada di tempat yang tenang, jauh dari kebisingan atau gangguan, namun tetap memungkinkan burung melihat aktivitas manusia untuk interaksi sosial. Paparan sinar matahari yang cukup juga penting, namun burung harus tetap dilindungi dari panas berlebihan. Dengan lingkungan yang bersih, aman, dan stimulatif, burung hias dapat hidup lebih sehat dan merasa nyaman.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
