'use client'
import Image from "next/image";
import React, { useState } from "react";
import Burung2 from "./burung2";

function Burung() {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <><Burung2 isAnimated={isAnimated} setIsAnimated={setIsAnimated} /><div className="grid gap-0 grid-cols-2 mx-[98px] me-[100px] pb-[8%]" id="burung">
       <div className={`${isAnimated ? 'transition-transform duration-1000 ease-in-out translate-x-3 opacity-100' : '-translate-x-[100%] opacity-0'}`}>
        <h1 className="text-[#3F9272] font-bold text-[40px]">Tujuan Merawat Burung Hias</h1>
        <p className="text-[20px] me-[4%] mt-[2%] text-[#54A082] text-justify">
          Merawat burung hias bukan hanya sekadar hobi yang menyenangkan,
          tetapi juga merupakan tanggung jawab besar dalam menjaga
          kelestarian dan kesehatan burung-burung yang memiliki keindahan unik.
          Bagi pecinta burung hias, memberikan perawatan yang baik adalah kunci
          utama agar burung bisa hidup dengan nyaman, bahagia, dan tetap mempesona
          dalam penampilannya. Di T-Trana, kami memahami betapa pentingnya
          perawatan yang cermat bagi burung hias agar mereka dapat tumbuh sehat.</p>
      </div>
      <div className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${isAnimated ? 'translate-x-2 opacity-100' : 'translate-x-[100%] opacity-0'}`}>
        <Image src='/img/burung1.png' className="w-full h-auto -translate-x-[10px]" alt={"burung"} width={400} height={434} />
      </div>
      <div className={`${isAnimated ? 'transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100' : '-translate-x-[100%] opacity-0'}`}>
        <Image src='/img/burung2.png' className="w-full h-auto translate-x-[13px]" alt={"burung"} width={550} height={434} />
      </div>
      <div className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${isAnimated ? 'translate-x-3 pe-7 ps-5 pt-5 opacity-100' : 'translate-x-[100%] opacity-0'}`}>
        <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">Cara Merawat Burung Hias</h1>
        <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082] text-justify">
          Memiliki burung hias di rumah tidak hanya menambah
          keindahan visual yang memikat, tetapi juga membawa
          tanggung jawab besar untuk memastikan kesejahteraan mereka.
          Setiap burung hias membutuhkan perhatian khusus dan perawatan
          yang teliti untuk memastikan mereka hidup dengan sehat.
          Perawatan yang baik mencakup berbagai aspek, mulai dari
          pemilihan kandang yang sesuai, pemberian makanan yang seimbang,
          hingga perawatan kebersihan yang rutin.</p>
      </div>
      <div className={`${isAnimated ? 'transition-transform duration-1000 ease-in-out translate-x-3 opacity-100 pt-5' : '-translate-x-[100%] opacity-0'}`}>
        <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">Lingkungan Yang Baik Untuk Burung Hias</h1>
        <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082] text-justify">Untuk merawat burung dengan baik,
          diperlukan lingkungan yang nyaman, bersih, dan aman. Kandang yang luas
          dan berventilasi baik adalah hal utama, memungkinkan burung bergerak bebas
          dan mendapatkan sirkulasi udara yang cukup. Tempatkan kandang di area yang
          terhindar dari angin kencang, panas matahari berlebih, dan kebisingan yang
          dapat membuat burung stres. Selain itu, lingkungan harus menyediakan
           akses air bersih dan pakan yang teratur, serta mainan atau ranting untuk
          memenuhi kebutuhan bermain dan eksplorasi burung. </p>
      </div>
      <div className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${isAnimated ? 'translate-x-2 opacity-100' : 'translate-x-[100%] opacity-0'}`}>
        <Image src='/img/pakanburung.png' className="w-full h-auto -translate-x-[13px]" alt={"burung"} width={550} height={434} />
      </div>
      <div className={`${isAnimated ? 'transition-transform duration-1000 ease-in-out translate-x-0 pe-1 opacity-100' : '-translate-x-[100%] opacity-0'}`}>
        <Image src='/img/burungmati.png' className="w-full h-auto translate-x-[13px]" alt={"burung"} width={550} height={434} />
      </div>
      <div className={`transition-transform duration-1000 ease-in-out overflow-x-hidden ${isAnimated ? 'translate-x-3 pe-7 ps-5 pt-5 opacity-100' : 'translate-x-[100%] opacity-0'}`}>
        <h1 className="text-[#3F9272] font-bold text-[40px] leading-none">Hal Yang Menyebabkan Kesehatan Burung Menurun</h1>
        <p className="text-[20px] me-[5%] mt-[2%] text-[#54A082] text-justify">
          Merawat burung hias tentu saja akan memerlukan perhatian khusus,
          karena ada beberapa hal yang bisa menyebabkan mereka
          sakit jika tidak dihindari. Sebagai pemilik burung hias,
          penting untuk mengetahui apa yang tidak boleh dilakukan agar
          burung Anda tetap sehat dan aktif. Di T-trana, kami ingin
          berbagi informasi tentang apa saja
          yang perlu dihindari dalam merawat burung hias.</p>
      </div>
    </div></>
  )
}

export default Burung;
