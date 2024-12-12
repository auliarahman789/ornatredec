"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import kembali from "../../../../../public/icon/Arrow_alt_left (1).svg";
import rating from "../../../../../public/icon/star.svg";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dikemasbulet from "../../../../../public/img/dikemasbulet.jpeg"
import dipesanbulet from "../../../../../public/img/dipesanbulet.jpeg"
import dikirimbulet from "../../../../../public/img/terkirimbulet.jpeg"
import selesaibulet from "../../../../../public/img/selesaibulet.jpeg"

type Status = {
  id: number;
  status: string;
  jumlah: number;
  totalHarga: number;
  statusPembayaran: string;
    
  produk: {
    judul_produk: string;
    harga: number;
    foto_produk: string;
    ratingProduk: number;
    jumlahReview: string;
  };
  variasi: {
    nama_variasi: string;
  };
  subvariasi: {
    nama_sub_variasi: string;
    usia: string;
  };
alamat: {
  provinsi: string;
  kota_kabupaten: string;
  kecamatan: string;
  kelurahan_desa: string;
  jalan_namagedung: string;
  patokan: string;
  nama_penerima: string;
  no_hp: number;
  kategori_alamat: string;
};
};

function Page() {
  const [data, setData] = useState<Status[]>([]);

  useEffect(() => {
    getStatus();
  }, []);

  async function getStatus() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/transaksiUser`;
    try {
      const res = await axios.get<Status[]>(url, { withCredentials: true });
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };
  const router = useRouter();
  const handleBack = () => {
    router.replace("/Produk/pesanan/statuspesanan")
  }
  return (
    <div className="p-[3%] bg-gradient-to-b min-h-screen from-[#E5FFF9] to-[#E4FFF2]">
      <div className="flex">
        <Image src={kembali} width={25} height={25} alt="kembali" />
        <p className="text-[19px] translate-y-2 text-[#308967]">Kembali</p>
        <p className="text-[25px] mx-auto font-semibold text-[#308967]">
          Riwayat Pesanan
        </p>
      </div>
      <div className="mt-[3%] flex flex-col space-y-[5px]">
        {data.length > 0 ?
          data.map((item) => (
            <div key={item.id} className="bg-white py-[3%] px-[3%] mx-[7%]">
              <div className="flex justify-evenly">
                <div className="">
                  <div className="flex space-x-[5%]">
                    <img
                      src={item.produk.foto_produk ? "https://74gslzvj-8000.asse.devtunnels.ms" + item.produk.foto_produk : ""}
                      width={180}
                      height={180}
                      alt="foto produk"
                      className="rounded-[10px] -translate-x-[5%]"
                    />
                    <div className="flex-col">
                      <h1 className="text-black whitespace-nowrap font-semibold text-[24px]">
                        {item.produk.judul_produk}
                      </h1>
                      <div className="flex whitespace-nowrap space-y-[3%]">
                        <Image src={rating} width={20} height={20} alt="rating" />
                        <p className="text-black font-light ms-[1%]">{item.produk.ratingProduk}</p>
                        <p className="text-black ms-[7%] font-light">{item.produk.jumlahReview} Reviews</p>
                      </div>
                      <div className="flex-col mt-[14%]">
                        <p className="font-semibold text-black">
                          {item.variasi?.nama_variasi}: {" "}
                          <span className="text-gray-300">
                            {item.subvariasi?.nama_sub_variasi}
                          </span>
                        </p>
                        <p className="font-semibold text-black">
                          Usia: {" "}
                          <span className="text-gray-300">
                            {item.subvariasi?.usia}
                          </span>
                        </p>
                        {item.status === 'dipesan' &&
          <div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={dipesanbulet}
                className=" -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{item.alamat.kecamatan}</p>
                        </div>
                      
          }
          {item.status === 'dikemas' &&
            <div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={dikemasbulet}
                className=" -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{item.alamat.kecamatan}</p>
                        </div>
          
          }
          {item.status === 'dikirim' &&
            <div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={dikirimbulet}
                className=" -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{item.alamat.kecamatan}</p>
            </div>
          }
          {item.status === 'selesai' &&
            <div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={selesaibulet}
                className=" -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{item.alamat.kecamatan}</p>
            </div>
          }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-[5%]">
                  <div className="flex-col">
                    <h1 className="text-black">Alamat</h1>
                    <p className="text-gray-600 text-[19px]">{item.alamat?.nama_penerima}</p>
                    <p className="text-gray-600">{item.alamat?.no_hp}</p>
                    <p className="text-gray-300 whitespace-pre-wrap">
                      {item.alamat?.jalan_namagedung}, {item.alamat?.kelurahan_desa}, {item.alamat?.kecamatan}, {item.alamat?.kota_kabupaten}, {item.alamat?.provinsi}
                    </p>
                    
                    <div className="relative mt-[3%]">
                    <Link href={`/Produk/pesanan/statuspesanan/${item.id}`}>
                    <button className='bg-[#3F9272] absolute right-0 rounded-md px-[4%] text-sm text-white py-[1%]'>Lihat</button>
              </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          :
          (
            <p>Belum melakukan transaksi apapun</p>
          )}
      </div>
    </div>
  );
}

export default Page;
