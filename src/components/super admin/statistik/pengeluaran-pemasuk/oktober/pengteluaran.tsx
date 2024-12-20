import axios from 'axios';
import React, { useEffect, useState } from 'react';

type PengeluaranOkt = {
  month: string;
  totalPengeluaranPerbulan: number;
  Pengeluaran: {
    nama_petugas: string;
    pengeluarans: {
      nama_produk: string;
      stok: number;
      harga_satuan: number;
      total: number;
    }[];
  }[];
};

function PengeluaranOkt() {
  const [data, setData] = useState<PengeluaranOkt | null>(null); // Inisialisasi dengan null

  useEffect(() => {
    getPengeluaranOkt();
  }, []);

  async function getPengeluaranOkt() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/report?bulan=10&tahun=2024`;
    try {
      const res = await axios.get<PengeluaranOkt>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data total.");
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
      {data ? (
        <div>
          <div className="bg-white mt-[2%] py-2 rounded-xl ms-[4%] w-[40%] h-[180px]">
            <p className="text-[10px] ms-[3%]">
              pengeluaran di bulan <span className="text-[#28AFF8]">{data.month}</span>
            </p>
            <div className="flex my-[12%] justify-center">
              <p className="text-[36px]">{data.totalPengeluaranPerbulan}</p>
            </div>
          </div>
          <p className="text-[20px] translate-x-[80%]">{data.Pengeluaran[0].nama_petugas}</p>
          <hr className="border-t-2 border-[#00000069] mx-8 mt-3" />
          <div className="flex-col flex space-x-[40%] mx-8 mt-[4%]">
            <div className=" flex relative">
              <p className="font-bold text-[20px]">Barang</p>
              <p className="font-bold text-[20px] ms-[300px]">Harga</p>
            </div>
            {data.Pengeluaran && data.Pengeluaran.length > 0 ? (
              data.Pengeluaran[0].pengeluarans.map((item: any, id: number) => (
                <div className="flex -translate-x-[66%]" key={id}>
                  <div className="flex-col">
                    <div className="flex-col mt-[8%]">
                      <p className="text-[20px]">{item.nama_produk} {item.stok}</p>
                    </div>
                  </div>
                  <div className="flex-col ms-[50%]">
                    <div className="flex-col mt-[13%]">
                      <p className="text-[20px]">{formatHarga(item.total)}</p>
                    </div>
                  </div>
                </div>
              ))) : (
                <p>g vada data</p>     
            )}
          </div>
            <div className="flex relative left-10 bottom-0">
              <p className="font-bold text-[20px] mt-[5%]">Total</p>
              <p className="font-bold text-[20px] mt-[5%] absolute left-[38%]">{formatHarga(data.totalPengeluaranPerbulan)}</p>
            </div>
        </div>
      ) : (
        <p>Tidak ada data</p>
      )}
    </div>
  );
}

export default PengeluaranOkt;
