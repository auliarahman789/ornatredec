import React, { useState } from 'react';
import Pengeluaran from './pengeluaran';
import PemasukanTransaksi from './pemasukan';
import Pemasukan from './pemasukan';

function Report() {
  const [active, setActive] = useState('pengeluaran');

  return (
    <div className='ms-[2%] min-h-screen pb-[4%]'>
      <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] mt-4 inline-block text-transparent bg-clip-text">
        Report
      </div>
      <div className="flex space-x-10 ms-[5%] mt-1">
        <button className={`text-[20px] cursor-pointer ${active === 'pengeluaran' ? 'border-b-4 border-[#4BDCBA]' : ''}`} onClick={() => setActive('pengeluaran')}>
          Pengeluaran
        </button>
        <button className={`text-[20px] cursor-pointer ${active === 'Pemasukan' ? 'border-b-4 border-[#4BDCBA]' : ''}`} onClick={() => setActive('Pemasukan')}>
          Pemasukan 
        </button>
      </div>
      <div className="mt-5">
        <div className='w-[100%] mx-[2.5%]'>
          {active === 'pengeluaran' ? <Pengeluaran /> : ''}
              </div>
              <div className='w-[100%] mx-[2.5%]'>    
          {active === 'Pemasukan' ? <Pemasukan /> : ''}
              </div>
      </div>
    </div>
  );
}

export default Report;
