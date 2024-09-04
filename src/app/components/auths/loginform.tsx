import Image from 'next/image'
import React from 'react'
import user from '../../../../public/icon/User_fill.svg'
import password from '../../../../public/icon/Lock_alt_fill.svg'

function Login() {
  return (
    <main>
        <div className='bg-white w-[530px] h-[520px]'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[30px] pt-[60px] text-[#3F9272] mt-24'>Masuk</h1>
            <form action='' className='pt-[25px] gap-3.5 flex flex-col justify-center items-center'>
            <div className='relative '>
            <input type='text' name='username' placeholder='Username' className='w-[320px] pl-20 bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] placeholder:font-light ps-8 text-[#3F9272] rounded-md' />
              <Image src={user} alt="username" width={25} height={25} 
               className="absolute top-1/2 left-4 -translate-y-1/2"/>
            </div>
            <div className='relative'>
              <input type='password' name='password' placeholder='Password' className='w-[320px] pl-20 bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] placeholder:font-light ps-8 text-[#3F9272] rounded-md' />
              <Image src={password} alt="password" width={27} height={27} 
               className="absolute top-1/2 left-4 -translate-y-1/2"/>
            </div>
            </form>
            <button className='bg-[#3F9272] text-sm text-white px-12 py-[10px] mt-[30px] rounded-full'>
              Masuk
            </button>
            </div>
        </div>
    </main>
  )
}

export default Login