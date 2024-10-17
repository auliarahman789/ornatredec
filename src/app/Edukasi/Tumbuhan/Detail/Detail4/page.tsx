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
              Tanaman sering cepat mati atau layu karena beberapa alasan,
              seperti penyiraman yang tidak tepat, baik itu terlalu banyak atau
              terlalu sedikit air.Berikut adalah beberapa alasan kenapa tanaman
              cepat layu atau mati
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
            Alasan Tanaman Bisa Mati Atau Layu
          </h1>
          <p className="text-[#54A082] text-[21px] mt-6">
            Tanaman hias sering layu atau cepat mati karena beberapa faktor.
            Kelebihan atau kekurangan air adalah penyebab utama, di mana terlalu
            banyak air menyebabkan akar membusuk, sementara kekurangan air
            membuat tanaman dehidrasi. Pencahayaan yang tidak sesuai, baik
            terlalu banyak sinar matahari atau terlalu sedikit, juga dapat
            membuat tanaman stres. Selain itu, serangan hama atau penyakit bisa
            merusak bagian penting tanaman, mengganggu pertumbuhannya. Media
            tanam yang tidak sesuai, seperti tanah yang terlalu padat atau
            miskin nutrisi, menghambat akar dalam menyerap nutrisi.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] text-[#54A082] text-[21px]">
          Berikut adalah contoh tumbuhan yang layu dan mati karena perawatan
          yang tidak tepat. Tanpa perhatian yang konsisten, seperti penyiraman
          yang cukup, pemupukan teratur, dan penempatan di lingkungan yang
          sesuai, tumbuhan ini tidak mampu berkembang dengan optimal. Perawatan
          yang kurang baik akan menyebabkan dedaunan menguning, batang melemah,
          dan pertumbuhan terhambat, sehingga tumbuhan ini tidak bisa
          menghadirkan keindahan alami yang memukau di sekitarnya.
        </p>
      </div>
      <div className="flex flex-row space-x-[2%] justify-center mt-4">
        <Image
          src="/img/tanaman mati1.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/tanaman mati2.jpeg"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/tanaman mati3.webp"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/tanaman mati4.png"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/tanaman mati5.jpg"
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
