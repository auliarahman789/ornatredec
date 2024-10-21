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
            <h1 className="text-5xl font-bold text-white">Waktu Yang Baik</h1>
            <p className="w-[56%] text-[27px] text-white mt-2">
              Dapatkan informasi terbaru dan praktis tentang waktu yang baik
              untuk merawat tanaman anda, dan tingkatkan pengalaman Anda dalam
              menjaga tanaman hias anda keindahan dan kesehatan koleksi Anda.
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

        <div className="ml-4 -translate-x-2 mt-5 text-justify">
          <h1 className="text-[#3F9272] font-bold text-4xl">
            Cara Merawat Tanaman Hias
          </h1>
          <p className="text-[#54A082] text-2xl text-[21px] mt-4">
            Waktu yang baik untuk merawat tanaman hias adalah di pagi hari atau
            sore hari ketika suhu lebih sejuk, biasanya antara 20-30°C. Suhu ini
            ideal untuk tanaman hias karena tidak terlalu panas atau dingin,
            sehingga tanaman dapat menyerap air dan nutrisi secara optimal.
            Penyiraman di pagi hari membantu tanaman mendapatkan kelembapan yang
            cukup untuk menjalani proses fotosintesis dengan baik sepanjang
            hari, sementara di sore hari suhu sudah menurun sehingga air lebih
            lama terserap sebelum menguap. Hindari suhu ekstrem, terutama di
            atas 35°C, karena dapat menyebabkan tanaman layu dan stres. Selain
            itu, pastikan juga tanaman tidak terkena angin kencang yang dapat
            mengganggu pertumbuhannya.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] mb-[5%] text-[#54A082]">
          Berikut adalah waktu yang baik dan suhu yang sehat untuk merawat
          tanaman hias anda agar tanaman hias anda tumbuh cantik dan dapat
          membuat lingkungan anda menjadi lebih cantik
        </p>
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-4">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Cahaya yang Cukup
          </span>
          <br />
          Tanaman hias membutuhkan pencahayaan yang sesuai untuk fotosintesis.
          Tempatkan tanaman di area yang mendapatkan cahaya terang tetapi tidak
          langsung, seperti dekat jendela dengan tirai tipis, agar tanaman dapat
          tumbuh dengan baik.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group1.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <Image
          src="/img/tus hisa.png"
          className="rounded-lg"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Suhu yang Stabil
          </span>
          <br />
          Pertahankan suhu ruangan antara 20-25°C untuk sebagian besar tanaman
          hias. Hindari fluktuasi suhu yang ekstrem, terutama di dekat sumber
          panas seperti radiator atau AC, yang dapat menyebabkan stres pada
          tanaman.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <Image
          src="/img/tus hisa.png"
          className="rounded-lg"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row  text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Kelembapan Udara
          </span>
          <br />
          Banyak tanaman hias, terutama yang berasal dari daerah tropis,
          menyukai kelembapan yang tinggi. Usahakan menjaga kelembapan udara
          sekitar 40-60% dengan menyemprotkan air secara berkala atau
          menggunakan pelembap udara.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group3.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <Image
          src="/img/tus hisa.png"
          className="rounded-lg"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Sirkulasi Udara yang Baik
          </span>
          <br />
          Pastikan ruangan memiliki sirkulasi udara yang baik untuk mencegah
          pertumbuhan jamur dan hama. Hindari menempatkan tanaman terlalu rapat
          agar udara dapat mengalir di sekitarnya.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group4.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <Image
          src="/img/tus hisa.png"
          className="rounded-lg"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Media Tanam yang Berkualitas
          </span>
          <br />
          Gunakan media tanam yang baik, seperti campuran tanah yang kaya akan
          bahan organik, agar tanaman mendapatkan nutrisi yang cukup dan
          drainase yang baik. Pastikan pot memiliki lubang drainase untuk
          mencegah genangan air.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <Image
            src="/icon/group4.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <Image
          src="/img/tus hisa.png"
          className="rounded-lg"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}
export default page;
