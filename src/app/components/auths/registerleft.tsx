import React from 'react'

const RegisterL = ({ isAnimated, setIsAnimated }:
  { isAnimated: any, setIsAnimated: any }) => {
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
        <button type='submit' onClick={(e) => {setIsAnimated(!isAnimated);}}
          className='bg-transparent rounded-full h-[45px] w-[160px] 
          border-[1px] border-white'>
          Login
        </button>
  </div>
  )
}

export default RegisterL