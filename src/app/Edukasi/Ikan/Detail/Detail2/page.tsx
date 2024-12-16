import React from "react";
import Image from "next/image";
import Footer from "@/components/homepage/footer";

function page() {
  return (
    <div className="bg-[#E4FFF2]">
      <div className="pt-1" id="tumbuhan">
        <div
          className="relative mt-[40px] mx-[100px] w-[84%] h-[415px] bg-cover"
          style={{ backgroundImage: "url('/img/judul.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#d9d9d970] ps-8 pt-[10%]">
            <h1 className="text-5xl font-bold text-white">Cara Merawat</h1>
            <p className="w-[56%] text-[27px] text-white mt-2">
              Dapatkan informasi terbaru dan praktis tentang cara merawat ikan
              hias di sini, dan tingkatkan pengalaman Anda dalam menjaga
              keindahan dan kesehatan koleksi Anda.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-between ml-[8%] mr-[8%]">
        <div className="mt-[5%] -translate-x-2">
          <img
            src="/img/beri makan ikan.png"
            className="w-full h-auto rounded-lg"
            alt={"daun"}
            width={390}
            height={434}
          />
        </div>

        <div className="ml-4 -translate-x-2 mt-5 text-justify">
          <h1 className="text-[#3F9272] font-bold text-4xl">
            Cara Merawat Ikan Hias
          </h1>
          <p className="text-[#54A082] text-2xl text-[21px] mt-4">
            Merawat ikan hias membutuhkan perhatian khusus untuk menjaga
            kesehatan dan keindahannya. Pastikan akuarium memiliki ukuran yang
            sesuai dengan jumlah dan jenis ikan yang dipelihara, serta
            dilengkapi dengan filter yang baik untuk menjaga kebersihan air.
            Gantilah air secara berkala, tetapi hindari mengganti seluruh air
            agar ikan tidak stres. Perhatikan suhu air sesuai kebutuhan ikan
            hias, dan berikan pencahayaan yang cukup. Pemberian makan harus
            teratur dengan porsi yang tepat agar tidak tersisa dan mencemari
            air. Selain itu, periksa kesehatan ikan secara rutin untuk
            menghindari penyakit dan berikan obat atau suplemen jika diperlukan.
            Jangan lupa untuk menambahkan tanaman air atau dekorasi yang sesuai.
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-2xl ml-[8%] mr-[8%] mt-[5%] mb-[5%] text-[#54A082]">
          Berikut adalah tutorial merawat ikan hias anda agar ikan hias anda
          tumbuh sehat dan panjang umur serta dapat membuat lingkungan rumah
          anda menjadi indah dan menyehatkan untuk keluarga anda
        </p>
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-4">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Siapkan Akuarium yang Sesuai
          </span>
          <br />
          Pilih akuarium dengan ukuran yang cukup dan sesuai dengan jumlah serta
          jenis ikan hias. Pastikan akuarium dilengkapi dengan filter dan sistem
          pencahayaan yang baik.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <img
            src="/icon/group1.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <img
          src="/img/Siapkan Akuarium yang Sesuai.jpg"
          className="rounded-lg w-[25%] h-[25%]"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Ganti Air Secara Berkala
          </span>
          <br />
          Lakukan pergantian air secara rutin, minimal 20-30% setiap minggu,
          untuk menjaga kebersihan akuarium. Hindari mengganti semua air
          sekaligus agar ikan tidak stres.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <img
            src="/icon/group.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <img
          src="/img/Ganti Air Secara Berkala.jpg"
          className="rounded-lg w-[25%] h-[25%]"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row  text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Atur Suhu Air
          </span>
          <br />
          Pastikan suhu air sesuai dengan kebutuhan spesifik jenis ikan hias
          yang dipelihara. Gunakan alat pengatur suhu jika diperlukan, terutama
          untuk ikan tropis.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <img
            src="/icon/group3.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <img
          src="/img/tus hisa.png"
          className="rounded-lg"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Pemberian Makan Teratur
          </span>
          <br />
          Beri makan ikan secukupnya dan sesuai dengan jenisnya. Hindari memberi
          makan berlebihan karena sisa makanan bisa mencemari air.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <img
            src="/icon/group4.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <img
          src="/img/tus hisa.png"
          className="rounded-lg"
          alt={"daun"}
          width={400}
          height={350}
        />
      </div>
      <div className="flex flex-row text-2xl space-x-[2%] justify-center ml-[8%] mr-[8%] mt-[6%]">
        <p className="text-[#3F9272]">
          <span className="text-2xl text-[#3F9272] font-bold">
            Periksa Kesehatan Ikan
          </span>
          <br />
          Pantau ikan secara rutin untuk mendeteksi tanda-tanda penyakit. Segera
          pisahkan ikan yang sakit dan berikan perawatan yang tepat agar
          penyakit tidak menyebar ke ikan lainnya.
        </p>
        <div className="-translate-y-[25%] translate-x-[85%]">
          <img
            src="/icon/group4.svg"
            className="rounded-lg"
            alt={"daun"}
            width={250}
            height={250}
          />
        </div>
        <img
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
