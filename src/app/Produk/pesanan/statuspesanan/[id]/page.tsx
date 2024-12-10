/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import contoh from "../../../../../../public/img/Daun hias.png"
import rating from "../../../../../../public/icon/star.svg"
import dikemas from "../../../../../../public/img/dikemas.png"
import dipesan from "../../../../../../public/img/dipesan.png"
import { useParams } from 'next/navigation';
import axios from 'axios';
type Status = {

}
function page() {
  const { id } = useParams();
  const [data, setData] = useState<Status>();
  useEffect(() => {
    getStatus();
  },[])
  async function getStatus() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/transaksiUser/${id}`
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
  return (
    <div className="min-h-screen bg-[#E5FFF9]">
      <button>
        <Image
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
      <div className="ml-[7%] mr-[7%] h-[200%] py-[2%] bg-[#F3FFFB] font-semibold text-white"> 
        <div className="flex justify-evenly">
          <div className="-translate-x-[30%]">
          <div className="flex space-x-[5%]">
         <Image src={contoh} width={180} height={180} alt='foto produk' className='rounded-[10px]'/>
          <div className="flex-col">
            <h1 className='text-black font-semibold text-[24px]'>Bunga</h1>
            <div className="flex whitespace-nowrap space-y-[3%]">
              <Image src={rating} width={20}  height={20} alt='rating'/>
              <p className='text-black font-light ms-[1%]'>4.6</p>
              <p className='text-black ms-[7%] font-light'>86 Reviews</p>
            </div>
            <div className="flex-col mt-[14%]">
            <p className="font-semibold text-black">Warna: <span className='text-gray-300'>Pink</span></p>
              <p className="font-semibold text-black">Warna: <span className='text-gray-300'>Pink</span></p>
            </div>
          </div>
          </div>
          </div>
          <div className="-translate-x-[10%]">
            <div className="flex-col">
              <h1 className='text-black'>Alamat</h1>
                <p className='text-gray-600'>Bel</p>
                <p className='text-gray-600'>003000200</p>
                <p className='text-gray-300'> jalan jalanshhshahhshshsgagghwghghygsfttgsts</p>
          </div>
          </div>
        </div>
        <p className="text-[#04975F] mt-[5%] mb-[1%] ml-10 text-2xl">Info Pengiriman</p>
        <div className="flex space-x-2">
        <Image
          src="/icon/mobil.svg"
          alt="Back Icon"
          width={30}
          height={30}
          className="ml-8"
        />
        <p className='text-[#767373]'>BDG</p>
        <Image
          src="/img/hitam.png"
          className="ml-24 translate-y-[6px] h-[8px]"
          alt={"daun"}
          width={150}
          height={7}
          />
           <p className='text-[#767373]'>BDG</p>
        </div>
        <Image src={dipesan} className="translate-x-[13%] mt-[1%]" width={300} height={60} alt='status'/>
        <p className="text-[#04975F] mt-[2%] ml-10 text-2xl">Rincian pembayaran</p>
        <div className="ml-[3%] bg-white rounded mr-[3%] flex-col space-y-[0.5%] text-[#00663F] h-[40%] border-2 p-10 border-[#00663F]">
          <div className="flex justify-between">
            <p className="ml-1 text-2xl">Subtotal <span className='text-[#747373]'>( 1 produk )</span></p>
            <p className="ml-1 text-2xl">Subtotal</p>
          </div>
          <div className="flex justify-between">
            <p className="ml-1 text-2xl">Total biaya pemgiriman</p>
            <p className="ml-1 text-2xl">Subtotal</p>
          </div>
          <div className="flex justify-between border-b-[1.5px] border-[#3F9272]">
            <p className="ml-1 text-2xl">Biaya layanan</p>
            <p className="ml-1 text-2xl">Subtotal</p>
          </div>
          <div className="flex justify-between mt-[1%]">
            <p className="ml-1 text-2xl">Total pembayaran</p>
            <p className="ml-1 text-2xl text-red-600">Subtotal</p>
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
