import React from "react";

function Grid() {
  return (
    <div className="text-black bg-white translate-x-64 pt-[2%] pb-[1.5%]">
      <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
        Kelola Forum
      </div>
      <div className="flex space-x-[3%]">
        {/* Kotak Pertama */}
        <div
          className="bg-[#21B892] mt-[2%] ms-[2%] h-[70px] w-[15%] rounded-xl flex space-x-10"
          style={{ boxShadow: "1px 5px 4px #00000040" }}
        >
          <div className="grid grid-cols-3 items-center justify-center ms-[2%]">
            <div className="col-span-2 text-white text-[20px] p-5">Tanaman</div>
            <div className="col-span-1 text-[20px] text-white bg-[#1B9878] rounded-tr-lg rounded-br-lg shadow-md p-5">
              50
            </div>
          </div>
        </div>

        {/* Kotak Kedua */}
        <div
          className="bg-[#21B892] mt-[2%] h-[70px] w-[15%] rounded-xl flex space-x-10"
          style={{ boxShadow: "1px 5px 4px #00000040" }}
        >
          <div className="grid grid-cols-3 items-center justify-center ms-[2%]">
            <div className="col-span-2 text-white text-[20px] p-5">Ikan</div>
            <div className="col-span-1 text-[20px] text-white bg-[#1B9878] rounded-tr-xl rounded-br-xl shadow-md p-5">
              30
            </div>
          </div>
        </div>

        {/* Kotak Ketiga */}
        <div
          className="bg-[#21B892] mt-[2%] h-[70px] w-[15%] rounded-xl flex space-x-10"
          style={{ boxShadow: "1px 5px 4px #00000040" }}
        >
          <div className="grid grid-cols-3 items-center justify-center ms-[1%]">
            <div className="col-span-2 text-white text-[20px] p-5">Burung</div>
            <div className="col-span-1 text-[20px] text-white bg-[#1B9878] rounded-tr-xl rounded-br-xl shadow-md p-5">
              40
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
