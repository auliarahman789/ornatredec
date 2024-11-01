"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import router, { useRouter } from "next/compat/router";
import Link from "next/link";
import axios from "axios";
import back from "../../../../../../public/icon/Arrow_left.svg";
import next from "../../../../../../public/icon/Expand_left.svg";
import Loadingstatus from "@/components/super admin/loadingStatus";
type Pesanan = {
  id: number;
  status: string;
  statusPembayaran: string;
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
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Mengambil data dari kedua API dalam satu useEffect
  useEffect(() => {
    getPesanan();
  }, []);

  async function getPesanan() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/TransaksiFilter`;
    try {
      const res = await axios.get<Pesanan[]>(url, {
        withCredentials: true,
      });
      setData(res.data);
    } catch (error) {
      console.error("Error in getPesanan:", error);
      alert("Terjadi kesalahan saat mengambil data daftar kirim.");
    }
  }

  async function kirimStatus() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/dipesanAll`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      // Jika ingin melakukan sesuatu dengan res.data, lakukan di sini
      console.log("Data dari kirimStatus:", res.data);
      setIsLoading(false);
      getPesanan();
    } catch (error) {
      console.error("Error in kirimStatus:", error);
      alert("Terjadi kesalahan saat mengubah status pesanan.");
    }
  }

  // Mengubah semua checkbox
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allChecked = data.map((item) => item.id);
      setCheckedItems(allChecked);
      console.log("ID yang diambil:", allChecked);
    } else {
      setCheckedItems([]);
      console.log("Tidak ada data untuk konfirmasi");
    }
  };

  // Mengubah checkbox individu
  // const handleCheckboxChange = (id: number) => {
  //   setCheckedItems((prev) => {
  //     if (prev.includes(id)) {
  //       return prev.filter((itemId) => itemId !== id);
  //     } else {
  //       return [...prev, id];
  //     }
  //   });
  //   console.log('id ke' + id);
  //   console.log('check' + checkedItems);
  // };

  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };

  const handleBack = () => {
    router?.push("/Superadmin/Produk/pesanan");
  };

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
              <p
                onClick={handleBack}
                className="text-[23px] cursor-pointer font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-6 inline-block text-transparent bg-clip-text"
              >
                Produk
              </p>
              <Image
                src={next}
                width={17}
                height={17}
                className="ms-2"
                alt="next"
              />
              <p
                onClick={handleBack}
                className="text-sm cursor-pointer font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-1 mt-2 inline-block text-transparent bg-clip-text"
              >
                Pesanan
              </p>
              <Image
                src={next}
                width={17}
                height={17}
                className="ms-2"
                alt="next"
              />
              <p className="text-sm font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-1 mt-2 inline-block text-transparent bg-clip-text">
                Daftar Kirim
              </p>
            </div>
          </div>
          <div className="flex relative space-x-[35%] mt-[4%] ms-[3%]">
            {/* <div className="flex-col -translate-y-[50%]">
              <div className="flex space-x-[4%]">
                <Image src={sudahBayar} width={15} height={15} alt="sudah bayar"/>
                <p className="whitespace-nowrap">Sudah Bayar</p>
              </div>
              <div className="flex space-x-[4%]">
              <Image src={belumBayar} width={15} height={15} alt="belum bayar"/>
              <p className="whitespace-nowrap">Belum Bayar</p>
              </div>
            </div> */}
            <div className="absolute right-[30%] flex-col">
              <div className="flex space-x-6">
                <label htmlFor="Konfirmasi">
                  Konfirmasi semua pesanan untuk dikirim
                </label>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="appearance-none h-5 w-5 me-2 border-2 border-[#3F9272] rounded-md checked:bg-[#3F9272] relative checked:before:content-['✔']
                   checked:before:text-white checked:before:absolute checked:before:left-[3px] checked:before:text-sm"
                />
              </div>
              {selectAll === true ? (
                <button
                  onClick={kirimStatus}
                  className="bg-[#3F9272] translate-x-28 w-20 text-sm font-light pt-[0.5px] text-white rounded-md"
                >
                  {isLoading ? "Loading..." : "Konfirmasi"}
                </button>
              ) : (
                ""
              )}{" "}
              {isLoading && <Loadingstatus />}
            </div>
          </div>
          <div className="flex-col space-y-[1%] flex mt-[1%] translate-x-[4%]">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="flex space-x-[4.5%]">
                  <img
                    src={
                      item.produk.foto_produk
                        ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                          item.produk.foto_produk
                        : ""
                    }
                    className="rounded-full w-[70px] h-[70px]"
                    height={70}
                    width={70}
                    alt="foto pesanan"
                  />
                  <div className="flex-col mt-[1%] w-[12%]">
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
                  <p className="text-12px font-semibold mt-[2%] whitespace-nowrap w-[8%]">
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
                  <Link
                    href={`/Superadmin/Produk/pesanan/daftar/detail/${item.id}`}
                  >
                    <button className="bg-gradient-to-b h-6 rounded-full translate-y-7 pt-1 pb-2 px-3 from-[#308967] to-[#06612B] text-white text-[13px]">
                      Lihat
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="mx-[25%] my-[10%]">
                Tidak ada pesanan untuk dikirim.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
