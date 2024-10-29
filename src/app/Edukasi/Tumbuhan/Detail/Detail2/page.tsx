import React from "react";
import Image from "next/image";
import Footer from "@/app/components/homepage/footer";

function page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="pt-1" id="tumbuhan">
        <div
          className="relative mt-[40px] mx-[100px] w-[84%] h-[415px] bg-cover"
          style={{ backgroundImage: "url('/img/judul.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#d9d9d970] ps-8 pt-[10%]">
            <h1 className="text-5xl font-bold text-white">Cara Merawat</h1>
            <p className="w-[56%] text-[27px] text-white mt-2">
              Dapatkan informasi terbaru dan praktis tentang cara merawat
              tanaman hias di sini, dan tingkatkan pengalaman Anda dalam menjaga
              keindahan dan kesehatan koleksi Anda.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between ml-[8%] mr-[8%]">
        <div className="mt-[5%] -translate-x-2">
          <Image
            src="/img/tan2.png"
            className="w-full h-auto rounded-lg"
            alt={"daun"}
            width={390}
            height={434}
          />
        </div>

        <div className="ml-4 -translate-x-2 mt-10 text-justify">
          <h1 className="text-[#3F9272] font-bold text-4xl">
            Cara Merawat Tanaman
          </h1>
          <p className="text-[#54A082] text-2xl text-[21px] mt-4">
            Dapatkan informasi terbaru dan praktis tentang cara merawat tanaman
            hias di sini, dan tingkatkan pengalaman Anda dalam menjaga keindahan
            dan kesehatan koleksi Anda. Temukan tips berkala mulai dari
            penyiraman, pencahayaan yang ideal, hingga cara menangani hama
            secara alami. Kami juga membagikan rekomendasi pemupukan yang tepat
            untuk berbagai jenis tanaman hias, serta panduan dalam memilih pot
            dan media tanam yang sesuai. Dengan langkah-langkah perawatan yang
            sederhana namun efektif, Anda bisa menjaga tanaman hias tetap segar,
            sehat, dan memancarkan pesona yang luar biasa sepanjang waktu.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] mb-[5%] text-[#54A082]">
          Berikut adalah tutorial merawat tanaman hias anda agar tanaman hias
          anda tumbuh sehat dan panjang umur serta dapat membuat lingkungan
          rumah anda menjadi indah dan menyehatkan untuk keluarga anda
        </p>
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-4">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Penyiraman Tanaman Yang Tepat
          </span>
          <br />
          Siram tanaman secara rutin sesuai dengan kebutuhannya. Pastikan tanah
          tetap lembap, namun hindari genangan air agar akar tidak membusuk.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group1.svg"
            className="rounded-lg"
            alt={"daun"}
            width={150}
            height={150}
          />
        </div>
        <Image
          src="/img/Penyiraman Tanaman Yang Tepat.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={270}
          height={150}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Pencahayaan yang Cukup
          </span>
          <br />
          Letakkan tanaman di tempat yang mendapatkan cahaya matahari sesuai
          jenisnya, apakah sinar langsung atau cahaya tidak langsung, untuk
          mendukung pertumbuhannya.
        </p>
        <div className="-translate-y-[20%] translate-x-[85%]">
          <Image
            src="/icon/group.svg"
            className="rounded-lg"
            alt={"daun"}
            width={170}
            height={170}
          />
        </div>
        <Image
          src="/img/Pencahayaan yang Cukup.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={270}
          height={150}
        />
      </div>
      <div className="flex flex-row  text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Pemupukan Rutin
          </span>
          <br />
          Berikan pupuk sesuai dengan jenis tanaman, idealnya sebulan sekali,
          untuk memastikan tanaman mendapatkan nutrisi yang dibutuhkan.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group3.svg"
            className="rounded-lg"
            alt={"daun"}
            width={150}
            height={150}          />
        </div>
        <Image
          src="/img/pemupukan.jpeg"
          className="rounded-lg w-[500px] h-[130px]"
          alt={"daun"}
          width={580}
          height={350}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Pemangkasan Daun Kering
          </span>
          <br />
          Pangkas daun atau batang yang kering dan layu secara berkala untuk
          merangsang pertumbuhan baru dan menjaga tanaman tetap sehat.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group4.svg"
            className="rounded-lg"
            alt={"daun"}
            width={180}
            height={180}
          />
        </div>
        <Image
          src="/img/Pemangkasan Daun Kering.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={270}
          height={200}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Pengendalian Hama
          </span>
          <br />
          Periksa tanaman secara rutin untuk mendeteksi adanya hama atau
          penyakit. Jika ditemukan, segera atasi dengan cara yang tepat agar
          tanaman tetap terjaga kesehatannya.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group5.svg"
            className="rounded-lg"
            alt={"daun"}
            width={200}
            height={200}
          />
        </div>
        <Image
          src="/img/Pengendalian Hama.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={280}
          height={150}
        />
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}
export default page;
