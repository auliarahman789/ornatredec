import React from 'react'

function LoginR() {
  return (
    <div className="h-[520px] w-[420px] bg-no-repeat bg-center text-white
     flex flex-col items-center justify-center gap-5"
      style={{
        backgroundImage: "url('/img/registerleft.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className='text-center'>
        <h1 className='text-[30px] font-bold mt-24'>Selamat Datang</h1>
        <p className='mt-6'>Tap disini jika kamu belum<br/> 
        memiliki akun di OrnaTredec</p>
      </div>
      <button className='bg-transparent rounded-full h-[45px] w-[160px] border-[1px] border-white'>
        Buat
      </button>
  </div>
  

  
  )
}

export default LoginR