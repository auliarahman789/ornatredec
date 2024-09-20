"use client";
import React, { useState } from "react";
import Image from "next/image";
import userIcon from "../../../../public/icon/User_fill.svg";
import messageIcon from "../../../../public/icon/Message_alt_fill.svg";
import passwordIcon from "../../../../public/icon/Lock_alt_fill.svg";
import axios from "axios";

const Akunadmin = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function buatAkunAdmin() {
        const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/register`;
        try {
            const res = await axios.post(
                url,
                {
                    username: username,
                    email: email,
                    password: password,
                    role: "admin",
                },
                {
                    withCredentials: true,
                }
            );
            console.log(res);
            alert("Berhasil Membuat Akun Admin");
            setUsername("");
            setEmail("");
            setPassword("");
        } catch (error: any) {
            console.log("Error details:", error.response ? error.response.data : error.message);
            alert("Terjadi kesalahan saat membuat akun.");
        }
    }
    

    return (
        <div id='Akunadmin'
            className="w-[100%] h-[500px] bg-white flex flex-col items-center"
            style={{ 
                boxShadow: "10px 10px 4px #E2FFF8, 17px 18px 4px #00000040" 
            }}
        >
            <h1 className='text-[#3F9272] text-[35px] font-bold mt-[12%]'>Buat akun admin</h1>
            <div className='flex flex-col space-y-4 mt-[7%]'>
                <div className='relative'>
                    <input
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        name="username"
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
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
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
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
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
                </div>
            </div>
            <button
                onClick={buatAkunAdmin}
                className="bg-[#3F9272] text-sm text-white px-12 py-[10px] mt-[13%] rounded-full"
            >
                Buat
            </button>
        </div>
    );
}

export default Akunadmin;
