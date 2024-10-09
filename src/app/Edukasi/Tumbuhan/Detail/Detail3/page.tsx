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
            <h1 className="text-5xl font-bold text-white">Tujuan</h1>
            <p className="w-[56%] text-[27px] text-white mt-2">
              Dapatkan informasi terbaru dan praktis tentang cara merawat
              tanaman hias di sini, dan tingkatkan pengalaman Anda dalam menjaga
              keindahan dan kesehatan koleksi Anda.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between ml-[8%] mr-[8%]">
        <div className="mt-[5%] -translate-x-2">
          <Image
            src="/img/tan3.png"
            className="w-full h-auto rounded-lg"
            alt={"daun"}
            width={390}
            height={434}
          />
        </div>

        <div className="ml-4 -translate-x-2 mt-[10%] text-justify">
          <h1 className="text-[#3F9272] font-bold text-4xl">
            Waktu Yang Baik Untuk Merawat Tanaman
          </h1>
          <p className="text-[#54A082] text-2xl text-[21px]">
            Lakukan Pemeriksaan Rutin: Luangkan waktu beberapa menit setiap
            minggu untuk memeriksa tanaman Anda. Ini termasuk memeriksa
            pencahayaan, kelembaban tanah, dan kesehatan tanaman secara
            umum.Sesuaikan Perawatan: Berdasarkan pemeriksaan, lakukan
            penyesuaian yang diperlukan, seperti memindahkan tanaman ke tempat
            yang lebih terang atau lebih gelap, menyiram jika tanah kering, atau
            menambah kelembaban jika diperlukan.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] mb-[5%] text-[#54A082]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          exercitationem itaque vel aspernatur qui molestiae nobis laudantium
          facere deserunt dolores, voluptatem excepturi voluptatum veniam
          consequuntur at labore enim voluptatibus cupiditate? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Incidunt cumque consectetur
          temporibus dicta rerum beatae eos recusandae harum, eligendi, maxime
          aut! Labore similique commodi accusantium impedit autem repellendus
          amet! Quibusdam!
        </p>
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-4">
        <p className="text-[#3F9272]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          laboriosam aut velit dolorum doloribus ut nulla ipsam veritatis ea
          iste iure cumque facere optio neque magni quis nihil consequuntur
          aperiam! lor
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          laboriosam aut velit dolorum doloribus ut nulla ipsam veritatis ea
          iste iure cumque facere optio neque magni quis nihil consequuntur
          aperiam! lor
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          laboriosam aut velit dolorum doloribus ut nulla ipsam veritatis ea
          iste iure cumque facere optio neque magni quis nihil consequuntur
          aperiam! lor
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          laboriosam aut velit dolorum doloribus ut nulla ipsam veritatis ea
          iste iure cumque facere optio neque magni quis nihil consequuntur
          aperiam! lor
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
