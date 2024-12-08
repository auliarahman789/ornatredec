import React from 'react'
import Image from 'next/image';

function page() {
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
      <div className="ml-[7%] mr-[7%] h-[200%] py-20 bg-[#F3FFFB] font-semibold text-white">
        <p className="text-[#04975F] mt-[10%] ml-10 text-2xl">Info Pengiriman</p>
        <Image
          src="/icon/mobil.svg"
          alt="Back Icon"
          width={50}
          height={50}
          className="ml-8"
        />
        <Image
          src="/img/hitam.png"
          className="-translate-y-5 ml-24"
          alt={"daun"}
          width={150}
          height={150}
        />
        <p className="text-[#04975F] ml-10 text-2xl">Rincian pembayaran</p>
        <div className="ml-[3%] bg-white rounded mr-[3%] text-[#00663F] h-80 border-2 p-10 border-[#00663F]">
          <p className="ml-1 text-2xl">Subtotal</p>
          <p className="ml-1 text-2xl">Total biaya pemgiriman</p>
          <p className="ml-1 text-2xl">Biaya layanan</p>
        </div>
        <div className="border bg-[#28DF99] text-white cursor-pointer text-center mt-8 p-3 rounded mr-[2%] ml-[2%]">
          Beri nilai
        </div>
      </div>
    </div>
  );
}

export default page
