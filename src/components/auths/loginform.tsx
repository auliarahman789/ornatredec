"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import Image from "next/image";
import Swal from "sweetalert2"; // Import SweetAlert
import userIcon from "../../../public/icon/User_fill.svg";
import passwordIcon from "../../../public/icon/Lock_alt_fill.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClickShow = () => {
    setShow(!show);
  };

  async function login(e: React.FormEvent) {
    e.preventDefault(); // Mencegah reload saat kirim
    const url = `${process.env.NEXT_PUBLIC_URL}api/login`;

    try {
      setIsLoading(true);
      const res = await axios.post(
        url,
        { username, password },
        { withCredentials: true }
      );

      const userRole = res.data.user.role;
           
      localStorage.setItem("userData", JSON.stringify(res.data.user));

      // SweetAlert Success
      Swal.fire({
        icon: "success",
        title: "Berhasil Login",
        text: "Anda berhasil masuk!",
        confirmButtonColor: "#3F9272",
      });

      // Redirect berdasarkan role
      if (userRole === "user") {
        router?.push("/");
      } else if (userRole === "super admin") {
        router?.push("/Superadmin");
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);

      // SweetAlert Error
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: error.message || "Terjadi kesalahan, coba lagi.",
        confirmButtonColor: "#3F9272",
      });
    }
  }

  return (
    <main id="Login">
      <div className="bg-white w-[530px] h-[520px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[30px] pt-[60px] text-[#3F9272] mt-16">
            Masuk
          </h1>
          <div className="pt-[25px] gap-3.5 flex flex-col justify-center items-center">
            <div className="relative">
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-[320px] pl-14 bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] placeholder:text-[18px] text-[19px] placeholder:font-light ps-8/ text-[#3F9272] rounded-md"
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
                type={show ? "text" : "password"}
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
                className="absolute top-1/2  mt-3 left-4 -translate-y-1/2"
              />
              <p
                className="text-[#3F9272] absolute right-4  top-1/2"
                onClick={handleClickShow}
              >
                {show ? (
                  <FaEye className="w-[22px] h-[22px]" />
                ) : (
                  <FaEyeSlash className="w-[22px] h-[22px]" />
                )}
              </p>
            </div>
            <button
              disabled={isLoading}
              onClick={login}
              type="submit"
              className="bg-[#3F9272] text-sm text-white px-12 py-[10px] h-[50px] w-[170px] mt-[30px] rounded-full"
            >
              {isLoading ? "Loading..." : "Masuk"}
            </button>
            {isLoading && <Loading />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
