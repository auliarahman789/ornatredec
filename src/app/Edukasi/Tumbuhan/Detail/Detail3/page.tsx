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
        <div id="detail3waktu" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Waktu Yang Baik Untuk Merawat Tanaman
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat tanaman hias memerlukan perhatian pada waktu yang tepat untuk setiap kegiatan. Penyiraman sebaiknya dilakukan pagi atau sore hari untuk menghindari penguapan yang cepat. Pemupukan biasanya dilakukan setiap beberapa minggu sekali, tergantung jenis tanaman dan pupuk yang digunakan. Pemangkasan dapat dilakukan saat tanaman sedang aktif tumbuh, biasanya di awal musim semi. Pastikan juga memeriksa tanaman secara rutin untuk hama atau penyakit. Perawatan yang tepat waktu akan mendukung pertumbuhan tanaman yang sehat dan optimal.`}
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
              {`Waktu yang baik untuk merawat tanaman hias sangat tergantung pada aktivitas harian dan kebutuhan spesifik tanaman. Pada umumnya, pagi hari adalah waktu terbaik untuk menyiram tanaman karena udara masih sejuk dan tanaman dapat menyerap air dengan baik sebelum terkena panas matahari. Selain itu, menyiram di pagi hari memungkinkan air terserap lebih sempurna oleh akar dan mengurangi risiko kelembapan berlebihan yang dapat memicu pertumbuhan jamur atau hama. Sinar matahari pagi yang tidak terlalu terik juga ideal untuk tanaman yang membutuhkan cahaya sedang hingga terang.`}
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
              {`Selain pagi hari, waktu sore menjelang matahari terbenam juga bisa menjadi saat yang tepat untuk merawat tanaman, terutama dalam hal penyiraman atau pemupukan. Pada sore hari, suhu udara sudah mulai turun, sehingga tanaman tidak akan terlalu terkejut dengan perubahan suhu yang ekstrem. Namun, pastikan tidak menyiram terlalu malam karena kelembapan yang berlebihan di malam hari dapat memicu munculnya penyakit atau hama. Perawatan rutin seperti pemangkasan atau pembersihan daun dapat dilakukan kapan saja, tetapi pastikan tanaman tidak terkena sinar matahari langsung saat melakukan kegiatan ini agar tanaman tidak stres.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
