'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import userIcon from '../../../../public/icon/User_fill.svg'
import messageIcon from '../../../../public/icon/Message_alt_fill.svg'
import passwordIcon from '../../../../public/icon/Lock_alt_fill.svg'
import phoneIcon from '../../../../public/icon/Phone_fill.svg'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [password, setPassword] = useState<string>();

  async function buatAkun(){
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/register`;
    try {
      const res = await axios.post(
        url,
        {
          username: username,
          email: email,
          no_hp: phone,
          password: password,
          role: 'user',
        },
        {
          withCredentials: true,
        }
      );
      console.log(res)
      alert('Berhasil Membuat Akun');
    } catch (error: any) {
      console.log(error);
      alert('Terjadi kesalahan saat membuat akun.');
    }
  }

  return (
    <main>
      <div className='bg-white w-[530px] h-[520px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold text-[30px] pt-[60px] text-[#3F9272]'>Buat Akun</h1>
          <form className='pt-[25px] gap-3.5 flex flex-col justify-center items-center'>
            <div className='relative'>
              <input 
                type='text' 
                onChange={(e) => setUsername(e.target.value)} 
                name='username' 
                placeholder='Username' 
                className='w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] pt-[15px]
                  placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                  placeholder:font-light ps-8 text-[#3F9272] rounded-md' 
                required 
              />
              <Image src={userIcon} alt="username" width={25} height={25} 
               className="absolute top-1/2 left-4 -translate-y-1/2"/>
            </div>
            <div className='relative'>
              <input 
                type='email'
                onChange={(e) => setEmail(e.target.value)} 
                name='email' 
                placeholder='Email' 
                className='w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] pt-[15px] 
                  placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                  placeholder:font-light ps-8 text-[#3F9272] rounded-md' 
                required 
              />
              <Image src={messageIcon} alt="email" width={27} height={27} 
               className="absolute top-1/2 left-4 -translate-y-1/2"/>
            </div>
            <div className='relative'>
              <input 
                type='password' 
                onChange={(e) => setPassword(e.target.value)} 
                name='password' 
                placeholder='Password' 
                className='w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] pt-[15px]
                  placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                  placeholder:font-light ps-8 text-[#3F9272] rounded-md' 
                required
              />
              <Image src={passwordIcon} alt="password" width={27} height={27} 
               className="absolute top-1/2 left-4 -translate-y-1/2"/>
            </div>
            <div className='relative'>
              <input 
                type='tel' 
                onChange={(e) => setPhone(e.target.value)} 
                name='telephone' 
                placeholder='No Telephone' 
                className='w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] pt-[15px]
                  placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                  placeholder:font-light ps-8 text-[#3F9272] rounded-md' 
                required 
              />
              <Image src={phoneIcon} alt="telepon" width={27} height={27} 
               className="absolute top-1/2 left-4 -translate-y-1/2"/>
            </div>
            <button onClick={() => {
              console.log(username,email,phone,password)
              buatAkun()
            }}
              type='submit' 
              className='bg-[#3F9272] text-sm text-white px-12 py-[10px] mt-[30px] rounded-full'
            >
              Buat
            </button>
          </form>
          
        </div>
      </div>
    </main>
  );
}

export default Register;
