import Footer from "@/app/components/homepage/footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="flex flex-col items-center justify-center space-y-16 pb-16">
        <div
          className="h-[400px] w-[85%] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/koi.png')" }}
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
        <div id="detail4menghindari" className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <h1 className="text-[35px] font-bold text-[#3F9272] leading-10">
              Tips Menghindari Ikan Tidak Cepat Mati
            </h1>
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`agar ikan hias tidak cepat mati, pastikan untuk menjaga kualitas air dengan rutin menggantinya, mengatur suhu yang sesuai, memberikan makanan yang seimbang, tidak menaruh terlalu banyak ikan dalam satu akuarium, memilih ikan yang sehat saat membeli, serta memantau pH air agar sesuai dengan kebutuhan ikan.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Salah satu tips terpenting adalah menjaga kualitas air di akuarium. Ikan hias sangat sensitif terhadap perubahan lingkungan, sehingga penting untuk memastikan bahwa air selalu bersih dan memiliki kadar pH serta suhu yang sesuai dengan kebutuhan jenis ikan yang dipelihara. Rutin mengganti air sekitar 20-30% setiap minggu dapat membantu menjaga kualitas air tanpa mengganggu ekosistem akuarium. Selain itu, pastikan sistem filtrasi berfungsi dengan baik untuk menyaring kotoran dan menjaga kadar oksigen tetap stabil. Hindari memasukkan terlalu banyak ikan dalam satu akuarium karena bisa meningkatkan stres dan memicu penyakit.`}
            </p>
          </div>
        </div>
        <div className="bg-white w-[85%] h-[680px]">
          <Image
            src="/img/koi.png"
            className="w-full h-[300px] object-cover"
            alt="1"
            width={100}
            height={100}
          />
          <div className="mx-[8%] mt-[3%]">
            <p className="text-[#3F9272] text-xl me-[20%] mt-[2%]">
              {`Selain menjaga kualitas air, penting juga untuk memberikan makanan yang tepat dan dalam jumlah yang sesuai. Memberi makan berlebihan dapat menyebabkan sisa makanan menumpuk di dasar akuarium, yang kemudian memicu pertumbuhan bakteri berbahaya dan merusak kualitas air. Cukup beri makan 1-2 kali sehari dengan porsi yang bisa habis dalam beberapa menit. Perhatikan juga tanda-tanda ikan stres, seperti ikan sering bersembunyi, berenang tidak normal, atau warna tubuhnya memudar. Jika tanda-tanda ini muncul, segera periksa kondisi akuarium dan lakukan tindakan perbaikan, seperti mengontrol suhu air atau memisahkan ikan yang sakit.`}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
