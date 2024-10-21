import React from 'react'
import Image from 'next/image';
function page() {
  return (
    <div className="min-h-screen bg-[#DBFFF6]">
      <div className='px-20 translate-y-8'>
        <Image
          src="/icon/backk.svg"
          alt={"daun"}
          width={40}
          height={40}
        />
        <Image
          src="/icon/logo ornatredec.svg"
          className='mt-5 w-full h-full'
          alt={"daun"}
          width={200}
          height={200}
        />
      </div>
      <div className='flex flex-row'>
        <div>Produk</div>
        <div>dewudbweiu</div>
      </div>
    </div>
  );
}

export default page
