'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/icon/logosp.svg'
import dashboardd from '../../../../public/icon/Order_fill.svg'
import produkk from '../../../../public/icon/Subtract.svg'
import userr from '../../../../public/icon/User_fill.svg'
import statistikk from '../../../../public/icon/pie_chart_fill.svg'
import forumm from '../../../../public/icon/comment_fill.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SidebarSp() {
  const pathname = usePathname();
  return (
    <div className='fixed top-0 left-0'>
      <nav className='nav bg-gradient-to-b from-[#167960] to-[#28DFB1] w-64 h-screen flex flex-col'>
      <Image src={logo} className='w-[150px] mt-3 mx-auto' width={300} height={100} alt='logo'/>
        <ul className='text-[20px] mt-[20%] font-bold text-white ms-[15%]'>  
          <Link href='/Superadmin'>
            <li className={`cursor-pointer flex mb-12 ${pathname === '/Superadmin' ? 'active' : ''}`}>
              <Image src={dashboardd} className='w-8 h-8 me-5' width={30} height={30} alt='dashboard' />
              <span className='mt-1'>Dashboard</span></li>
          </Link>
          <Link href='/Superadmin/Produk'>
            <li className={`cursor-pointer flex mb-12 ${pathname === '/Superadmin/Produk' ? 'active' : ''}`}>
            <Image src={produkk} className='w-5 ms-1 h-6 me-6' width={30} height={30} alt='dashboard' />
            Produk</li>
          </Link>
          <Link href='/Superadmin/Statistik'>
            <li className={`cursor-pointer flex mb-12 ${pathname === '/Superadmin/Statistik' ? 'active' : ''}`}>
            <Image src={statistikk} className='w-6 h-6 me-5' width={30} height={30} alt='dashboard' />
            Statistik</li>
          </Link>
          <Link href='/Superadmin/Akun'>
            <li className={`cursor-pointer flex mb-12 ${pathname === '/Superadmin/Akun' ? 'active' : ''}`}>
            <Image src={userr} className='w-6 h-6 me-5' width={30} height={30} alt='dashboard' />
            Akun</li>
          </Link>
          <Link href='/Superadmin/Forum'>
            <li className={`cursor-pointer flex mb-12 ${pathname === '/Superadmin/Forum' ? 'active' : ''}`}>
            <Image src={forumm} className='w-6 h-6 me-5' width={30} height={30} alt='dashboard' />
            Forum</li>
          </Link>
        </ul>
      </nav>
    </div>
  ) 
}

export default SidebarSp
