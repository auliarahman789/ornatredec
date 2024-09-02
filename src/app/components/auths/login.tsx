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
              <div className="bg-[#E3FFF3] border rounded text-[#3F9272]">
                Username
                </div>
              <div className="bg-[#E3FFF3] border rounded text-[#3F9272]">
                Password
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
