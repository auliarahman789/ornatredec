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
              Merawat burung hias memiliki tujuan yang beragam, mulai dari
              menciptakan lingkungan yang sehat dan nyaman bagi burung hingga
              meningkatkan kualitas hidup mereka.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between ml-[8%] mr-[8%]">
        <div className="mt-[5%] -translate-x-2">
          <Image
            src="/img/burung1.png"
            className="w-full h-auto rounded-lg"
            alt={"daun"}
            width={390}
            height={434}
          />
        </div>

        <div className="ml-4 -translate-x-2 mt-[5%] text-justify">
          <h1 className="text-[#3F9272] font-bold text-4xl">
            Tujuan Merawat Burung Hias
          </h1>
          <p className="text-[#54A082] text-[21px] mt-4">
            Merawat burung hias memiliki tujuan yang beragam, mulai dari
            menciptakan lingkungan yang sehat dan nyaman bagi burung hingga
            meningkatkan kualitas hidup mereka. Dengan memberikan perawatan yang
            baik, seperti pemberian pakan bergizi, kebersihan kandang yang
            terjaga, serta perhatian dan interaksi yang cukup, pemilik dapat
            memastikan burung tetap aktif dan ceria. Selain itu, merawat burung
            hias juga bertujuan untuk memperlihatkan keindahan warna dan suara
            mereka, yang dapat memberikan kebahagiaan dan ketenangan bagi
            pemilik. Melalui perawatan yang tepat, burung hias dapat hidup lebih
            lama, berperilaku lebih baik, dan menjadi teman yang menyenangkan
            dalam kehidupan sehari-hari.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] text-[#54A082] mb-4">
          Berikut adalah burung sehat yang menunjukkan hasil perawatan yang
          sesuai dan baik. Dengan pakan bergizi yang disusun secara seimbang,
          burung ini memiliki bulu yang berkilau dan warna yang cerah,
          mencerminkan kesehatannya. Kandang yang bersih dan luas memungkinkan
          burung bergerak dengan leluasa, sementara lingkungan yang nyaman
          membantu mengurangi stres. Interaksi rutin dengan pemiliknya juga
          memperkuat ikatan, menjadikan burung ini lebih aktif dan ceria. Semua
          faktor ini berkontribusi pada perilaku yang lincah dan suara yang
          merdu, menunjukkan bahwa perawatan yang baik sangat penting untuk
          kesehatan dan kesejahteraan burung hias.
        </p>
      </div>
      <div className="flex flex-row space-x-[2%] justify-center mt-4">
        <Image
          src="/img/burung2.png"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burung3.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burung4.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burung5.jpg"
          className="rounded-lg"
          alt={"daun"}
          width={200}
          height={200}
        />
        <Image
          src="/img/burung6.jpg"
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
