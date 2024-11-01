"use client";
import React, { useState } from "react";
import Register from "@/components/auths/registerform";
import RegisterL from "@/components/auths/registerleft";
import Image from "next/image";
import Login from "@/components/auths/loginform";
import LoginR from "@/components/auths/loginright";


const Page = () => {
  const [isAnimated, setIsAnimated] = useState(true);
  return (
    <main className="bg-[#E3FFF3] w-full h-screen flex justify-center items-center relative">
      <div>
        <Image
          src="/icon/biru.png"
          alt="icon background"
          width={390}
          height={390}
          className="absolute top-0 left-0 z-10"
        />
        <Image
          src="/icon/kuning.png"
          alt="icon background"
          width={390}
          height={390}
          className="absolute bottom-0 right-0 z-10"
        />
      </div>
      <div className="bg-white relative w-[960px] h-[520px] shadow-[15px_15px_3px] shadow-[#0000002e] z-20">
        <div
          id="register"
          className={`absolute top-0 left-0 ms-[120px] h-full w-[40%] flex justify-center items-center transition-all duration-700 ease-in-out ${
            isAnimated ? "translate-x-full opacity-100 z-30" : "opacity-0 z-10"
          }`}
        >
          <div className="w-[530px] h-[520px] flex justify-center items-center">
            <Register isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
          </div>
        </div>
        <div
          id="login"
          className={`absolute top-0 left-0 ms-[85px] h-full w-[40%] flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
            isAnimated ? "translate-x-full opacity-0" : ""
          }`}
        >
          <div className="w-[530px] h-[520px] flex justify-center items-center">
            <Login />
          </div>
        </div>
        <div
          id="overlay-container"
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-40 ${
            isAnimated ? "-translate-x-full" : ""
          }`}
        >
          <div
            id="overlay"
            className={`relative -left-full h-full w-[200%] transform transition-all duration-700 ease-in-out ${
              isAnimated ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            <div
              id="login-right"
              className={`absolute flex justify-center ms-[135px] items-center top-0 right-0 transform transition-all duration-700 ease-in-out ${
                isAnimated ? "translate-x-[50%] z-50" : "translate-x-0"
              }`}
            >
              <LoginR isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
            </div>
            <div
              id="register-left"
              className={`absolute flex top-0 left-0 transform transition-all duration-700 ease-in-out ${
                isAnimated ? "translate-x-0 z-40" : "-translate-x-[50%]"
              }`}
            >
              <RegisterL
                isAnimated={isAnimated}
                setIsAnimated={setIsAnimated}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
