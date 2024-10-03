import Footer from "@/app/components/homepage/footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="flex flex-col items-center justify-center space-y-16 pb-16">
        <div
          className="h-[400px] w-[85%] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/burung1.png')" }}
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
        <div id="detail2cara" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Cara Merawat Burung Hias
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Memiliki burung hias di rumah tidak hanya menambah keindahan visual yang memikat, tetapi juga membawa tanggung jawab besar untuk memastikan kesejahteraan mereka. Setiap burung hias membutuhkan perhatian khusus dan perawatan yang teliti untuk memastikan mereka hidup dengan sehat. Perawatan yang baik mencakup berbagai aspek, mulai dari pemilihan kandang yang sesuai, pemberian makanan yang seimbang, hingga perawatan kebersihan yang rutin.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat burung hias memerlukan perhatian khusus terhadap kebutuhan dasar mereka agar tetap sehat dan bahagia. Langkah pertama yang harus dilakukan adalah menyediakan makanan yang berkualitas dan seimbang sesuai dengan jenis burungnya. Setiap spesies burung memiliki kebutuhan nutrisi yang berbeda, sehingga penting untuk memberikan pakan yang mengandung biji-bijian, buah-buahan, sayuran, atau pelet yang dirancang khusus. Selain itu, kebersihan tempat makan dan minum harus dijaga setiap hari untuk mencegah infeksi atau penyakit. Pastikan juga burung memiliki akses ke air bersih setiap saat.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Langkah kedua dalam merawat burung hias adalah menjaga kebersihan dan kesehatan lingkungannya. Kandang atau sangkar perlu dibersihkan secara rutin untuk menghilangkan kotoran, bulu rontok, dan sisa makanan. Memberikan mainan atau alat untuk stimulasi mental juga sangat penting, karena burung hias membutuhkan aktivitas fisik dan mental untuk menghindari stres. Selain itu, penting untuk memastikan burung mendapatkan sinar matahari yang cukup atau pencahayaan yang tepat, serta memantau kesehatannya dengan mengamati perilaku sehari-hari. Jika burung menunjukkan tanda-tanda sakit, segera konsultasikan dengan dokter hewan.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
