"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const router = useRouter();

  async function login(e: React.FormEvent) {
    e.preventDefault(); // Mencegah reload saat submit form
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/login`;

    try {
      const res = await axios.post(
        url,
        { username, password, role },
        { withCredentials: true }
      );

      // Simpan data pengguna di localStorage setelah login berhasil
      localStorage.setItem("token", res.data.token); // Menyimpan token
      localStorage.setItem("userData", JSON.stringify(res.data.user)); // Simpan data pengguna

      alert("Berhasil Login");
      // Redirect berdasarkan role
      if (role === "user") {
        router.push("/");
      } else {
        router.push("/superadmin");
      }
    } catch (error: any) {
      console.log(error);
      alert(
        "Terjadi kesalahan saat login. Silakan periksa username dan password."
      );
    }
  }

  return (
    <main id="Login">
      <div className="bg-white w-[530px] h-[520px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[30px] pt-[60px] text-[#3F9272] mt-16">
            Masuk
          </h1>
          <form
            className="pt-[25px] gap-3.5 flex flex-col justify-center items-center"
            onSubmit={login}
          >
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
            <button
              type="submit"
              className="bg-[#3F9272] text-sm text-white px-12 py-[10px] h-[50px] w-[170px] mt-[30px] rounded-full"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
