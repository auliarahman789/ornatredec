"use client";
import Image from "next/image";
import React, { useState } from "react";
import userIcon from "../../../public/icon/User_fill.svg";
import messageIcon from "../../../public/icon/Message_alt_fill.svg";
import passwordIcon from "../../../public/icon/Lock_alt_fill.svg";
import phoneIcon from "../../../public/icon/Phone_fill.svg";
import axios from "axios";
import LoadingRegis from "./loadingRegis";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = ({
  isAnimated,
  setIsAnimated,
}: {
  isAnimated: any;
  setIsAnimated: any;
}) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClickShow = () => {
    setShow(!show);
  };
  async function buatAkun() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/register`;
    try {
      setIsLoading(true);
      const res = await axios.post(
        url,
        {
          username: username,
          email: email,
          no_hp: phone,
          password: password,
          role: "user",
        },
        {
          withCredentials: true,
        }
      );

      // Simpan data pengguna ke localStorage
      const userData = {
        username: username,
        email: email,
        phone: phone,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      alert("Berhasil Membuat Akun");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setIsAnimated(!isAnimated);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      alert("Terjadi kesalahan saat membuat akun.");
    }
  }

  return (
    <main id="Register">
      <div className="bg-white w-[530px] h-[520px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[30px] pt-[60px] text-[#3F9272]">
            Buat Akun
          </h1>
          <div className="pt-[25px] gap-3.5 flex flex-col justify-center items-center">
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                placeholder="Username"
                className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] text-[19px] ps-12 text-[#3F9272] rounded-md"
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
                className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] text-[19px] ps-12 text-[#3F9272] rounded-md"
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
                maxLength={15}
                placeholder="Password"
                className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] text-[19px] ps-12 text-[#3F9272] rounded-md"
                required
              />
              <Image
                src={passwordIcon}
                alt="password"
                width={27}
                height={27}
                className="absolute top-1/2 left-4 -translate-y-1/2"
              />
              <p
                className="text-[#3F9272] absolute top-[18px] right-4"
                onClick={handleClickShow}
              >
                {show ? (
                  <FaEye className="w-[22px] h-[22px]" />
                ) : (
                  <FaEyeSlash className="w-[22px] h-[22px]" />
                )}
              </p>
            </div>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="telephone"
                maxLength={13}
                placeholder="No Telephone"
                className="w-[320px] bg-[#E3FFF3] pb-[13px] pt-[15px] placeholder:text-[#3F9272] text-[19px] ps-12 text-[#3F9272] rounded-md"
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
            <button
              type="submit"
              disabled={isLoading}
              onClick={buatAkun}
              className="bg-[#3F9272] text-sm text-white px-12 py-[10px] mt-[30px] rounded-full"
            >
              {isLoading ? "Loading..." : "Buat"}
            </button>
            {isLoading && <LoadingRegis />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
