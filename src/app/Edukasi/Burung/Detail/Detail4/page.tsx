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
        <div id="detail4hal" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/burung1.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Hal Yang Menyebabkan Kesehatan Burung Menurun
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Merawat burung hias tentu saja akan memerlukan perhatian khusus, karena ada beberapa hal yang bisa menyebabkan mereka sakit jika tidak dihindari. Sebagai pemilik burung hias, penting untuk mengetahui apa yang tidak boleh dilakukan agar burung Anda tetap sehat dan aktif. Di T-trana, kami ingin berbagi informasi tentang apa saja yang perlu dihindari dalam merawat burung hias.`}
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
              {`Kesehatan burung dapat menurun karena berbagai faktor, salah satunya adalah kebersihan lingkungan yang kurang terjaga. Jika kandang atau sangkar tidak dibersihkan secara rutin, kotoran, sisa makanan, dan bulu rontok dapat menjadi tempat berkembang biaknya bakteri, virus, dan parasit. Hal ini dapat menyebabkan burung terinfeksi penyakit seperti infeksi saluran pernapasan, diare, atau kutu burung. Selain itu, kualitas udara di sekitar kandang juga perlu diperhatikan. Paparan asap rokok, parfum, atau bahan kimia berbahaya dapat merusak saluran pernapasan burung, yang berakibat pada penurunan kesehatan secara signifikan.`}
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
              {`Faktor lainnya adalah pola makan yang tidak seimbang. Memberikan makanan yang kurang bergizi atau tidak sesuai dengan kebutuhan spesifik jenis burung dapat menyebabkan defisiensi vitamin dan mineral, yang pada akhirnya menurunkan daya tahan tubuh burung. Kurangnya variasi makanan juga dapat memicu masalah kesehatan, seperti obesitas atau malnutrisi. Selain itu, stres yang disebabkan oleh lingkungan yang tidak mendukung, seperti kebisingan berlebihan, kurangnya interaksi sosial, atau perubahan mendadak dalam rutinitas, juga bisa mengakibatkan burung menjadi sakit. Stres berkepanjangan dapat melemahkan sistem kekebalan tubuh burung, membuatnya lebih rentan terhadap berbagai penyakit.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
