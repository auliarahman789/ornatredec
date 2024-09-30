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
        <div id="detail1apa" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Apa Itu Ikan Hias?
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Ikan hias adalah jenis ikan yang dipelihara oleh pecinta akuarium atau penghobi sebagai dekorasi hidup karena keindahan yang dimilikinya, baik dari segi warna, bentuk tubuh, maupun pola unik yang terdapat pada sisik atau siripnya. Biasanya, ikan hias dipelihara di akuarium dalam ruangan, kolam hias di taman, atau bahkan tangki khusus dengan sistem yang dirancang untuk menciptakan ekosistem air yang nyaman bagi mereka.`}
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
              {`Ikan hias adalah jenis ikan yang dipelihara bukan untuk konsumsi, melainkan untuk dinikmati keindahannya. Ikan-ikan ini biasanya memiliki bentuk tubuh, warna, dan pola yang menarik, sehingga sering dijadikan pelengkap dekorasi di akuarium atau kolam. Beberapa spesies ikan hias berasal dari air tawar, seperti ikan guppy, koi, atau cupang.`}
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
              {`Ikan hias membutuhkan perawatan khusus, seperti air yang bersih, suhu yang sesuai, serta pemberian pakan yang teratur. Kualitas air sangat penting untuk menjaga kesehatan ikan, karena ikan hias sangat sensitif terhadap perubahan lingkungan. Akuarium juga perlu dilengkapi dengan sistem filtrasi dan pencahayaan yang baik agar ikan dapat hidup dengan nyaman. Selain itu, pemilik juga harus memahami jenis makanan yang cocok untuk setiap spesies ikan hias agar mereka tumbuh sehat dan tetap berwarna cerah.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
