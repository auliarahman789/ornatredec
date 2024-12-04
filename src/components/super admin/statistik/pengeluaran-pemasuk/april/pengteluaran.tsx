import axios from 'axios';
import React, { useEffect, useState } from 'react';

type PengeluaranApril = {
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

function PengeluaranApril() {
  const [data, setData] = useState<PengeluaranApril | null>(null);

  useEffect(() => {
    getPengeluaranApril();
  }, []);

  async function getPengeluaranApril() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/report?bulan=4&tahun=2024`;
    try {
      const res = await axios.get<PengeluaranApril>(url, {
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
      {data ? (
        <div>
          <div className="bg-white mt-[2%] py-2 rounded-xl ms-[4%] w-[40%] h-[180px]">
            <p className="text-[10px] ms-[3%]">
              Pengeluaran di bulan <span className="text-[#28AFF8]">{data.month}</span>
            </p>
            <div className="flex my-[12%] justify-center">
              <p className="text-[36px]">{formatHarga(data.totalPengeluaranPerbulan)}</p>
            </div>
          </div>

          {data.Pengeluaran.map((petugas, index) => (
            <div key={index}>
              <p className="text-[20px] translate-x-[80%]">{petugas.nama_petugas}</p>
              <hr className="border-t-2 border-[#00000069] mx-8 mt-3" />
              <div className="flex-col flex space-x-[40%] mx-8 mt-[4%]">
                <div className="flex relative">
                  <p className="font-bold text-[20px]">Barang</p>
                  <p className="font-bold text-[20px] ms-[300px]">Harga</p>
                </div>

                {/* Map pada pengeluarans di setiap petugas */}
                {petugas.pengeluarans.length > 0 ? (
                  petugas.pengeluarans.map((item, id) => (
                    <div className="flex -translate-x-[66%]" key={id}>
                      <div className="flex-col">
                        <div className="flex-col mt-[8%]">
                          <p className="text-[20px]">
                            {item.nama_produk} {item.stok}
                          </p>
                        </div>
                      </div>
                      <div className="flex-col ms-[50%]">
                        <div className="flex-col mt-[13%]">
                          <p className="text-[20px]">{formatHarga(item.total)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Tidak ada data pengeluaran</p>
                )}
              </div>
            </div>
          ))}

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

export default PengeluaranApril;
