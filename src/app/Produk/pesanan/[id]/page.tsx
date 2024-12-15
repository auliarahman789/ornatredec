"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
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

      console.log("Response:", response.data);
      {
        router.push("/Produk/pesanan/checkout");
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Apakah Anda Yakin?
        </h2>
        <p className="mb-6">Selesaikan pembayaran ini dengan klik Konfirmasi</p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#6F6D6D] rounded"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-[#3F9272] rounded"
          >
            Konfirmasi
          </button>
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
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState<any>();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { id } = useParams();
  // Fungsi untuk pergi kembali ke halaman sebelumnya
  const handleGoBack = () => {
    // SEKALIAN BENERIN BACK AMBIL ID
    router.push(`/Produk/pesanan/${id}`);
  };

  // Fungsi untuk membuka popup
  const handleCheckoutClick = () => {
    setIsPopupOpen(true);
  };

  // Fungsi untuk menutup popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Fungsi untuk mengonfirmasi checkout
  const handleConfirmCheckout = () => {
    setIsPopupOpen(false);
    alert("Checkout berhasil!");
    // Anda bisa menambahkan logika checkout API di sini
  };

  // Mengambil data produk dari API
  const getProduk = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getProdukId/${id}`;
    try {
      const res = await axios.get<Produk>(url, { withCredentials: true });
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Failed to fetch produk data", error);
    }
  };

  useEffect(() => {
    getProduk();
  }, []);
  const formatHarga = (itung: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(itung);
  };
  return (
    <div className="bg-[#E5FFF9] min-h-screen">
      <button
        onClick={handleGoBack}
        className="ml-[7%] cursor-pointer translate-y-10 h-[50px] w-[50px]"
      >
        <Image
          src="/icon/backk.svg"
          alt="Back Icon"
          width={390}
          height={390}
          className=""
        />
      </button>
      <Image
        src="/icon/ornatredecc.svg"
        alt="Ornament Icon"
        width={390}
        height={390}
        className="ml-[7%] translate-y-20 h-[150%] w-[80%]"
      />
      {/* IZIN UBAH STYLE */}
      <div className="flex flex-col gap-2">
        <div className="mt-[7%] ml-[7%] mr-[7%] py-2 grid grid-cols-[48%_13%_13%_13%_13%] bg-[#28DF99] font-semibold text-white pl-4">
          <div className="whitespace-nowrap">Produk</div>
          <div className="whitespace-nowrap">Harga Satuan</div>
          <div className="whitespace-nowrap">Warna</div>
          <div className="whitespace-nowrap">Usia</div>
          <div className="whitespace-nowrap">Jumlah</div>
        </div>
        {/* Display Produk */}
        {data ? (
          <div className="grid grid-cols-[48%_13%_13%_13%_13%] justify-center items-center mt-[2%] ml-[7%] mr-[7%] py-[2rem] bg-[#F3FFFB] font-semibold text-white">
            <div className="flex justify-center gap-2 w-full ">
              <div className="relative size-[100px]">
                <Image
                  className="object-cover object-center rounded-md"
                  src={
                    data.foto_produk
                      ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                        data.foto_produk
                      : ""
                  }
                  alt="Produk"
                  fill
                />
              </div>
              <div className="self-start text-black text-2xl">
                <p>{data.judul_produk}</p>
                <p className="text-xs">RATING DISINI</p>
              </div>
            </div>
            {/* JSON NYA GA ADA HARGA WARNA USIA SESUAI UI/UX */}
            <p className="text-[#828382]">{data.harga}</p>
            <p className="text-[#828382]">warna</p>
            <p className="text-[#828382]">usia</p>
            <p className="text-[#828382]">
              {(data as any).jumlahProduk ? (data as any).jumlahProduk : 0}
            </p>
          </div>
        ) : (
          <p>Loading produk...</p>
        )}
        <Image
          src="/icon/lokasi.svg"
          alt="Lokasi Icon"
          width={30}
          height={30}
          className="translate-y-[350%] ml-[11%]"
        />
      </div>
      <div className="mt-[2%] ml-[7%] mr-[7%] py-10 bg-[#F3FFFB]">
        <div className="bg-white py-10 rounded ml-[3%] mr-[3%] text-[#00663F] text-2xl border-2 p-5 border-[#00663F]">
          Jl.Melong Tengah No 12 RW.05 RT.03
        </div>
        <Link href="/Produk/editalamat">
          <button className="text-white bg-[#139663] rounded px-3 ml-[90%] -translate-y-24">
            Edit
          </button>
        </Link>
      </div>
      <div className="mt-[4%] ml-[7%] mr-[7%] py-2 bg-[#28DF99] text-2xl font-semibold text-white pl-4">
        Metode Pembayaran
      </div>
      <div className="ml-[7%] mr-[7%] py-3 bg-[#F3FFFB]">
        <div className="bg-white my-[10px] mx-[10px] h-[300px] shadow-[3px_3px_3px] shadow-[#0000002e]">
          <div className="flex flex-row">
            <Image
              src="/img/bca.png"
              alt="BCA"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/bni.png"
              alt="BNI"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/mandiri.png"
              alt="Mandiri"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
            <Image
              src="/img/bri.png"
              alt="BRI"
              width={170}
              height={170}
              className="ml-[3%] mt-[3%]"
            />
          </div>
        </div>
      </div>
      {/* Komponen lainnya */}
      <div className="mt-[2%] ml-[7%] mr-[7%] py-6 bg-[#F3FFFB] font-semibold text-[#00663F]">
        <div className="ml-[3%] bg-white rounded mr-[3%] text-[#00663F] h-80 border-2 p-10 border-[#00663F]">
          <p className="ml-1 text-2xl">Subtotal</p>
        </div>
        <p className="-translate-y-60 pl-[7%] text-2xl">
          Total Biaya Pengiriman
        </p>
        <p className="text-2xl pl-[7%] -translate-y-60">Biaya Layanan</p>
        <div className="-translate-y-48 text-2xl pl-[4%] border-2 border-[#00663F] mr-[3%] ml-[3%]">
          Total Pembayaran
        </div>
        <button
          className="text-white bg-[#FF0A0A] rounded px-6 py-2 ml-[80%] -translate-y-40"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      </div>
      <CheckoutPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onConfirm={handleConfirmCheckout}
      />
    </div>
  );
};

export default Page;
