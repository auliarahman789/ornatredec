'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import tambah from '../../../../public/icon/Subtract (1).svg'
import Tanamanproduk from '@/app/components/super admin/tanamanproduk';
import Burungproduk from '@/app/components/super admin/burungproduk';
import Ikanproduk from '@/app/components/super admin/ikanproduk';
import Link from 'next/link';

function Page() {
  const [activeProduk, setActiveProduk] = useState('Tanaman Hias');  
  return (
    <div className='overflow-x-hidden min-h-screen '>
      <div className='translate-x-64 pt-[2%]'>
        <div className='flex'>
          <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
            Produk
          </div>
          <div className='mt-5 ms-[5%] space-x-3'>
            <button
                onClick={() => setActiveProduk('Tanaman Hias')}
                className={`text-sm px-3 pt-1 text-[#308967] rounded-full ${activeProduk === 'Tanaman Hias' ? 'bg-gradient-to-b from-[#0D6734] to-[#247E55] text-white' : ''}`}
              >
                Tanaman Hias
              </button>
            <button
                onClick={() => setActiveProduk('Ikan Hias')}
                className={`text-sm px-3 pt-1 text-[#308967] rounded-full ${activeProduk === 'Ikan Hias' ? 'bg-gradient-to-b from-[#0D6734] to-[#247E55] text-white' : ''}`}
              >
                Ikan Hias
            </button>
            <button
                onClick={() => setActiveProduk('Burung Hias')}
                className={`text-sm px-3 pt-1 text-[#308967] rounded-full ${activeProduk === 'Burung Hias' ? 'bg-gradient-to-b from-[#0D6734] to-[#247E55] text-white' : ''}`}
              >
                Burung Hias
              </button>
          </div>
              <button
                    onClick={() => setActiveProduk('pesanan')}
                    className={`text-lg px-3 pt-1 mt-5 ms-[28.5%] text-[#308967] rounded-full`}
                  > Pesanan
                </button>
        </div>
        <div className='mt-[2%] bg-[#E4FFF2] min-h-screen w-[73%] rounded-md relative translate-x-10'>
          <Link href='/Superadmin/Produk/tambah'>
            <button
                    className='text-sm px-3 pt-1 absolute right-4 top-4 flex text-[#308967] rounded-full'
                  ><Image src={tambah} className='me-2' width={16} height={16} alt='tambah'/>
                    Tambah Produk
            </button>
          </Link>
          {activeProduk === 'Tanaman Hias' && <Tanamanproduk />}
          {activeProduk === 'Ikan Hias' && <Ikanproduk />}
          {activeProduk === 'Burung Hias' && <Burungproduk />}
        </div>
    </div>
  </div>
  )
}

export default Page