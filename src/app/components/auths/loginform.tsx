"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const router = useRouter();

  async function login() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/login`;
    try {
      const res = await axios.post(
        url,
        {
          username,
          password
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data.user.role);
      setRole(res.data.user.role);
      localStorage.setItem("token", res.data.token); 
      localStorage.setItem("username", username); 

      if (role === "user") {
        router.push("/");
      }else if (role === "super admin"){
        router.push("/Superadmin");
      } else {
        alert("aakun tidak ada")
      }
      alert("Berhasil Login");
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat login.");
    }
  }

  return (
    <main id="Login">
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
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] mt-6 pt-[15px] placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] placeholder:font-light ps-8/ text-[#3F9272] rounded-md"
              />
            </div>
          </form>
          <button
            type="submit"
            onClick={login} // Call the login function here
            className="bg-[#3F9272] text-sm text-white px-12 py-[10px] h-[50px] w-[170px] mt-[30px] rounded-full"
          >
            Masuk
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
