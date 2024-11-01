import React, { useState } from 'react'
import Image from 'next/image';
import userIcon from "../../../../public/icon/User_fill.svg";
import messageIcon from "../../../../public/icon/Message_alt_fill.svg";
import passwordIcon from "../../../../public/icon/Lock_alt_fill.svg";
import phoneIcon from "../../../../public/icon/Phone_fill.svg"
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Akun = () => {
  const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    async function buatAkun() {
        const url = `${process.env.NEXT_PUBLIC_URL}api/register`;
        try {
            const res = await axios.post(
                url,
                {
                    username: username,
                    email: email,
                    password: password,
                    role: selectedCategory,
                    no_hp: phone,
                },
                {
                    withCredentials: true,
                }
            );
            console.log(res);
            alert("Berhasil Membuat Akun");
            setUsername("");
            setEmail("");
            setPassword("");
            setPhone("");
        } catch (error: any) {
            console.log(error);
            alert("Terjadi kesalahan saat membuat akun.");
        }
  }
  const handleClickShow = () => {
    setShow(!show)
  }
  return (
    <div id='Akun'
    className="w-[95%] h-[550px] bg-white flex flex-col items-center"
    style={{ 
      boxShadow: "10px 10px 4px #E2FFF8, 17px 18px 4px #00000040" 
    }}
      >
          <h1 className='text-[#3F9272] text-[35px] font-bold mt-[10%]'>Buat akun</h1>
          <form className='flex flex-col space-y-2 mt-[7%]'>
              <div className='relative'>         
                    <input
                            type="text"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            name="Nama"
                            placeholder="Nama Karyawan"
                            className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px]
                            placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                            placeholder:font-light ps-14 text-[#3F9272] rounded-md"
                            required
                        />
                        <Image
                            src={userIcon}
                            alt="username"
                            width={25}
                            height={25}
                            className="absolute top-1/2 left-4 -translate-y-1/2"
                        />
              </div>
              <div className="relative">
              <input
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Email"
                className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px] 
                  placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                  placeholder:font-light ps-14 text-[#3F9272] rounded-md"
                required
              />
              <Image
                src={messageIcon}
                alt="email"
                width={27}
                height={27}
                className="absolute top-1/2 left-4 -translate-y-1/2"
              />
            </div>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
                className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px]
                  placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                  placeholder:font-light ps-14 text-[#3F9272] rounded-md"
                required
              />
              <Image
                src={passwordIcon}
                alt="password"
                width={27}
                height={27}
                className="absolute top-1/2 left-4 -translate-y-1/2"
          />
              <p className="text-[#3F9272] absolute top-[18px] right-4" onClick={handleClickShow}>{ show ? <FaEye className="w-[22px] h-[22px]"/> : <FaEyeSlash className="w-[22px] h-[22px]" /> }</p>
        </div>
        <div className="relative">
                    <input
                        type="tel"
                        name="telephone"
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="No Telephone"
                        className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px]
                        placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] 
                        placeholder:font-light ps-14 text-[#3F9272] rounded-md"
                        required
                    />
                    <Image
                        src={phoneIcon}
                        alt="telepon"
                        width={27}
                        height={27}
                        className="absolute top-1/2 left-4 -translate-y-1/2"
                    />
        </div>
        <div className="flex justify-between pt-[5%]">
          <div className='space-x-3 relative ms-[4%]'>
            <input
              type="radio"
              name='role'
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='w-[20px] h-[20px]'
              value="kasir"
              id='kasir'
              checked={selectedCategory === "kasir"} // Ensure correct radio button is checked
            />
            <label htmlFor="kasir" className='text-[#308967] absolute top-0 font-semibold'>Kasir</label>
          </div>
          <div className="space-x-3 relative me-[23%]">
            <input
              type="radio"
              name='role'
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='w-[20px] h-[20px]'
              value="admin"
              id='admin'
              checked={selectedCategory === "admin"}
            />
            <label htmlFor="admin" className='text-[#308967] absolute top-0 font-semibold'>Admin</label>
          </div>
        </div>
          </form>
          <button
              type="submit"
              onClick={buatAkun}
              className="bg-[#3F9272] text-sm text-white px-12 py-[10px] cursor-pointer mt-[8%] rounded-full"
            >
              Buat
            </button>
  </div>
  
  )
}

export default Akun