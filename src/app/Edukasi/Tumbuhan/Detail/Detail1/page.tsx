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
        <div id="detail1tujuan" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/judul.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Tujuan Merawat Tanaman
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat tanaman hias memiliki tujuan yang penting, seperti memperindah ruangan dan menghadirkan nuansa alami yang menenangkan. Selain itu, tanaman hias berperan dalam meningkatkan kualitas udara dengan menyaring polutan, sehingga udara di sekitar menjadi lebih bersih dan segar. Kegiatan ini juga memberikan efek relaksasi, membantu mengurangi stres, dan menciptakan lingkungan yang lebih nyaman. Tak hanya itu, merawat tanaman juga berdampak positif pada kesehatan mental dan emosional.`}
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
              {`Merawat tanaman memiliki tujuan utama untuk menjaga kesehatan dan pertumbuhan optimal tanaman tersebut. Dengan merawat tanaman secara rutin, seperti menyiram, memberikan pupuk, dan memastikan tanaman mendapatkan cahaya matahari yang cukup, kita dapat membantu tanaman tumbuh lebih subur dan kuat. Selain itu, perawatan yang baik juga dapat mencegah tanaman dari serangan hama dan penyakit yang dapat merusak tanaman. Dalam lingkungan yang terkontrol, tanaman dapat berkembang dengan baik, menghasilkan bunga yang lebih indah atau hasil panen yang lebih melimpah.`}
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
              {`Oleh karena itu, tanaman hias tidak hanya mempercantik lingkungan, tetapi juga berkontribusi terhadap kualitas hidup`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
