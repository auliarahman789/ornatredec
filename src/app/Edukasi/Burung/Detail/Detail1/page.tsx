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
        <div id="detail1tujuan" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Tujuan Merawat Burung Hias
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat burung hias menambah keindahan dan kenyamanan di rumah dengan warna bulu yang cerah dan kicauan merdu. Kegiatan ini tidak hanya memberikan kesenangan visual dan auditori, tetapi juga membantu relaksasi, mengurangi stres, serta menciptakan suasana yang lebih tenang. Memelihara burung hias mengajarkan tanggung jawab dan kepedulian, yang berdampak positif pada kesehatan mental dan emosional. Dengan demikian, burung hias tidak hanya memperindah lingkungan, tetapi juga meningkatkan kualitas hidup secara keseluruhan.`}
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
              {`Pertama, tujuan utama merawat burung hias adalah untuk memastikan kondisi fisik dan psikologisnya tetap optimal. Ini meliputi memberikan makanan yang seimbang dan bergizi sesuai dengan jenis burungnya, memperhatikan kebersihan kandang atau sangkar, serta menyediakan lingkungan yang aman dan stimulatif untuk aktivitas sehari-hari mereka. Selain itu, tujuan merawat burung hias juga termasuk untuk membangun ikatan yang baik antara pemilik dan burung, melalui interaksi yang positif dan perawatan yang konsisten, sehingga burung dapat merasa aman dan nyaman di lingkungannya.`}
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
              {`Kedua, merawat burung hias juga bertujuan untuk mempromosikan kehidupan yang panjang dan berkualitas bagi mereka. Ini mencakup pemantauan kesehatan secara teratur, mengidentifikasi tanda-tanda penyakit atau stres secara dini, dan memberikan perawatan medis jika diperlukan. Pemberian perhatian dan kasih sayang juga menjadi bagian integral dari tujuan merawat burung hias, karena interaksi positif ini dapat meningkatkan kebahagiaan dan kesejahteraan mereka secara keseluruhan. Dengan memahami dan memenuhi kebutuhan dasar serta emosional burung hias, pemilik dapat memastikan bahwa burung dapat hidup dengan bahagia dan sehat dalam lingkungan yang dirawat dengan baik.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
