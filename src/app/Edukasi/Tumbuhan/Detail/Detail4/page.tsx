import Footer from "@/app/components/homepage/footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="flex flex-col items-center justify-center space-y-16 pb-16">
        <div
          className="h-[400px] w-[85%] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/judul.png')" }}
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
        <div id="detail4penyebab" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Penyebab Tanaman Sakit
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Tanaman bisa layu atau mati karena beberapa penyebab utama. Kekurangan air atau penyiraman yang tidak konsisten dapat membuat tanaman dehidrasi dan akarnya membusuk. Penyiraman berlebihan juga dapat merusak akar dan menyebabkan pembusukan. Kelebihan atau kekurangan cahaya mempengaruhi kesehatan tanaman; terlalu banyak atau terlalu sedikit cahaya bisa menghambat pertumbuhan. Penyakit dan hama, seperti jamur atau serangga, juga dapat merusak tanaman. Selain itu, kualitas tanah dan drainase yang buruk dapat menambah masalah bagi kesehatan tanaman.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Tanaman hias bisa mengalami sakit karena berbagai faktor, salah satu penyebab utamanya adalah penyiraman yang tidak tepat. Terlalu banyak atau terlalu sedikit air dapat mengganggu keseimbangan pertumbuhan tanaman. Jika tanaman terlalu sering disiram, akarnya bisa membusuk karena kelembapan berlebih, menyebabkan daun layu dan batang menjadi lemah. Sebaliknya, jika tanaman kekurangan air, daun bisa mengering, menggulung, atau bahkan rontok. Oleh karena itu, penting untuk menyesuaikan penyiraman sesuai kebutuhan spesifik tanaman hias tersebut.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Penyebab lain tanaman hias sakit adalah serangan hama dan penyakit. Hama seperti kutu daun, tungau, atau kutu putih sering menyerang tanaman hias dan menghisap cairan dari daunnya, membuat tanaman menjadi lemah. Selain itu, penyakit seperti jamur atau bakteri bisa menyebar dengan cepat pada tanaman yang tidak mendapatkan sirkulasi udara yang baik atau terkena kelembapan berlebih. Tanda-tanda umum dari serangan penyakit adalah bercak hitam, busuk akar, atau perubahan warna pada daun. Untuk mengatasi ini, pemantauan rutin dan tindakan preventif seperti membersihkan daun serta penggunaan pestisida alami dapat membantu menjaga kesehatan tanaman.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
