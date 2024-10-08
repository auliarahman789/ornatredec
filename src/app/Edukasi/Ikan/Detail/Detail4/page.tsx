import React from "react";
import Image from "next/image";
import Footer from "@/app/components/homepage/footer";

function page() {
  return (
    <div>
      <div className="pt-1" id="tumbuhan">
        <div
          className="relative mt-[40px] mx-[100px] w-[84%] h-[415px] bg-cover"
          style={{ backgroundImage: "url('/img/judul.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#d9d9d970] ps-8 pt-[10%]">
            <h1 className="text-5xl font-bold text-white">Alasan</h1>
            <p className="w-[56%] text-[27px] text-white mt-2">
              Burung bisa sakit karena berbagai alasan, termasuk faktor
              lingkungan, pola makan yang tidak seimbang, dan kurangnya
              perawatan.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between ml-[8%] mr-[8%]">
        <div className="mt-[5%] -translate-x-2">
          <Image
            src="/img/burng sakit1.jpg"
            className="w-full h-auto rounded-lg"
            alt={"daun"}
            width={390}
            height={434}
          />
        </div>

        <div className="ml-4 -translate-x-2 mt-[5%] text-justify">
          <h1 className="text-[#3F9272] font-bold text-4xl">
            Berikut Alasan Kenapa Burung Anda sakit atau Mati
          </h1>
          <p className="text-[#54A082] text-[21px] mt-4">
            Burung bisa sakit karena berbagai alasan, termasuk faktor
            lingkungan, pola makan yang tidak seimbang, dan kurangnya perawatan.
            Kondisi lingkungan yang tidak bersih, seperti kandang yang kotor
            atau suhu yang tidak sesuai, dapat menyebabkan stres dan penyakit.
            Selain itu, jika burung tidak mendapatkan pakan yang bergizi dan
            bervariasi, mereka akan kekurangan nutrisi penting yang dibutuhkan
            untuk menjaga kesehatan.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] text-[#54A082] mb-4">
          Burung yang sakit atau mati biasanya disebabkan oleh beberapa faktor,
          seperti lingkungan yang tidak sehat, pola makan yang buruk, dan
          kurangnya perhatian dari pemilik. Misalnya, burung yang dibiarkan
          dalam kandang yang kotor dan tidak terawat akan rentan terhadap
          infeksi bakteri dan parasit, yang dapat mengakibatkan penyakit serius.
          Selain itu, jika burung tidak mendapatkan pakan yang seimbang dan
          bergizi, mereka akan mengalami kekurangan nutrisi, mengganggu sistem
          kekebalan tubuh dan membuatnya lebih mudah terjangkit penyakit.
        </p>
      </div>
      <div className="flex flex-row space-x-[2%] justify-center mt-4">
        <Image
          src="/img/burng sakit2.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burng sakit3.jpeg"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burng sakit4.png"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burng sakit5.webp"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burng sakit6.webp"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}
export default page;
