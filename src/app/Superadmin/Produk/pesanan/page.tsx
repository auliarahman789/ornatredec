"use client";
import React, { useEffect, useRef, useState } from "react";
import back from "../../../../../public/icon/Arrow_left.svg";
import next from "../../../../../public/icon/Expand_left.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

type Pesanan = {
  id: number;
  status: string;
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

const Page = () => {
  const router = useRouter();
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState<Pesanan[]>([]);
  const printRef = useRef<HTMLDivElement>(null);

  // Fungsi untuk mengambil data pesanan
  useEffect(() => {
    getPesanan();
  }, []);

  // Fungsi mengambil data pesanan dari API
  async function getPesanan() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/Transaksi?status=dipesan`;
    try {
      const res = await axios.get<Pesanan[]>(url, { withCredentials: true });
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data pesanan.");
    }
  }
  async function kemasStatus() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/dipesan`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log(res.data);
      getPesanan()
      alert("Pesanan berhasil di kemas")
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data pesanan.");
    }
  }

  // Fungsi untuk mencetak hanya elemen yang ada di ref
  // const handlePrint = () => {
  //   if (printRef.current) {
  //     const printContents = printRef.current.innerHTML;
  //     const originalContents = document.body.innerHTML;
      
  //     document.body.innerHTML = printContents;
  //     window.print();
      
  //     document.body.innerHTML = originalContents;
  //     window.location.reload();
  //     kemasStatus();
  //   }
  // };

  // Format harga
  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };

  // Menangani pilihan select all untuk cetak
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleBack = () => {
    router.push("/Superadmin/Produk");
  };

  const handleDaftar = () => {
    router.push("/Superadmin/Produk/pesanan/daftar");
  };


  return (
    <div className="overflow-x-hidden min-h-screen pb-[5%]">
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
          <div className="flex mt-[0.5%] space-x-[52%]">
            <div className="flex">
              <p onClick={handleBack} className=" cursor-pointer text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-6 inline-block text-transparent bg-clip-text">
                Produk
              </p>
              <Image
                src={next}
                width={17}
                height={17}
                className="ms-2"
                alt="next"
              />
              <p className="text-sm font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-1 mt-2 inline-block text-transparent bg-clip-text">
                Pesanan
              </p>
            </div>
            <button
              className=" w-[90px] px-2 py-1 h-6 mt-1 border-[0.6px] rounded-full border-[#1D764B]"
              onClick={handleDaftar}
            >
              <p className="text-xs font-semibold -translate-y-1 bg-gradient-to-b from-[#00663F] to-[#5CD5A6] inline-block text-transparent bg-clip-text">
                Daftar Kirim
              </p>
            </button>
          </div>

          {/* Tombol cetak semua pesanan */}
          <div className="flex relative space-x-[40%] mt-[4%] ms-[7%]">
            <div className="absolute right-[30%] flex-col">
              <div className="flex space-x-6">
                <label htmlFor="Cetak">Kemas semua pesanan</label>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="appearance-none h-5 w-5 me-2 border-2 border-[#3F9272] rounded-md checked:bg-[#3F9272] relative checked:before:content-['✔']
                   checked:before:text-white checked:before:absolute checked:before:left-[3px] checked:before:text-sm"
                />
              </div>
              {selectAll && (
                <button
                  className="bg-[#3F9272] translate-x-24 w-16 text-sm font-light pt-[0.5px] text-white rounded-md"
                  onClick={kemasStatus}
                >
                  Kemas 
                </button>
              )}
            </div>
          </div>

          {/* Konten pesanan yang bisa dicetak */}
          <div className="flex-col space-y-[1%] flex mt-[4%] translate-x-[7%]" ref={printRef}>
            {data.length > 0 ? (
              data.map((item: any) => (
                <div key={item.id} className="flex space-x-[4.5%]">
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
                    <div className="flex space-x-6">
                      <p className="text-[#FF0A0A] font-medium text-[12px]">
                        {formatHarga(item.produk.harga)}
                      </p>
                      <p className="text-[#FF0A0A] font-medium text-[12px]">
                        {item.status}
                      </p>
                    </div>
                  </div>
                  <p className="text-12px font-semibold whitespace-nowrap w-[8%] mt-[2%]">
                    {item.variasi?.nama_variasi} -{" "}
                    <span className="text-[#7A7A7A]">
                      {item.subvariasi?.nama_sub_variasi}
                    </span>
                  </p>
                  <p className="text-[20px] mt-[1.7%]">{item.alamat.nama_penerima}</p>
                  <p className="whitespace-nowrap overflow-x-hidden mt-[2%] max-w-[12%] text-[15px] text-ellipsis">
                    {item.alamat.jalan_namagedung}
                  </p>
                  <Link href={`/Superadmin/Produk/pesanan/detail/${item.id}`}>
                    <button className="bg-gradient-to-b h-6 rounded-full translate-y-[100%] pt-1 pb-2 px-3 from-[#308967] to-[#06612B] text-white text-[13px]">
                      Lihat
                    </button>
                  </Link>
                </div>
              ))
            ) : (
                  <p className="mx-[25%] my-[10%]">Semua pesanan sudah dikemas.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
