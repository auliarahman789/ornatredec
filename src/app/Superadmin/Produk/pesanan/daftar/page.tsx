"use client";
import React, { useEffect, useState } from "react";
import back from "../../../../../../public/icon/Arrow_left.svg";
import next from "../../../../../../public/icon/Expand_left.svg";
import line from "../../../../../../public/icon/Vector 381.svg";
import Image from "next/image";
import router, { useRouter } from "next/navigation";
import contoh from "../../../../../../public/img/Rectangle 4188.png";
import Link from "next/link";
import axios from "axios";

type Pesanan = {
  produk: {
    judul_produk: string;
    foto_produk: string;
    harga: number;
  };
  variasi: {
    nama_variasi: string;
  };
  subvariasi: {
    nama_sub_variasi: string;
  };
  alamat: {
    nama_penerima: string;
    jalan_namagedung: string;
  };
};
function Page() {
  const router = useRouter();
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState<Pesanan[]>([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };
  const handleBack = () => {
    router.push("/Superadmin/Produk/pesanan");
  };

  const handleDetail = () => {
    router.push("/Superadmin/Produk/pesanan/detail");
  };
  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };
  useEffect(() => {
    getPesanan();
  }, []);
  async function getPesanan() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/Transaksi`;
    try {
      const res = await axios.get<Pesanan[]>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data daftar kirim.");
    }
  }

  return (
    <div className="overflow-x-hidden min-h-screen">
      <div className="translate-x-64">
        <div className="flex flex-col mt-[2%]">
          <Image
            src={back}
            onClick={handleBack}
            className="ms-[2%]"
            width={25}
            height={25}
            alt="back"
          />
          <div className="flex mt-[0.5%]">
            <div className="flex">
              <p className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-6 inline-block text-transparent bg-clip-text">
                Produk
              </p>
              <Image
                src={next}
                width={17}
                height={17}
                className="ms-2"
                alt="next"
              />
              <p className="text-sm font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-1  mt-2 inline-block text-transparent bg-clip-text">
                Pesanan
              </p>
              <Image
                src={next}
                width={17}
                height={17}
                className="ms-2"
                alt="next"
              />
              <p className="text-sm font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-1  mt-2 inline-block text-transparent bg-clip-text">
                Daftar Kirim
              </p>
            </div>
          </div>
          <div className="flex relative space-x-[40%] mt-[4%] ms-[7%]">
            <div className="absolute right-[30%] flex-col">
              <div className="flex space-x-6">
                <label htmlFor="Konfirmasi">Konfirmasi semua pesanan</label>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="appearance-none h-5 w-5 me-2 border-2 border-[#3F9272] checked:text-sm rounded-md checked:bg-[#3F9272] checked:border-[#3F9272] checked:before:block checked:before:content-['✔'] checked:before:content:w-3 checked:before:text-white checked:before:text-center checked:before:font-bold"
                />
              </div>
              {selectAll === true ? (
                <button className="bg-[#3F9272] translate-x-28 w-20 text-sm font-light pt-[0.5px] text-white  rounded-md">
                  Konfirmasi
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex-col space-y-[1%] flex mt-[4%] ms-[2%]">
            {data.length > 0 ? (
              data.map((item: any) => (
                <div key={item.id} className="flex space-x-[5%]">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    className="me-2"
                    style={{ display: "none" }}
                    name="Konfirmasi"
                  />
                  <img
                    src={
                      item.produk.foto_produk
                        ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                          item.produk.foto_produk
                        : "/img/default-avatar.png"
                    }
                    className="rounded-full w-[70px] h-[70px]"
                    height={70}
                    width={70}
                    alt="foto pesanan"
                  />
                  <div className="flex-col mt-[1%]">
                    <p className="text-[20px]">{item.produk.judul_produk}</p>
                    <p className="text-[#FF0A0A] font-medium text-[12px]">
                      {formatHarga(item.produk.harga)}
                    </p>
                  </div>
                  <p className="text-12px font-semibold mt-[2%]">
                    {item.variasi?.nama_variasi} -{" "}
                    <span className="text-[#7A7A7A]">
                      {item.subvariasi?.nama_sub_variasi}
                    </span>
                  </p>
                  <p className="text-[20px] mt-[1.7%]">
                    {item.alamat.nama_penerima}
                  </p>
                  <p className="whitespace-nowrap overflow-x-hidden mt-[2%] max-w-[12%] text-[15px] text-ellipsis">
                    {item.alamat.jalan_namagedung}
                  </p>
                  <Link href={`/Superadmin/Produk/pesanan/detail/${item.id}`}>
                    <button
                      className="bg-gradient-to-b h-6 rounded-full mt-[2%] pt-1 pb-2 px-3 from-[#308967] to-[#06612B] text-white text-[13px]"
                      onClick={handleDetail}
                    >
                      Lihat
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p>Tidak ada pesanan.</p>
            )}
          </div>
          {/* <div className="flex space-x-[30%] mt-[4%] ms-[7%]">
                      <div>
                          <input type="checkbox" className='me-2' name='Konfirmasi' />
                          <label htmlFor="cetak">Konfirmasi semua pesanan untuk di kirim</label>
                      </div>
                      </div>
                  <div className="flex space-x-[3%] mt-[1%] mx-[5%]">
                      <Image src={contoh} className='rounded-full' height={70} width={70} alt='foto pesanan' />
                      <div className='flex-col mt-[1%]'>
                          <p className='text-[20px]'>Bunga mawar merah</p>
                          <p className='text-[#FF0A0A] font-medium text-[12px]'>{formatHarga(100000)}</p>
                      </div>
                      <p className='text-12px font-semibold mt-[2%]'>Warna - <span className='text-[#7A7A7A]'>putih</span></p>
                      <p className='text-[20px] mt-[1.7%]'>ahmet gunawan</p>
                      <p className="whitespace-nowrap overflow-x-hidden mt-[2%] max-w-[12%] text-[15px] text-ellipsis"> Jl. Kol Masturi no 525 Jambudipa</p>
                      <button className='bg-gradient-to-b h-6 rounded-full mt-[2%] pt-1 pb-2 px-3 from-[#308967] to-[#06612B] text-white text-[13px]' onClick={handleDetail}>Lihat</button>
                  </div> */}
        </div>
      </div>
    </div>
  );
}

export default Page;
