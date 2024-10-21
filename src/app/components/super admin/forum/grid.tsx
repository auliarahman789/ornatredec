import axios from "axios";
import React, { useEffect, useState } from "react";

type Total = {
  totalForumTanaman: number;
  totalForumIkan: number;
  totalForumBurung: number;
}

function Grid() {
  const [data, setData] = useState<Total | null>();

  useEffect(() => {
    getTotal();
  }, []);
  async function getTotal() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/totalKeseluruhan`;
    try {
      const res = await axios.get<Total>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data total.");
    }
  }
  return (
    <div className="text-black bg-white translate-x-64 pt-[2%] pb-[1.5%]">
      <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
        Kelola Forum
      </div>
    {data && 
      <div className="flex space-x-[3%]">
        <div
            className="bg-[#21B892] mt-[2%] ms-[2%] h-[70px] w-[15%] rounded-xl flex space-x-10"
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <div className="grid grid-cols-3 items-center justify-center ms-[2%]">
              <div className="col-span-2 text-white text-[20px] p-5">Tanaman</div>
              <div className="col-span-1 text-[20px] text-white bg-[#1B9878] rounded-tr-lg rounded-br-lg shadow-md p-5">
                {data.totalForumTanaman}
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
            <div className="col-span-1 text-[20px] text-white pe-10 bg-[#1B9878] rounded-tr-xl rounded-br-xl shadow-md p-5">
              {data.totalForumIkan}
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
            <div className="col-span-1 text-[20px] text-white pe-10 bg-[#1B9878] rounded-tr-xl rounded-br-xl shadow-md p-5">
              {data.totalForumBurung}
            </div>
          </div>
        </div>
      </div>
        }
    </div>
  );
}

export default Grid;
