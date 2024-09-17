import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/icon/logo.svg'
import dashboardd from '../../../../public/icon/Order_fill.svg'
import produkk from '../../../../public/icon/Subtract.svg'
import edukasii from '../../../../public/icon/Book_open_alt_fill.svg'
import statistikk from '../../../../public/icon/pie_chart_fill.svg'
import forumm from '../../../../public/icon/comment_fill.svg'

function SidebarSp() {
  return (
    <div className='fixed top-0 left-0'>
      <nav className='bg-gradient-to-b from-[#167960] to-[#28DFB1] w-64 h-screen flex flex-col'>
        <Image src={logo} className='w-[40%] mt-4 mx-auto h-[6%]' width={200} height={100} alt='logo'/>
        <ul className='text-[20px] mt-[25%] font-bold text-white space-y-12 '>
          <li className='cursor-pointer flex bg-white py-3 ms-[10%] rounded-s-2xl'>
            <Image src={dashboardd} className='w-8 h-8 me-5 ms-3' width={30} height={30} alt='dashboard' />
            <span className='mt-1 text-[#308967]'>Dashboard</span></li>
            <li className='cursor-pointer flex ms-[15%]'>
            <Image src={produkk} className='w-5 ms-1 h-6 me-6' width={30} height={30} alt='dashboard' />
            Produk</li>
            <li className='cursor-pointer flex ms-[15%]'>
            <Image src={statistikk} className='w-6 h-6 me-5' width={30} height={30} alt='dashboard' />
            Statistik</li>
            <li className='cursor-pointer flex ms-[15%]'>
            <Image src={edukasii} className='w-6 h-6 me-5' width={30} height={30} alt='dashboard' />
            Edukasi</li>
            <li className='cursor-pointer flex ms-[15%]'>
            <Image src={forumm} className='w-6 h-6 me-5' width={30} height={30} alt='dashboard' />
            Forum</li>
        </ul>
      </nav>
    </div>
  ) 
}

export default SidebarSp
