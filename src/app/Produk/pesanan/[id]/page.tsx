"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Komentar from "../../komentar/page";
import { useKeranjang } from "../../keranjang/keranjangContext";
import { Produk, Subvariasi } from "../types";

const DetailPesanan = () => {
  const { id } = useParams();
  const { id_subvariasi } = useParams();
  const router = useRouter();
  // const { tambahProdukKeKeranjang } = useKeranjang();
  const [produk, setProduk] = useState<Produk | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hargaTerpilih, setHargaTerpilih] = useState<number | null>(null);
  const [subvariasiDipilih, setSubvariasiDipilih] = useState<any>(null);
  const [id_produkpesan, set_produkpesan] = useState<any>();
  const [id_subvariasipesan, set_id_subvariasipesan] = useState<any>();
  // const [jumlahStokpesan, set_jumlahStokpesan] = useState<any>();
  const [id_produkkeranjang, set_keranjang] = useState<any>();
  const [id_subvariasikeranjang, set_id_subvariasikeranjang] = useState<any>();
  const [jumlahStokkeranjang, set_jumlahStokkeranjang] = useState<any>();

  useEffect(() => {
    if (id_subvariasi) {
      set_id_subvariasipesan(id_subvariasi);
    }
    fetchDetailProduct(id);
    set_produkpesan(id);
    console.log(id);
  }, [id, id_subvariasi]);

  useEffect(() => {
    set_id_subvariasikeranjang(id_subvariasi);
    set_jumlahStokkeranjang(jumlah);
    set_keranjang(id);
  }, [id_subvariasi]);

  async function tambahkeranjang() {
    if (!subvariasiDipilih) {
      alert("Harap pilih subvariasi terlebih dahulu.");
      return;
    }

    const url = `${process.env.NEXT_PUBLIC_URL}api/troli`;

    try {
      const response = await axios.post(
        url,
        {
          id_produk: id_produkkeranjang,
          id_subVariasi: subvariasiDipilih.id,
          jumlahStok: jumlahStokkeranjang,
        },
        { withCredentials: true }
      );
      if (response.status === 202) {
        alert("Produk berhasil ditambahkan ke keranjang!");
        router.push("/Produk/keranjang");
      }
      console.log(id_produkkeranjang);
      console.log(id_subvariasikeranjang);
    } catch (error) {
      console.error("Error menambahkan ke keranjang:", error);
    }
  }
const [produkCookie, setProdukcookie] = useState<any>();

  async function tambahkepesan() {
    if (!subvariasiDipilih || produk?.jumlah === 0) {
      alert("Produk tidak dapat dibeli karena stok habis.");
      return;
    }

    const url = `${process.env.NEXT_PUBLIC_URL}api/transaksiSatu`;
    console.log(id_produkpesan);
    console.log(id_subvariasipesan);
    try {
      const response = await axios.post(
        url,
        {
          metode_transaksi: "online",
          id_produk: id_produkpesan,
          jumlah: jumlah,
          id_subvariasi: subvariasiDipilih.id,
        },
        { withCredentials: true }
      );
setProdukcookie(response.data.produk)
      console.log("Response:", response.data);
      {
        router.push(`/Produk/pesanan/checkout/${response.data.id}`);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  }

  // useEffect(() => {
  //   set_produk(id);
  //   if (typeof id === "string") {
  //     tambahkepesan();
  //   }
  //   console.log(id);
  // }, [id]);

  const fetchDetailProduct = async (produkId: any) => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getProdukId/${produkId}`;
    console.log("fetch", produkId);
    try {
      const response = await axios.get(url, { withCredentials: true });
      setProduk(response.data);
      console.log(response.data);
      setHargaTerpilih(response.data.harga); // Set harga awal sesuai dengan produk utama
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError("Terjadi kesalahan saat mengambil detail produk.");
    } finally {
      setLoading(false);
    }
  };

  const [jumlah, setJumlah] = useState(1);
  const tambahJumlah = () => setJumlah((prev) => prev + 1);
  const kurangiJumlah = () => setJumlah((prev) => (prev > 1 ? prev - 1 : 1));

  const handleVariasiClick = (subvariasi: Subvariasi) => {
    setHargaTerpilih(subvariasi.harga);
    setSubvariasiDipilih(subvariasi);
    console.log("Subvariasi dipilih:", subvariasi);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!produk) return <div>Produk tidak ditemukan.</div>;

  return (
    <div className="bg-[#DBFFF6] h-auto">
      <div className="bg-white w-[80%] mx-auto pb-[20%]">
        <div className="grid grid-cols-2">
          <div>
            <img
              className="mx-auto mt-5 h-[125%] w-[65%] rounded cursor-pointer"
              src={`https://74gslzvj-8000.asse.devtunnels.ms${produk.foto_produk}`}
              alt={produk.judul_produk}
            />
          </div>
          <div>
            <div className="mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4">{produk.judul_produk}</h1>
              <p className="text-2xl font-bold text-[#FF0A0A] pt-6">
                Rp. {hargaTerpilih ?? produk.harga}
              </p>
              {produk.variasis.map((variasi) => (
                <div key={variasi.id} className="pt-4">
                  <p className="text-xl font-medium">
                    Variasi: {variasi.nama_variasi}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {variasi.subvariasis.map((subvariasi) => (
                      <button
                        key={subvariasi.id}
                        onClick={() => handleVariasiClick(subvariasi)}
                        className={`px-3 py-1 rounded hover:bg-gray-300 transition-colors duration-200 ${
                          subvariasiDipilih?.id === subvariasi.id
                            ? "bg-green-400 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {subvariasi.nama_sub_variasi} - Rp. {subvariasi.harga}
                      </button>
                    ))}
                  </div>
                  <div className="items-center translate-y-8 border-black">
                    <button
                      onClick={kurangiJumlah}
                      className="px-3 py-2 bg-green-600 text-white rounded"
                    >
                      -
                    </button>
                    <span className="px-4">{jumlah}</span>
                    <button
                      onClick={tambahJumlah}
                      className="px-3 py-2 bg-green-600 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row translate-y-[500%]">
              {/* <Link > */}
              <button
                onClick={() => {
                  if (produk?.jumlah === 0) {
                    alert("Stok habis, produk tidak dapat dibeli.");
                    return;
                  }
                  tambahkepesan();
                }}
              >
                {/* <Link href={`/pesanan/checkout/${produk.id}`}> */}
                <button className="text-white bg-green-500 rounded-lg py-2 px-[150%] ml-2 h-[100%]">
                  <span className="text-white flex flex-row">
                    Beli<span className="pl-1">sekarang</span>
                  </span>
                </button>
                {/* </Link> */}
              </button>
              {/* </Link> */}
              <button
                onClick={() => tambahkeranjang()}
                className={`text-white bg-green-500 rounded-lg py-2 px-[5%] ml-2 translate-x-[350%] 
                ${!subvariasiDipilih ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!subvariasiDipilih}
              >
                <Image
                  src="/icon/troli.svg"
                  width={35}
                  height={35}
                  alt="logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[80%]">
        <div className="mt-[10%] py-2 bg-[#28DF99] text-[30px] font-semibold text-white pl-4">
          Deskripsi Produk
        </div>
        <div className="bg-white min-h-screen pl-4 pt-4">
          {produk.deskripsi_produk}
        </div>
      </div>
      <div className="mt-[10%]">
        <Komentar />
      </div>
    </div>
  );
};

export default DetailPesanan;
  