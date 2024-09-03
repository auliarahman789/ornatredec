'use client'
import React from 'react'
function Login() {
  return (
    <div>
      <div className="selection:bg-indigo-500 selection:text-white grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="mx-auto overflow-hidden">
              <div className="p-8">
                <h1 className="text-5xl font-bold text-[#3F9272] text-center">
                  Masuk
                </h1>
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-[280px] bg-[#E3FFF3] placeholder:pl-10 p-2 mx-56 placeholder:text-[#3F9272] placeholder:text-[12px] text-[#3F9272]"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-[280px] bg-[#E3FFF3] placeholder:pl-10 p-2 mx-56  mt-5 placeholder:text-[#3F9272] placeholder:text-[12px] text-[#3F9272]"
                />
              </div>
            </div>
            <div className="bg-[#3F9272] mt-14 mx-64 text-center p-5 border rounded-full text-[#ffff]">
              Masuk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
