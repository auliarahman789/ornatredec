import Footer from "@/app/components/homepage/footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="flex flex-col items-center justify-center space-y-16 pb-16">
        <div
          className="h-[400px] w-[85%] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/judul.png')" }}
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
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Cara Merawat Tanaman Hias
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat tanaman hias melibatkan beberapa langkah kunci untuk pertumbuhannya yang optimal. Pastikan tanaman mendapatkan cahaya yang sesuai dan penyiraman yang tepat, menjaga tanah tetap lembab namun tidak basah. Berikan pupuk secara berkala dan pastikan drainase yang baik. Selalu periksa tanaman untuk hama atau penyakit, dan lakukan pemangkasan untuk menghilangkan bagian yang mati. Dengan perawatan yang konsisten, tanaman hias akan tumbuh sehat dan indah.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat tanaman hias membutuhkan perhatian khusus agar tanaman tetap tumbuh sehat dan indah. Hal pertama yang harus diperhatikan adalah kebutuhan air dan cahaya tanaman. Setiap tanaman memiliki kebutuhan air yang berbeda-beda, ada yang membutuhkan penyiraman rutin, sementara yang lain cukup sekali-sekali. Selain itu, pencahayaan sangat penting untuk fotosintesis. Beberapa tanaman hias membutuhkan sinar matahari langsung, sementara yang lain lebih cocok di tempat yang teduh. Menempatkan tanaman di lokasi yang sesuai dengan kebutuhan cahaya akan membantu pertumbuhannya secara optimal.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Selain air dan cahaya, pemupukan dan pemangkasan juga penting dalam merawat tanaman hias. Pupuk memberi nutrisi yang dibutuhkan tanaman untuk tumbuh dengan baik, sementara pemangkasan membantu menjaga bentuk dan kesehatan tanaman. Bersihkan daun tanaman dari debu secara berkala agar dapat menyerap cahaya lebih baik. Jangan lupa untuk memantau tanda-tanda adanya hama atau penyakit yang dapat merusak tanaman. Dengan memberikan perawatan yang sesuai, tanaman hias akan tumbuh subur dan mempercantik ruangan Anda.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
