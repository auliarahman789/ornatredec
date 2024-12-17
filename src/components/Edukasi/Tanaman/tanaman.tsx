"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tanaman2 from "./tanaman2";
import Footer from "../../homepage/footer";
import Link from "next/link";

function Tanaman() {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);
  return (
    <div className="bg-[#DBFFF6]">
      <Tanaman2 isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      <div
        id="tumbuhan"
        className="overflow-x-hidden grid gap-0 grid-cols-2 mx-[98px] me-[100px] pb-[8%] "
      >
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-3 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px]">
            Tujuan Merawat Tanaman
          </h1>
          <p className="text-[20px] me-[4%] text-[#54A082] text-justify">
            Merawat tanaman hias memiliki tujuan yang penting, seperti
            memperindah ruangan dan menghadirkan nuansa alami yang menenangkan.
            Selain itu, tanaman hias berperan dalam meningkatkan kualitas udara
            dengan menyaring polutan, sehingga udara di sekitar menjadi lebih
            bersih dan segar. Kegiatan ini juga memberikan efek relaksasi,
            membantu mengurangi stres, dan menciptakan lingkungan yang lebih
            nyaman. Tak hanya itu, merawat tanaman juga berdampak positif pada
            kesehatan mental dan emosional. Oleh karena itu, tanaman hias tidak
            hanya mempercantik lingkungan, tetapi juga berkontribusi terhadap
            kualitas hidup
          </p>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-2 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <img
            src="/img/Daun hias.png"
            className="w-full h-auto -translate-x-[10px]"
            alt={"daun"}
            width={400}
            height={434}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer">
            <Link href="/Edukasi/Tumbuhan/Detail/Detail1#detail1tujuan">
              <span className="text-white text-5xl font-bold">
                Selengkapnya
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <img
            src="/img/tan2.png"
            className="w-full h-auto translate-x-[13px]"
            alt={"burung"}
            width={550}
            height={434}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 translate-x-3 cursor-pointer">
            <Link href="/Edukasi/Tumbuhan/Detail/Detail2#detail2cara">
              <span className="text-white text-5xl font-bold">
                Selengkapnya
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-3 pe-7 ps-5 pt-5 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Cara Merawat Tanaman Hias
          </h1>
          <p className="text-[20px] me-[5%] mt-[5%] text-[#54A082] text-justify">
            Merawat tanaman hias melibatkan beberapa langkah kunci untuk
            pertumbuhannya yang optimal. Pastikan tanaman mendapatkan cahaya
            yang sesuai dan penyiraman yang tepat, menjaga tanah tetap lembab
            namun tidak basah. Berikan pupuk secara berkala dan pastikan
            drainase yang baik. Selalu periksa tanaman untuk hama atau penyakit,
            dan lakukan pemangkasan untuk menghilangkan bagian yang mati. Dengan
            perawatan yang konsisten, tanaman hias akan tumbuh sehat dan indah.
          </p>
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-3 opacity-100 pt-5"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Waktu Yang Baik Untuk Merawat Tanaman
          </h1>
          <p className="text-[20px] me-[5%] mt-[5%] text-[#54A082] text-justify">
            Merawat tanaman hias memerlukan perhatian pada waktu yang tepat
            untuk setiap kegiatan. Penyiraman sebaiknya dilakukan pagi atau sore
            hari untuk menghindari penguapan yang cepat. Pemupukan biasanya
            dilakukan setiap beberapa minggu sekali, tergantung jenis tanaman
            dan pupuk yang digunakan. Pemangkasan dapat dilakukan saat tanaman
            sedang aktif tumbuh, biasanya di awal musim semi. Pastikan juga
            memeriksa tanaman secara rutin untuk hama atau penyakit. Perawatan
            yang tepat waktu akan mendukung pertumbuhan tanaman yang sehat dan
            optimal.
          </p>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-2 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <img
            src="/img/tan3.png"
            className="w-full h-auto -translate-x-[13px]"
            alt={"burung"}
            width={550}
            height={434}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer">
            <Link href="/Edukasi/Tumbuhan/Detail/Detail3#detail3waktu">
              <span className="text-white text-5xl font-bold">
                Selengkapnya
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`${
            isAnimated
              ? "transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100"
              : "-translate-x-[100%] opacity-0"
          }`}
        >
          <img
            src="/img/tan4.png"
            className="w-full h-auto translate-x-[13px]"
            alt={"burung"}
            width={550}
            height={434}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 translate-x-3 cursor-pointer">
            <Link href="/Edukasi/Tumbuhan/Detail/Detail4#detail4penyebab">
              <span className="text-white text-5xl font-bold">
                Selengkapnya
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${
            isAnimated
              ? "translate-x-3 pe-7 ps-5 pt-5 opacity-100"
              : "translate-x-[100%] opacity-0"
          }`}
        >
          <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">
            Penyebab Tanaman Sakit
          </h1>
          <p className="text-[20px] me-[5%] mt-[5%] text-[#54A082] text-justify">
            Tanaman bisa layu atau mati karena beberapa penyebab utama.
            Kekurangan air atau penyiraman yang tidak konsisten dapat membuat
            tanaman dehidrasi dan akarnya membusuk. Penyiraman berlebihan juga
            dapat merusak akar dan menyebabkan pembusukan. Kelebihan atau
            kekurangan cahaya mempengaruhi kesehatan tanaman; terlalu banyak
            atau terlalu sedikit cahaya bisa menghambat pertumbuhan. Penyakit
            dan hama, seperti jamur atau serangga, juga dapat merusak tanaman.
            Selain itu, kualitas tanah dan drainase yang buruk dapat menambah
            masalah bagi kesehatan tanaman.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tanaman;
