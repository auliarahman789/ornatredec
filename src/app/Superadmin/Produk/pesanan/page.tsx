'use client'
import React, { useState } from 'react'
import back from '../../../../../public/icon/Arrow_left.svg'
import next from '../../../../../public/icon/Expand_left.svg'
import line from '../../../../../public/icon/Vector 381.svg'
import Image from 'next/image'
import router, { useRouter } from 'next/navigation'
import contoh from '../../../../../public/img/Rectangle 4188.png'

function Page() {
    const router = useRouter();
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        setSelectAll(!selectAll)
    }
    const handleBack = () => {
        router.push('/Superadmin/Produk')
    }
    const handleDaftar = () => {
        router.push('/Superadmin/Produk/pesanan/daftar')
    }

    const handleDetail = () => {
        router.push('/Superadmin/Produk/pesanan/detail')
    }
    const formatHarga = (itung : number) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(itung);
      };
  return (
      <div className='overflow-x-hidden min-h-screen'>
          <div className='translate-x-64'>
          <div className='flex flex-col mt-[2%]'>
                  <Image src={back} onClick={ handleBack } className='ms-[2%]' width={25} height={25} alt='back' />
                  <div className="flex mt-[0.5%] space-x-[52%]">
                      <div className='flex'>
                        <p className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-6 inline-block text-transparent bg-clip-text">
                            Produk
                        </p>
                        <Image src={next} width={17} height={17} className='ms-2' alt='next'/>
                            <p className="text-sm font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-1  mt-2 inline-block text-transparent bg-clip-text">
                            Pesanan
                        </p>  
                      </div>
                    <button className=' w-[90px] px-2 py-1 h-6 mt-1 border-[0.6px] rounded-full border-[#1D764B]' onClick={handleDaftar}>
                          <p className="text-xs font-semibold -translate-y-1 bg-gradient-to-b from-[#00663F] to-[#5CD5A6] inline-block text-transparent bg-clip-text">
                            Daftar Kirim
                            </p> 
                          </button>
                  </div>
                  <div className="flex space-x-[40%] mt-[4%] ms-[7%]">
                  <div className='flex space-x-2'>
                  <Image src={line} className={`${selectAll === true ? '-translate-y-[14px]' : '-translate-y-1'}`} width={60} height={1} alt='line' />
                  <p className='text-[13px]'>
                      Hari ini
                  </p>
                      <Image src={line} className={`${selectAll === true ? '-translate-y-[14px]' : '-translate-y-1'}`} width={60} height={1} alt='line' />
                  </div>
                      <div className='flex flex-col'>
                          <div className="flex space-x-6">      
                          <label htmlFor="cetak">Cetak semua pesanan</label>
                          <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className='me-2' name='cetak' />
                          </div>
                          {selectAll === true ? 
                          <button className='bg-[#3F9272] translate-x-28 w-14 text-sm font-light pt-[0.5px] text-white  rounded-md'>Cetak</button>
                          : ''}
                      </div>
                      </div>
                  <div className="flex space-x-[3%] mt-[1%] mx-[5%]">
                  <input type="checkbox" checked={selectAll} className='me-2' style={{ display: 'none' }} name='cetak' />
                      <Image src={contoh} className='rounded-full' height={70} width={70} alt='foto pesanan' />
                      <div className='flex-col mt-[1%]'>
                          <p className='text-[20px]'>Bunga mawar merah</p>
                          <p className='text-[#FF0A0A] font-medium text-[12px]'>{formatHarga(100000)}</p>
                      </div>
                      <p className='text-12px font-semibold mt-[2%]'>Warna - <span className='text-[#7A7A7A]'>putih</span></p>
                      <p className='text-[20px] mt-[1.7%]'>ahmet gunawan</p>
                      <p className="whitespace-nowrap overflow-x-hidden mt-[2%] max-w-[12%] text-[15px] text-ellipsis"> Jl. Kol Masturi no 525 Jambudipa</p>
                      <button className='bg-gradient-to-b h-6 rounded-full mt-[2%] pt-1 pb-2 px-3 from-[#308967] to-[#06612B] text-white text-[13px]' onClick={handleDetail}>Lihat</button>
                  </div>
                  <div className="flex space-x-[3%] mt-[1%] mx-[5%]">
                  <input type="checkbox" checked={selectAll} style={{ display: 'none' }} className='me-2' name='cetak' />
                      <Image src={contoh} className='rounded-full' height={70} width={70} alt='foto pesanan' />
                      <div className='flex-col mt-[1%]'>
                          <p className='text-[20px]'>Bunga mawar merah</p>
                          <p className='text-[#FF0A0A] font-medium text-[12px]'>{formatHarga(100000)}</p>
                      </div>
                      <p className='text-12px font-semibold mt-[2%]'>Warna - <span className='text-[#7A7A7A]'>putih</span></p>
                      <p className='text-[20px] mt-[1.7%]'>ahmet gunawan</p>
                      <p className="whitespace-nowrap overflow-x-hidden mt-[2%] max-w-[12%] text-[15px] text-ellipsis"> Jl. Kol Masturi no 525 Jambudipa</p>
                      <button className='bg-gradient-to-b h-6 rounded-full mt-[2%] pt-1 pb-2 px-3 from-[#308967] to-[#06612B] text-white text-[13px]' onClick={handleDetail}>Lihat</button>
                  </div>
                  <div className="flex space-x-[40%] mt-[4%] ms-[7%]">
                  <div className='flex space-x-2'>
                  <Image src={line} className='-translate-y-1' width={60} height={1} alt='line' />
                  <p className='text-[13px]'>
                      Kemarin
                  </p>
                      <Image src={line} className='-translate-y-1' width={60} height={1} alt='line' />
                  </div>
                      <div>
                          <input type="checkbox" className='me-2' name='cetak' />
                          <label htmlFor="cetak">Cetak semua pesanan</label>
                      </div>
                      </div>
                  <div className="flex space-x-[3%] mt-[1%] mx-[5%]">
                      <Image src={contoh} className='rounded-full' height={70} width={70} alt='foto pesanan' />
                      <div className='flex-col mt-[1%]'>
                          <p className='text-[20px]'>Bunga mawar merah</p>
                          <p className='text-[#FF0A0A] font-medium text-[12px]'>{formatHarga(100000)}</p>
                      </div>
                      <p className='text-12px font-semibold mt-[2%]'>Warna - <span className='text-[#7A7A7A]'>putih</span></p>
                      <p className='text-[20px] mt-[1.7%]'>ahmet gunawan</p>
                      <p className="whitespace-nowrap overflow-x-hidden mt-[2%] max-w-[12%] text-[15px] text-ellipsis"> Jl. Kol Masturi no 525 Jambudipa</p>
                      <button className='bg-gradient-to-b h-6 rounded-full mt-[2%] pt-1 pb-2 px-3 from-[#308967] to-[#06612B] text-white text-[13px]' onClick={handleDetail}>Lihat</button>
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default Page