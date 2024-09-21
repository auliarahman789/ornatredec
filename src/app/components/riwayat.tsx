import React from "react";
import Sidebar from "./sidebar";

function Riwayat() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/bg.jpg')", height: "110vh" }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white p-16 rounded-lg shadow-lg w-[65%] h-[105%] translate-x-[15%] z-20 relative pointer-events-auto mt-[5%]">
            <div className="grid grid-cols-2 text-start">
              <div className="-translate-y-[25%]">
                <h1 className="text-[#5CD5A6] text-[20px]">
                  Ulasan Yang Terakhir Dikunjungi
                </h1>
                <div className="bg-[#5CD5A6] p-16 rounded-lg shadow-lg w-[90%] h-[350%] mt-2"></div>
              </div>
              <div className="-translate-y-[25%]">
                <h1 className="text-[#5CD5A6] text-[20px]">
                  Ulasan Yang Terakhir Dikunjungi
                </h1>
                <div className="bg-[#5CD5A6] p-16 rounded-lg shadow-lg w-[90%] h-[350%] mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Riwayat;
