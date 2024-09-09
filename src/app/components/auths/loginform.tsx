"use client";
import Image from "next/image";
import React, { useState } from "react";
import user from "../../../../public/icon/User_fill.svg";
import passwordIcon from "../../../../public/icon/Lock_alt_fill.svg";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const router = useRouter();

  async function login() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/login`;
    try {
      const res = await axios.post(
        url,
        {
          username,
          password,
          role,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (role === "user") {
        router.push("/");
      } else {
        router.push("/superadmin");
      }
      alert("Berhasil Login");
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat login.");
    }
  }

  return (
    <main>
      <div className="bg-white w-[530px] h-[520px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[30px] pt-[60px] text-[#3F9272] mt-16">
            Masuk
          </h1>
          <form className="pt-[25px] gap-3.5 flex flex-col justify-center items-center">
            <div className="relative">
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] placeholder:font-light ps-8/ text-[#3F9272] rounded-md"
              />
              <Image
                src={user}
                alt="username"
                width={25}
                height={25}
                className="absolute top-1/2 left-4 -translate-y-1/2"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] mt-6 pt-[15px] placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] placeholder:font-light ps-8/ text-[#3F9272] rounded-md"
              />
              <Image
                src={passwordIcon}
                alt="password"
                width={27}
                height={27}
                className="absolute top-1/2 left-4 -translate-y-1/2 mt-3"
              />
            </div>
          </form>
          <button
            type="submit"
            onClick={login} // Call the login function here
            className="bg-[#3F9272] text-sm text-white px-12 py-[10px] mt-[30px] rounded-full"
          >
            Masuk
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
