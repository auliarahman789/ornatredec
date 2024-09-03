import Link from 'next/link'
import React from 'react'

function RegisterL (){
  return (
    <div className="h-[520px] w-[420px] bg-no-repeat bg-center text-white
     flex flex-col items-center justify-center gap-5"
      style={{
        backgroundImage: "url('/img/registerleft.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className='text-center'>
        <h1 className='text-[30px] font-bold'>Selamat Datang</h1>
        <p>Tap disini jika kamu sudah<br/> 
        memiliki akun di T-trana</p>
      </div>
      <Link href=''>
        <button type='submit' className='bg-transparent rounded-full h-[45px] w-[160px] border-[1px] border-white'>
          Login
        </button>
      </Link>
  </div>
  )
}

export default RegisterL