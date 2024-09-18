import React from "react";
import Profile from "../../../public/icon/profile.svg";
import Order from "../../../public/icon/order.svg";
import Chat from "../../../public/icon/chat.svg";
import Image from "next/image";

function Page() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <div className="text-black translate-x-64 pt-[2%] min-h-screen">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
          Dashboard
        </div>
        <div className="flex space-x-[4%]">
          <div
            className="bg-[#198C6F] mt-[4%] ms-[4%] h-[92px] w-[21%] rounded-xl flex"
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <Image
              src={Profile}
              alt={"profile"}
              className="w-[45%] h-[45%] mt-[10%]"
            />
            <div className="border-r-2 bg-slate-100 h-[46px] mt-6"></div>
            <div className="flex flex-col ms-8 mt-6">
              <div className="text-white text-[12px]">Total Pengguna</div>
              <div className="text-[20px] text-white">4554</div>
            </div>
          </div>

          <div
            className="bg-[#D7FFF0] mt-[4%] ms-[4%] h-[92px] w-[21%] rounded-xl flex"
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <Image
              src={Order}
              alt={"profile"}
              className="w-[45%] h-[45%] mt-[9%]"
            />
            <div className="border-r-2 bg-[#308967] h-[46px] mt-6"></div>
            <div className="flex flex-col ms-8 mt-6">
              <div className="text-[#308967] text-[12px]">Total Pesanan</div>
              <div className="text-[20px] text-[#308967]">3664</div>
            </div>
          </div>

          <div
            className="bg-[#D7FFF0] mt-[4%] ms-[4%] h-[92px] w-[21%] rounded-xl flex"
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <Image
              src={Chat}
              alt={"profile"}
              className="w-[40%] h-[30%] mt-[11%]"
            />
            <div className="border-r-2 bg-[#308967] h-[46px] mt-6"></div>
            <div className="flex flex-col ms-8 mt-6">
              <div className="text-[#308967] text-[12px]">
                Total Konten Forum
              </div>
              <div className="text-[20px] text-[#308967]">3664</div>
            </div>
          </div>
        </div>
        <div className="flex ms-[4%] mt-[2%]">
          <div
            className="w-[55%] h-[300px] bg-[#D7FFF0] rounded-xl "
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <h1 className="font-bold text-[#198C6F] text-[20px] text-center mt-4">
              Produk Kita
            </h1>
            <div className="flex mx-[10%] mt-[3%] space-x-8">
              <div className="flex flex-col space-y-5">
                <div
                  className="w-64 px-5 h-14 bg-white rounded-lg flex justify-between items-center "
                  style={{ boxShadow: "1px 5px 4px #00000040" }}
                >
                  <p className=" text-[#198C6F] text-[18px]">Tanaman Hias</p>
                  <div className="w-4 h-4 bg-[#308967] rounded"></div>
                </div>
                <div
                  className="w-64 px-5 h-14 bg-white rounded-lg flex justify-between items-center "
                  style={{ boxShadow: "1px 5px 4px #00000040" }}
                >
                  <p className=" text-[#198C6F] text-[18px]">Ikan Hias</p>
                  <div className="w-4 h-4 bg-[#51CB9F] rounded"></div>
                </div>
                <div
                  className="w-64 px-5 h-14 bg-white rounded-lg flex justify-between items-center "
                  style={{ boxShadow: "1px 5px 4px #00000040" }}
                >
                  <p className=" text-[#198C6F] text-[18px]">Burung Hias</p>
                  <div className="w-4 h-4 bg-[#83F6CA] rounded"></div>
                </div>
              </div>
              <div
                className="bg-white w-64 h-52 rounded-lg"
                style={{ boxShadow: "1px 5px 4px #00000040" }}
              ></div>
            </div>
          </div>
          <div
            className="flex flex-col items-center py-7 ms-[2%] w-[19%] h-[300px] bg-[#198C6F] rounded-xl"
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <h1 className="font-bold text-white">Jumlah Produk</h1>
            <h1 className="text-4xl mt-3 text-white font-semibold text-center border-b-[1px] w-[130px] pb-2">
              150
            </h1>
            <div className="mt-5 flex flex-col space-y-4">
              <p className="text-white text-[13px]">
                Tanaman Hias<span className="ms-9">60</span>
              </p>
              <p className="text-white text-[13px]">
                Ikan Hias<span className="ms-16">60</span>
              </p>
              <p className="text-white text-[13px]">
                Burung Hias<span className="ms-12">30</span>
              </p>
              <button className="bg-white text-[#308967] w-[100%] h-[40%] justify-center p-2 rounded-lg">
                Atur Produk
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[73%] h-[500px] ms-[4%] mt-[2%] bg-gradient-to-b from-[#15E6CD] to-[#4EDBB9] rounded-xl mb-5"
          style={{ boxShadow: "1px 5px 4px #00000040" }}
        ></div>
        <div className="flex ms-[1.5%] mt-[2%] mb-[2%]">
          <div
            className="flex flex-col items-center py-7 ms-[2.5%] mr-[1.5%] w-[19%] h-[10%] bg-[#CDF4E5] rounded-xl"
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <h1 className="font-bold text-[#198C6F]">Jumlah Ulasan</h1>
            <h1 className="text-4xl mt-3 text-[#198C6F] font-semibold text-center border-[#198C6F] border-b-[1px] w-[130px] pb-2">
              150
            </h1>
            <div className="mt-5 flex flex-col space-y-4">
              <p className="text-[#198C6F] text-[13px]">
                Tanaman Hias<span className="ms-9">60</span>
              </p>
              <p className="text-[#198C6F] text-[13px]">
                Ikan Hias<span className="ms-16">60</span>
              </p>
              <p className="text-[#198C6F] text-[13px]">
                Burung Hias<span className="ms-12">30</span>
              </p>
              <button className="bg-[#198C6F] text-white w-[100%] h-[40%] justify-center p-2 rounded-lg">
                Atur Konten
              </button>
            </div>
          </div>
          <div
            className="w-[54%] h-[305px] bg-[#198C6F] rounded-xl "
            style={{ boxShadow: "1px 5px 4px #00000040" }}
          >
            <h1 className="font-bold text-white text-[20px] text-center mt-4">
              Forum
            </h1>
            <div className="flex mx-[10%] mt-[3%] space-x-8">
              <div className="flex flex-col space-y-5">
                <div
                  className="w-64 px-5 h-14 bg-white rounded-lg flex justify-between items-center "
                  style={{ boxShadow: "1px 5px 4px #00000040" }}
                >
                  <p className=" text-[#198C6F] text-[18px]">Tanaman Hias</p>
                  <div className="w-4 h-4 bg-[#308967] rounded"></div>
                </div>
                <div
                  className="w-64 px-5 h-14 bg-white rounded-lg flex justify-between items-center "
                  style={{ boxShadow: "1px 5px 4px #00000040" }}
                >
                  <p className=" text-[#198C6F] text-[18px]">Ikan Hias</p>
                  <div className="w-4 h-4 bg-[#51CB9F] rounded"></div>
                </div>
                <div
                  className="w-64 px-5 h-14 bg-white rounded-lg flex justify-between items-center "
                  style={{ boxShadow: "1px 5px 4px #00000040" }}
                >
                  <p className=" text-[#198C6F] text-[18px]">Burung Hias</p>
                  <div className="w-4 h-4 bg-[#83F6CA] rounded"></div>
                </div>
              </div>
              <div
                className="bg-white w-64 h-52 rounded-lg"
                style={{ boxShadow: "1px 5px 4px #00000040" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;