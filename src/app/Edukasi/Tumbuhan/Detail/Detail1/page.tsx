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
            <h1 className="text-5xl font-bold text-white">Tujuan</h1>
            <p className="w-[56%] text-[27px] text-white mt-2">
              Tujuan utama merawat tanaman hias adalah untuk menjaga keindahan
              dan kesehatannya, sehingga dapat memberikan manfaat estetika serta
              meningkatkan kualitas udara di sekitar.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between ml-[8%] mr-[8%]">
        <div className="mt-[5%] -translate-x-2">
          <Image
            src="/img/Daun hias.png"
            className="w-full h-auto rounded-lg"
            alt={"daun"}
            width={390}
            height={434}
          />
        </div>

        <div className="ml-4 -translate-x-2 mt-[5%] text-justify">
          <h1 className="text-[#3F9272] font-bold text-4xl">
            Tujuan Merawat Tanaman Hias
          </h1>
          <p className="text-[#54A082] text-[21px]">
            Tujuan utama merawat tanaman hias adalah untuk menjaga keindahan dan
            kesehatannya, sehingga dapat memberikan manfaat estetika serta
            meningkatkan kualitas udara di sekitar. Dengan perawatan yang tepat,
            tanaman hias mampu tumbuh subur, mempercantik ruangan, dan
            menciptakan suasana yang lebih segar serta nyaman. Selain itu,
            merawat tanaman hias juga membantu mengurangi stres dan meningkatkan
            kesejahteraan emosional, karena berinteraksi dengan alam dapat
            memberikan efek menenangkan. Perawatan yang konsisten, seperti
            penyiraman, pemberian nutrisi, dan penempatan di lingkungan yang
            sesuai, akan memastikan tanaman hias tetap sehat dan tahan lama.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] text-[#54A082]">
          "Berikut adalah contoh tumbuhan yang tumbuh subur dan sehat berkat
          perawatan yang tepat. Dengan memberikan perhatian yang konsisten
          seperti penyiraman yang cukup, pemupukan teratur, serta penempatan di
          lingkungan yang sesuai, tumbuhan ini mampu berkembang dengan optimal.
          Perawatan yang baik memastikan dedaunan tetap hijau, batang kokoh, dan
          pertumbuhan yang terus berlanjut, sehingga tumbuhan ini bisa
          menghadirkan keindahan alami yang memukau di sekitarnya."
        </p>
      </div>
      <div className="flex flex-row space-x-[2%] justify-center mt-4">
        <Image
          src="/img/Daun hias.png"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/Daun hias.png"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/Daun hias.png"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/Daun hias.png"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/Daun hias.png"
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
