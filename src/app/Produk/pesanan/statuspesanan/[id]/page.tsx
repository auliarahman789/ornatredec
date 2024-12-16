/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import contoh from "../../../../../../public/img/Daun hias.png"
import rating from "../../../../../../public/icon/star.svg"
import dikemas from "../../../../../../public/img/dikemas.png"
import dipesan from "../../../../../../public/img/dipesan.png"
import dikirim from "../../../../../../public/img/dikirim.jpeg"
import selesai from "../../../../../../public/img/selesai.jpeg"
import dikemasbulet from "../../../../../../public/img/dikemasbulet.jpeg"
import dipesanbulet from "../../../../../../public/img/dipesanbulet.jpeg"
import dikirimbulet from "../../../../../../public/img/terkirimbulet.jpeg"
import selesaibulet from "../../../../../../public/img/selesaibulet.jpeg"
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
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
function page() {
  const { id } = useParams();
  const [data, setData] = useState<Status>();
  useEffect(() => {
    getStatus();
  },[])
  async function getStatus() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/transaksi/${id}`
    try {
      const res = await axios.get<Status>(
        url,
        {
          withCredentials: true
       }
      ) 
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  const router = useRouter();
  const handleBack = () => {
    router.replace("/Produk/pesanan/statuspesanan")
  }
  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };
  return (
    <div className="min-h-screen bg-[#E5FFF9]">
      <button>
        <Image
          onClick={handleBack}
          src="/icon/backk.svg"
          alt="Back Icon"
          width={60}
          height={60}
          className="ml-20 mt-10"
        />
      </button>
      <Image
        src="/icon/ornatredecc.svg"
        alt="Ornament Icon"
        width={390}
        height={390}
        className="ml-[7%] mt-8 h-[150%] w-[80%]"
      />
      <div className="ml-[7%] mr-[7%] py-2 flex flex-row bg-[#28DF99] font-semibold text-white pl-4">
        Proses Transaksi
      </div>
      {data &&
        <div className="ml-[7%] mr-[7%] h-[200%] px-[3%] py-[2%] bg-[#F3FFFB] font-semibold text-white">
          <div key={data.id} className="flex justify-evenly">
            <div className="-translate-x-[15%]">
              <div className="flex space-x-[5%] ps-[13%]">
                <img src={data.produk.foto_produk ? "https://74gslzvj-8000.asse.devtunnels.ms" + data.produk?.foto_produk : ""} width={180} height={180} alt='foto produk' className='rounded-[10px]' />
                <div className="flex-col">
                  <h1 className='text-black font-semibold whitespace-nowrap text-[24px]'>{data.produk?.judul_produk}</h1>
                  <div className="flex whitespace-nowrap space-y-[3%]">
                    <Image src={rating} width={20} height={20} alt='rating' />
                    <p className='text-black font-light ms-[1%]'>{data.produk.ratingProduk}</p>
                    <p className='text-black ms-[7%] font-light'>{data.produk.jumlahReview} Reviews</p>
                  </div>
                  <div className="flex-col mt-[14%]">
                    <p className="font-semibold text-black">{data.variasi?.nama_variasi}: <span className='text-gray-300'>{data.subvariasi?.nama_sub_variasi}</span></p>
                    <p className="font-semibold text-black">Usia: <span className='text-gray-300'>{data.subvariasi?.usia}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-[%]">
              <div className="flex-col">
                <h1 className="text-black">Alamat</h1>
                <p className="text-gray-600 text-[19px]">{data.alamat.nama_penerima}</p>
                <p className="text-gray-600">{data.alamat.no_hp}</p>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {data.alamat.jalan_namagedung}, {data.alamat.kelurahan_desa}, {data.alamat.kecamatan}, {data.alamat.kota_kabupaten}, {data.alamat.provinsi}
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#04975F] ml-[40px] mt-[5%] mb-[1%] text-2xl">Info Pengiriman</p>
          {data.status === 'dipesan' &&
          <><div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="ml-8" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={dipesanbulet}
                className="ml-24 -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{data.alamat.kecamatan}</p>
            </div><Image src={dipesan} className="translate-x-[13%] mt-[1%]" width={300} height={60} alt='status' /></>
          }
          {data.status === 'dikemas' &&
            <><div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="ml-8" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={dikemasbulet}
                className="ml-24 -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{data.alamat.kecamatan}</p>
            </div><Image src={dikemas} className="translate-x-[13%] mt-[1%]" width={300} height={60} alt='status' /></>
          }
          {data.status === 'dikirim' &&
            <><div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="ml-8" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={dikirimbulet}
                className="ml-24 -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{data.alamat.kecamatan}</p>
            </div><Image src={dikirim} className="translate-x-[13%] mt-[1%]" width={300} height={60} alt='status' /></>
          }
          {data.status === 'selesai' &&
            <><div className="flex ml-[5px] space-x-2">
              <Image
                src="/icon/mobil.svg"
                alt="Back Icon"
                width={30}
                height={30}
                className="ml-8" />
              <p className='text-[#767373]'>CSR</p>
              <Image
                src={selesaibulet}
                className="ml-24 -translate-y-[2px] h-[26px]"
                alt={"daun"}
                width={150}
                height={7} />
              <p className='text-[#767373]'>{data.alamat.kecamatan}</p>
            </div><Image src={selesai} className="translate-x-[13%] mt-[1%]" width={300} height={60} alt='status' /></>
          }
          <div className="flex space-x-10 translate-x-[3%]">
            <p className='text-[#3F9272] text-sm'>Dipesan</p>
            <p className='text-[#3F9272] text-sm'>Dikemas</p>
            <p className='text-[#3F9272] text-sm'>Dikirim</p>
            <p className='text-[#3F9272] text-sm'>Selesai</p>
          </div>
          <p className="text-[#04975F] mt-[2%] ml-10 text-2xl">Rincian pembayaran</p>
          <div className="ml-[3%] bg-white rounded mr-[3%] flex-col space-y-[0.5%] text-[#00663F] h-[40%] border-2 p-10 border-[#00663F]">
            <div className="flex justify-between">
              <p className="ml-1 text-2xl">Subtotal <span className='text-[#747373]'>( {data.jumlah} produk )</span></p>
              <p className="ml-1 text-2xl">{formatHarga(data.totalHarga)}</p>
            </div>
            {/* <div className="flex justify-between">
            <p className="ml-1 text-2xl">Total biaya pemgiriman</p>
            <p className="ml-1 text-2xl">{Subtotal}</p>
          </div> */}
            <div className="flex justify-between border-b-[1.5px] border-[#3F9272]">
              <p className="ml-1 text-2xl">Biaya layanan</p>
              <p className="ml-1 text-2xl">{formatHarga(2500)}</p>
            </div>
            <div className="flex justify-between mt-[1%]">
              <p className="ml-1 text-2xl">Total pembayaran</p>
              <p className="ml-1 text-2xl text-red-600">{formatHarga(data.totalHarga + 2500)}</p>
            </div>
          </div>
          <div className="border bg-[#28DF99] text-white cursor-pointer text-center mt-8 p-3 rounded mr-[2%] ml-[2%]">
            Beri nilai
          </div>
        </div>
      }
    </div>
  );
}

export default page
