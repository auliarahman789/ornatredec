"use client";
import React, { useEffect, useState } from "react";
import contoh from "../../../../../../../public/img/daun puring 1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useParams } from "next/navigation";

type DetailPesanan = {
  jumlah: number;
  status: string;
  statusPembayaran: string;
  produk: {
    judul_produk: string;
    harga: number;
    kategori_produk: string;
    foto_produk: string;
  };
  alamat: {
    nama_penerima: string;
    jalan_namagedung: string;
    rtrw: string;
    provinsi: string;
    kota_kabupaten: string;
    kecamatan: string;
    kelurahan_desa: string;
  };
};

function Page() {
  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };

  const { id } = useParams();
  const [data, setData] = useState<DetailPesanan | null>(null);

  useEffect(() => {
    getDetailPesanan();
  }, []);

  async function getDetailPesanan() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getDetail/${id}`;
    try {
      const res = await axios.get<DetailPesanan>(url, {
        withCredentials: true,
      });  
      setData(res.data);
      console.log("data yang diterima: ", res.data);
      console.log("status:", res.data.status);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data detail pesanan");
    }
  }
  const router = useRouter();
  async function KemasStatus() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/dipesanByid/${id}`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      await getDetailPesanan(); 
      console.log("Status setelah Kemas:", data?.status);  
      alert("pesanan berhasil dikemas");
      router?.push("/Superadmin/Produk/pesanan");
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengirim status");
    }
  }

  return (
    <div className="overflow-x-hidden">
      <div className="flex">
        {data && (
          <><div className="flex w-[65%] min-h-screen mx-[15%]">
            <div className="w-[25%] min-h-screen bg-gradient-to-b from-[#178267] to-[#28DFB1] fixed">
              <div className="mt-[18%] mx-[26%]">
                <p className="text-white font-medium text-[23px] whitespace-nowrap">
                  Detail Produk
                </p>
                <div className="w-[160px] h-[200px] mt-[60%] bg-white rounded-xl border-[1.5px] border-[#A9A7A7] -translate-x-2">
                  <a href="#">
                    <img
                      className="mx-auto mt-5 h-[55%] w-[85%]"
                      alt="Produk Gambar"
                      width={200}
                      height={200}
                      src={"https://74gslzvj-8000.asse.devtunnels.ms" +
                        data.produk.foto_produk} />
                  </a>
                  <div className="px-4 py-2">
                    <h5 className="text-sm font-semibold text-black">
                      {data.produk.judul_produk}
                    </h5>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-bold text-[#FF0A0A]">
                        {formatHarga(data.produk.harga)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[72%] bg-[#FAFAFA] bg-fixed translate-x-[51%] flex flex-col space-y-[3%] shadow-[#00000040] shadow-[7px_0px_8px_-5px] p-[5%]">
              <div className="space-y-[1%]">
                <p className="text-[#18856A] text-[15px]">Nama Produk</p>
                <p className="text-[18px]">{data.produk.judul_produk}</p>
              </div>
              <div className="space-y-[1%]">
                <p className="text-[#18856A] text-[15px]">Kategori Produk</p>
                <p className="text-[18px]">{data.produk.kategori_produk}</p>
              </div>
              <div className="space-y-[1%]">
                <p className="text-[#18856A] text-[15px]">Jumlah pcs</p>
                <p className="text-[18px]">{data.jumlah}</p>
              </div>
              <div className="space-y-[1%]">
                <p className="text-[#18856A] text-[15px]">Nama Pembeli</p>
                <p className="text-[18px]">{data?.alamat?.nama_penerima}</p>
              </div>
              <div className="space-y-[1%]">
                <p className="text-[#18856A] text-[15px]">Alamat Pembeli</p>
                <p className="text-[#00663F] font-bold text-[16px]">
                  {data?.alamat?.jalan_namagedung +
                    " " +
                    data?.alamat?.rtrw +
                    " " +
                    data?.alamat?.kelurahan_desa +
                    " " +
                    data?.alamat?.kecamatan +
                    " " +
                    data?.alamat?.kota_kabupaten +
                    " " +
                    data?.alamat?.provinsi}
                </p>
              </div>
              <div className="space-y-[1%] pt-[10%]">
                <p className="text-[#18856A] text-[15px]">Ongkos Kirim</p>
                <p className="text-[#00663F] font-bold text-[16px]">-</p>
              </div>
              <div className="space-y-[1%]">
                <p className="text-[#18856A] text-[15px]">Total Pembayaran</p>
                <p className="text-[#00663F] font-bold text-[16px]">
                  {formatHarga(data.produk.harga)}
                </p>
              </div>
              <div className="space-y-[1%]">
                <p className="text-[#18856A] text-[15px]">Status</p>
                <div className="flex space-x-[14%]">
                  {data.statusPembayaran === "success" ? (
                    <div className="flex space-x-4">
                      <input
                        type="radio"
                        name="status bayar"
                        value="Sudah bayar"
                        id="Sudah bayar"
                        readOnly
                        checked />
                      <label htmlFor="Sudah bayar">Sudah bayar</label>
                    </div>
                  ) : (
                    <div className="flex space-x-4">
                      <input
                        type="radio"
                        name="status bayar"
                        value="cod"
                        id="cod"
                        readOnly
                        checked />
                      <label htmlFor="cod">Belum bayar</label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
            <div className="relative">
              {data.statusPembayaran === "success" ? (
                <p
                  onClick={KemasStatus}
                  className=" cursor-pointer text-[#00663F] absolute -translate-x-[80%] bottom-10 font-bold"
                >
                  Kemas
                </p>
              ) : (
                  ""
              )}
            </div></>
          )}
      </div>
    </div>
  );
}

export default Page;
