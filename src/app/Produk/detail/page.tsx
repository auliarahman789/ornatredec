import React from "react";
import Image from "next/image";
import alamat from "../../../../public/icon/alamat.svg";

function page() {
  return (
    <div className="min-h-screen bg-[#DBFFF6]">
      <div className="px-20 translate-y-8">
        <Image src="/icon/backk.svg" alt={"daun"} width={40} height={40} />
        <Image
          src="/icon/logo ornatredec.svg"
          className="mt-5 w-full h-full"
          alt={"daun"}
          width={200}
          height={200}
        />
      </div>
      <div className="pl-20 pr-20 pt-8">
        <div className="flex flex-row p-4 justify-between bg-[#28DF99] text-white font-bold">
          <span className="text-lg">Produk</span>
          <div className="flex justify-between space-x-20 text-white font-semibold">
            <span>Harga Satuan</span>
            <span>Warna</span>
            <span>Usia</span>
            <span>Jumlah</span>
          </div>
        </div>
      </div>
      <div className="pl-20 pr-20 pt-8">
        <div className="bg-white p-20"></div>
      </div>
      <div className="pl-20 pr-20 pt-8">
        <div className="bg-white p-20"></div>
        <div className="pl-12 pr-12 -translate-y-32">
          <div className="bg-white p-12 border border-[#00663F] rounded-md"></div>
          <div className="-translate-y-[90px] pl-3">
            <Image src={alamat} width={27} height={27} alt="logo" />
          </div>
          <button className="bg-[#00663F] p-1 w-16 h-7 rounded-lg text-white font-semibold -translate-y-[115px] ml-[995px]">
            Edit
          </button>
        </div>
      </div>
      <div className="pl-20 pr-20 -translate-y-28">
        <div className="flex flex-row p-5 bg-[#28DF99] text-white font-semibold text-xl">
          <div>Metode Pembayaran</div>
        </div>
      </div>

      <div className="pl-20 pr-20 pt-8 -translate-y-36">
        <div className="bg-white p-24"></div>
      </div>
      <div className="pl-20 pr-20 pt-8 -translate-y-28">
        <div className="bg-white p-[190px]"></div>
        <div className="-translate-y-11">
          <div className="pl-8 pr-8 -translate-y-[300px]">
            <div className="bg-white p-[150px] border border-[#00663F] rounded-md"></div>
          </div>
          <div className="-translate-y-24">
            <div className="pl-6">
              <p className="text-2xl font-semibold text-[#00663F] -translate-y-[490px] pl-14">
                Subtotal
              </p>
              <p className="text-2xl font-normal text-gray-500 -translate-y-[522px] pl-40">
                (1 Produk)
              </p>
              <p className="text-2xl font-semibold text-[#00663F] -translate-y-[500px] pl-14">
                Total Biaya Pengiriman
              </p>
              <p className="text-2xl font-semibold text-[#00663F] -translate-y-[480px] pl-14">
                Biaya Layanan
              </p>
            </div>
            <div className="text-right pr-20 -translate-y-32 space-y-[15px]">
              <p className="text-2xl font-semibold text-[#00663F] -translate-y-[490px] pl-14">
                Rp 55.000
              </p>
              <p className="text-2xl font-semibold text-[#00663F] -translate-y-[490px] pl-14">
                Rp 10.000
              </p>
              <p className="text-2xl font-semibold text-[#00663F] -translate-y-[490px] pr-4">
                Rp 1.000
              </p>
            </div>
            <div className="border border-gray-700 -translate-y-[590px] ml-8 mr-8"></div>
            <p className="text-2xl font-semibold text-[#00663F] -translate-y-[575px] pl-[80px]">
              Total Pembayaran
            </p>
            <p className="text-2xl font-bold text-red-500 -translate-y-[609px] text-right pr-[78px]">
              Rp 66.000
            </p>
            <div className="border border-gray-700 -translate-y-[590px] ml-8 mr-8"></div>
          </div>
        </div>
      </div>

      <div className="-translate-y-[826px] pl-[1070px]">
        <button className="bg-red-500 text-white font-bold text-xl w-28 h-8 rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default page;
