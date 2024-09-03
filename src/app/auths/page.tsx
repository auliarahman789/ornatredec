import React from 'react'
import Login from '../components/auths/loginform'
import LoginR from '../components/auths/loginright'
import Image from 'next/image'

function Page() {
  return (
    <main className="bg-[#E3FFF3] w-full h-screen flex justify-center items-center relative">
      <div>
        <Image 
          src="/icon/biru.png" 
          alt="icon background" 
          width={390} 
          height={390} 
          className="absolute top-0 left-0"
        />
        <Image 
          src="/icon/kuning.png" 
          alt="icon background" 
          width={390} 
          height={390} 
          className="absolute bottom-0 right-0"
        />
      </div>
      <div className='flex shadow-[15px_15px_3px] shadow-[#0000002e] relative z-10'>
        <LoginR />
        <Login />
      </div>
    </main>
  )
}

export default Page
