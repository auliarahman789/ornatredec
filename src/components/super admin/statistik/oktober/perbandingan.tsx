import axios from 'axios';
import React, { useEffect, useState } from 'react'
type Diagram = {
  year: string;
  monthlyStatistics: {
    month: string;
    totalTransactions: number;
    totalSubTotal: number;
    totalServiceFee: number;
    totalPayment: number;
    transaksi_produk: number;
    ProdukTanaman: number;
    totalTanaman: number;
    ProdukIkan: number;
    totalIkan: number;
    ProdukBurung: number;
    totalBurung: number;
    perbandingan: number;
  }[]
  // totalProdukTerjual: number,
  // totalProdukTanaman: number,
  // totalProdukIkan: number,
  // totalProdukBurung: number,
  // totalHargaTanaman: number,
  // totalHargaBurung: number,
  // totalHargaIkan: number,
  //   currentMonth: {
  //     month: 10;
  //     year: 2024;
  //     totalTransaksi: number;
  //     totalSubTotal: number;
  //     totalBiayaLayanan: number;
  //     totalPembayaran: number;
  //   },
  //   previousMonth: {
  //     month: 9;
  //     year: 2024;
  //     totalTransaksi: number;
  //   },
  //   comparison: {
  //     totalTransactionsDifference: number;
  //   };
  }
function Perbandingan() {
        const [data, setData] = useState<Diagram | null>();
        const formatHarga = (itung: number) => {
          return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(itung);
        };
      
        useEffect(() => {
          getDiagram();
        }, []);
        async function getDiagram() {
          const url = `${process.env.NEXT_PUBLIC_URL}api/statistics/yearly/2024`;
          try {
            const res = await axios.get<Diagram>(url, {
              withCredentials: true,
            });
            setData(res.data);
            console.log(
              res.data);
          } catch (error: any) {
            console.log(error);
            alert("Terjadi kesalahan saat mengambil data total perbandingan produk.");
          }
        }
  return (
      <div className='relative'>
          {data &&
          <div className="absolute -translate-y-[70%] right-[7%]">  
          <div className="h-[90%] -translate-x-14 w-[10px] bg-white"></div>
          {/* Div baru di sebelah kanan garis */}
          <div className="mt-[10%] text-center text-white text-[36px] font-semibold">
            Desember {data.year}
          </div>
          <div className="bg-white p-[5%] right-[10%] top-[18%] h-[30%] w-[100%] rounded-3xl justify-center items-center">
                      {data.monthlyStatistics[11].perbandingan > 0 ? 
                          <p className="mt-2 text-[#3DAFEF] text-[64px] text-center">
                              {data.monthlyStatistics[11].perbandingan}</p>
            :
            <p className="mt-2 text-red-500 text-[64px] text-center">{data.monthlyStatistics[11].perbandingan}</p>
          }
            <div className="text-[#3FDEBE] text-[12px] ms-[1%] text-center leading-tight">
              Penjualan dari <br />
              bulan sebelumnya
            </div>
          </div>
          <p className=" -translate-x-[5%] mt-[7%] text-white text-[12px]">
            Total terjual : <span>{data.monthlyStatistics[11].transaksi_produk}</span>
          </p>

          <div className="text-white grid grid-cols-2 mt-[10%] -translate-x-[5%] h-[20%]">
            <div className="col-span-1  text-[15px] space-y-3">
              Tanaman : <span>{data.monthlyStatistics[11].ProdukTanaman}</span>
              <div>
                Ikan    : <span>{data.monthlyStatistics[11].ProdukIkan}</span>
              </div>
              <div>
                Burung : <span>{data.monthlyStatistics[11].ProdukBurung}</span>
              </div>
            </div>
            <div className="col span-2 text-[15px] space-y-3 ms-[24%]">
              <div>{formatHarga(data.monthlyStatistics[11].totalTanaman)}</div>
              <div>{formatHarga(data.monthlyStatistics[11].totalIkan)}</div>
              <div>{formatHarga(data.monthlyStatistics[11].totalBurung)}</div>
            </div>
          </div>

          <div className="flex text-white text-[15px] mt-[10%] -translate-x-[5%] h-[10%] items-center">
            <p className='whitespace-nowrap font-bold'>TOTAL :</p>
            <p className='ms-[35%] font-bold'>{formatHarga(data.monthlyStatistics[11].totalSubTotal)}</p>
          </div>

          {/* Teks di atas div putih */}
          </div>
          }
    </div>
  )
}

export default Perbandingan