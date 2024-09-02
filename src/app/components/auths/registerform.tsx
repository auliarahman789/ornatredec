import React from 'react'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({subsets: ['latin']})

function Register() {
  return (
    <main>
        <div className='bg-white w-[480px] h-[460px]'>
            <div className='flex flex-col justify-center items-center'>
            <h1 className={`font-bold text-[28px] pt-[60px] text-[#3F9272] ${josefin}`}>Buat Akun</h1>
            <form className='pt-[25px] gap-3.5 flex flex-col justify-center items-center'>
              <div><input type='text' name='username' placeholder='Username' className='w-[270px] bg-[#E3FFF3] p-2 placeholder:text-[#3F9272] placeholder:text-[12px] text-[#3F9272]'/></div>
              <div><input type='email' name='email' placeholder='Email' className='w-[270px] bg-[#E3FFF3] p-2 placeholder:text-[#3F9272] placeholder:text-[12px] text-[#3F9272]'/></div>
              <div><input type='password' name='password' placeholder='Password' className='w-[270px] bg-[#E3FFF3] p-2 placeholder:text-[#3F9272] placeholder:text-[12px] text-[#3F9272]'/></div>
              <div><input type='tel' name='telephone' placeholder='No Telephone' className='w-[270px] bg-[#E3FFF3] p-2 placeholder:text-[#3F9272] placeholder:text-[12px] text-[#3F9272]'/></div>
            </form>
            <button className='bg-[#3F9272] text-xs text-white px-12 py-[10px] mt-[40px] rounded-full'>
              Buat
            </button>
            </div>
        </div>
    </main>
  )
}

export default Register