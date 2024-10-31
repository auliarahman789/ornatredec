import React, { useState } from 'react'
import PemasukanOkt from './pengeluaran-pemasuk/oktober/pemasukan';


function Pemasukan() {
    const [active, setActive] = useState('Januari');
  return (
      <div className='bg-[#E4FFF2] w-full min-h-screen rounded-xl px-5 pt-5 pb-8'>
          <div className="flex">
              <ul className='ms-1 rounded-xl space-x-[22px] bg-white flex px-3 py-4'>
              <li onClick={() => setActive('Januari')} className={`cursor-pointer ${active === 'Januari' ? 'border-b-4 border-[#308967]' : ''}`}>Januari</li>
          <li onClick={() => setActive('Februari')} className={`cursor-pointer ${active === 'Februari' ? 'border-b-4 border-[#308967]' : ''}`}>Febuari</li>
          <li onClick={() => setActive('Maret')} className={`cursor-pointer ${active === 'Maret' ? 'border-b-4 border-[#308967]' : ''}`}>Maret</li>
          <li onClick={() => setActive('April')} className={`cursor-pointer ${active === 'April' ? 'border-b-4 border-[#308967]' : ''}`}>April</li>
          <li onClick={() => setActive('Mei')} className={`cursor-pointer ${active === 'Mei' ? 'border-b-4 border-[#308967]' : ''}`}>Mei</li>
          <li onClick={() => setActive('Juni')} className={`cursor-pointer ${active === 'Juni' ? 'border-b-4 border-[#308967]' : ''}`}>Juni</li>
          <li onClick={() => setActive('Juli')} className={`cursor-pointer ${active === 'Juli' ? 'border-b-4 border-[#308967]' : ''}`}>Juli</li>
          <li onClick={() => setActive('Agustus')} className={`cursor-pointer ${active === 'Agustus' ? 'border-b-4 border-[#308967]' : ''}`}>Agustus</li>
          <li onClick={() => setActive('September')} className={`cursor-pointer ${active === 'September' ? 'border-b-4 border-[#308967]' : ''}`}>September</li>
          <li onClick={() => setActive('Oktober')} className={`cursor-pointer ${active === 'Oktober' ? 'border-b-4 border-[#308967]' : ''}`}>Oktober</li>
          <li onClick={() => setActive('November')} className={`cursor-pointer ${active === 'November' ? 'border-b-4 border-[#308967]' : ''}`}>November</li>
          <li onClick={() => setActive('Desember')} className={`cursor-pointer ${active === 'Desember' ? 'border-b-4 border-[#308967]' : ''}`}>Desember</li>
              </ul>
      </div>
      {/* <div className="relative">
          <div className="absolute top-[5%] right-[1%] my-5 bg-white h-4">
              ini dropdown
      </div>
      </div> */}
               {active === "Oktober" && <PemasukanOkt/>}
      </div>
  )
}

export default Pemasukan