'use client'
import { useState } from 'react';
import Akunadmin from '@/app/components/super admin/akunadmin';
import Akunkasir from '@/app/components/super admin/akunkasir';
import Link from 'next/link';
import React from 'react';

function Page() {
  const [activeFormulir, setActiveFormulir] = useState('akun admin'); 

  return (
    <div className='overflow-x-hidden min-h-screen '>
      <div className='translate-x-64 pt-[2%]'>
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
          Akun Pengelola
        </div>
        <div className='w-[42%] mx-[18%] mt-[2%]'>
          <div className="flex justify-between mx-[18%]">
            <button
              onClick={() => setActiveFormulir('akun admin')}
              className={`text-sm px-3 pt-1 text-[#308967] rounded-full ${activeFormulir === 'akun admin' ? 'bg-gradient-to-b from-[#0D6734] to-[#247E55] text-white' : ''}`}
              style={{ boxShadow: "0.5px 0.5px 3px #00000040" }}
            >
              Akun Admin
            </button>

            <button
              onClick={() => setActiveFormulir('akun kasir')}
              className={`text-sm px-3 pt-1 text-[#308967] rounded-full ${activeFormulir === 'akun kasir' ? 'bg-gradient-to-b from-[#0D6734] to-[#247E55] text-white' : ''}`}
              style={{ boxShadow: "0.5px 0.5px 3px #00000040" }}
            >
              Akun Kasir
            </button>
          </div>
          
          <div className='mt-[7%] pb-24'>
          <div
              className={` transition-opacity ease-in-out duration-[1500ms] ${activeFormulir === 'akun admin' ? 'opacity-100' : 'opacity-50'}`}
            >
              {activeFormulir === 'akun admin' && <Akunadmin />}
            </div>

            <div
              className={` transition-opacity ease-in-out duration-[1500ms] ${activeFormulir === 'akun kasir' ? 'opacity-100' : 'opacity-50'}`}
            >
              {activeFormulir === 'akun kasir' && <Akunkasir />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
