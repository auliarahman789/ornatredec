import axios from 'axios';
import React, { useEffect, useState } from 'react'

type PemasukanJuni = {
    month: string;
    Perbandingan: number;
    Transaksi: number;
    totalJualTanaman: number;
    totalJualIkan: number;
    totalJualburung: number;
    totalBeliTanaman: number;
    totalBeliIkan: number;
    totalBeliBurung: number;
    totalBeli: number;
    totalJual: number;
    totalUntungTanaman: number;
    totalUntungIkan: number;
    totalUntungBurung: number;
    totalUntung: number;
    totalBiayaLayanan: number;
    totalBiayaDarurat: number;
    subTotalKeuntungan: number;
  };
  
  function PemasukanJuni() {
    const [data, setData] = useState<PemasukanJuni | null>(null); // Inisialisasi dengan null
  
    useEffect(() => {
      getPemasukanJuni();
    }, []);
  
    async function getPemasukanJuni() {
      const url = `${process.env.NEXT_PUBLIC_URL}api/report?bulan=6&tahun=2024`;
      try {
        const res = await axios.get<PemasukanJuni>(url, {
          withCredentials: true,
        });
        setData(res.data);
        console.log(res.data);
      } catch (error: any) {
        console.log(error);
      }
    }
    const formatHarga = (itung: number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(itung);
    };
  return (
      <div>
          {data && 
            <><div className="flex mt-4">
                  <div className="bg-white mt-[4%] py-2 rounded-xl ms-[4%] w-[40%] h-[180px]">
                      <p className="text-[10px] ms-[3%]">
                          pemasukan di bulan <span className="text-[#28AFF8]">{data.month}</span>
                      </p>
                      <div className="flex my-[12%] justify-center">
                          <p className="text-[36px]">
                              {formatHarga(data.Transaksi)}
                          </p>
                      </div>
                  </div>
                  <div className="bg-white mt-[4%] py-2 rounded-xl ms-[4%] w-[40%] h-[180px]">
                      <p className="text-[10px] ms-[3%]">
                          Total Setelah di kurangi modal di bulan <span className="text-[#28AFF8]">{data.month}</span>
                      </p>
                      <div className="flex my-[12%] justify-center">
                          <p className="text-[36px]">
                              {formatHarga(data.Perbandingan)}
                          </p>
                      </div>
                  </div>
              </div><hr className='border-t-[1px] border-[#00000069] mx-8 mt-7' /><div className="mx-[8%]">
                      <p className="text-[20px]  mt-[5%]">keuntungan</p>
                      <div className="flex w-[100%] mt-[1%] bg-[#308967] h-[35px]">
                          <ul className='flex space-x-[70%] mt-[6px] px-4 text-white'>
                              <li className="w-[25%]">Produk</li>
                              <li className="w-[25%]">Dibeli</li>
                              <li className="w-[25%]">Dijual</li>
                              <li className="w-[25%]">Keuntungan</li>
                          </ul>
                      </div>
                      <div className="flex w-[100%] mt-[1%] bg-white h-[35px]">
                          <ul className='flex mt-[6px] px-4 '>
                              <li className=" w-[195px] whitespace-nowrap">Tanaman Hias</li>
                              <li className="w-[227px]">{formatHarga(data.totalBeliTanaman)}</li>
                              <li className="w-[225px]">{formatHarga(data.totalJualTanaman)}</li>
                              <li className="w-[25%]">{formatHarga(data.totalUntungTanaman)}</li>
                          </ul>
                      </div>
                      <div className="flex w-[100%] mt-[1%] bg-white h-[35px]">
                          <ul className='flex mt-[6px] px-4 '>
                              <li className=" w-[195px] whitespace-nowrap">Ikan Hias</li>
                              <li className="w-[234px] translate-x-1">{formatHarga(data.totalBeliIkan)}</li>
                              <li className="w-[227px] translate-x-1">{formatHarga(data.totalJualIkan)}</li>
                              <li className="w-[25%] translate-x-1">{formatHarga(data.totalUntungIkan)}</li>
                          </ul>
                      </div>
                      <div className="flex w-[100%] mt-[1%] bg-white h-[35px]">
                          <ul className='flex mt-[6px] px-4 '>
                              <li className=" w-[195px] whitespace-nowrap">Burung Hias</li>
                              <li className="w-[234px] translate-x-1">{formatHarga(data.totalBeliBurung)}</li>
                              <li className="w-[225px] translate-x-1">{formatHarga(data.totalJualburung)}</li>
                              <li className="w-[25%] translate-x-1">{formatHarga(data.totalUntungBurung)}</li>
                          </ul>
                      </div>
                      <div className="flex w-[100%] mt-[1%] bg-white h-[35px]">
                          <ul className='flex mt-[6px] px-4 '>
                              <li className=" w-[195px] whitespace-nowrap font-bold">Total</li>
                              <li className="w-[227px]">{formatHarga(data.totalBeli)}</li>
                              <li className="w-[225px]">{formatHarga(data.totalJual)}</li>
                              <li className="w-[25%]">{formatHarga(data.totalUntung)}</li>
                          </ul>
                  </div>
              </div>
              <div className="flex space-x-[3%] mt-[3%] mx-[8.3%]">
                  <div className="w-[55%] h-[100px] flex-col space-y-[1.5%]">
                    <ul className='bg-[#308967] h-[28px] p-1 text-white flex justify-evenly'>
                          <li>Biaya Tambahan</li>
                          <li>Nominal</li>
                      </ul>
                      <ul className='bg-white h-[28px] p-1 flex justify-evenly'>
                          <li>Biaya Darurat</li>
                          <li>Biaya Layanan</li>
                      </ul>
                      <ul className='bg-white h-[28px] p-1 flex justify-evenly'>
                          <li>{formatHarga(data.totalBiayaDarurat)}</li>
                          <li>{formatHarga(data.totalBiayaLayanan)}</li>
                      </ul>
                  </div>
                  <div className="w-[45%] h-[100px]">
                      <p className="bg-[#308967] h-[28px] p-1 text-white text-center">Subtotal</p>
                      <div className="bg-white h-[62px] mt-[1.5%]">
                          <p className="text-center py-[5%]">{formatHarga(data.subTotalKeuntungan)}</p>
                      </div>
                  </div>
              </div>
          </>
          }
    </div>
  )
}

export default PemasukanJuni