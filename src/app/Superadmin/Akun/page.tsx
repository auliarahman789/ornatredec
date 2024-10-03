'use client'
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import Akun from '@/app/components/super admin/akun';
import { usePathname } from 'next/navigation';
import Data from '@/app/components/super admin/datapengguna';

function Page() {
  const [active, setActive] = useState('data pengguna'); 
  return (
    <div className='overflow-x-hidden min-h-screen '>
      <div className='translate-x-64 pt-[2%]'>
        <div className="flex">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
          {active === 'akun' ? 'Akun Pengelola' : 'Data Pengguna'}
          </div>
          <div className='mt-4 ms-[4%] space-x-4'>
            <button
              onClick={() => setActive('data pengguna')}
              className={`text-[17px] px-5 pt-1 text-[#308967] border-[#3F9272] border-[1.5px] rounded-full ${active === 'data pengguna' ? 'bg-gradient-to-b from-[#0D6734] to-[#247E55] text-white' : ''}`}
            >
              Data Pengguna
            </button>

            <button
              onClick={() => setActive('akun')}
              className={`text-[17px] px-5 pt-1 text-[#308967] border-[#3F9272] border-[1.5px] rounded-full ${active === 'akun' ? 'bg-gradient-to-b from-[#0D6734] to-[#247E55] text-white' : ''}`}
            >
              Buat Akun Pengelola
            </button>
          </div>
          </div>
      </div>
          <div className='pb-24'>
          <div className='translate-x-[18%] mt-[2%]'>
              {active === 'data pengguna' && <Data />}
            </div>

            <div className='w-[42%] mx-[18%] translate-x-64 mt-[6%]'>
              {active === 'akun' && <Akun />}
            </div>
          </div>
    </div>
  );
}

export default Page;
