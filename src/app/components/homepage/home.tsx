import React from "react";

function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#E3B02B]">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-500 m-10 h-[550px] text-[64px] font-bold">
          <div className="mt-[117px] inline-block bg-slate-700">
            <span className="text-[#308967]">LOREM</span>{" "}
            <span className="bg-[#308967] text-white">IPSUM</span>
          </div>
          <div className=" bg-slate-600 text-[#308967] me-9">
            <p className="text-[20px] mt-[20px] leading-tight font-normal">
              Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor et
              voluptate omnis qui veritatis dolorem et omnis doloribus et saepe
              inventore? Et sequi officia rem soluta repudiandae et quia
              voluptatum qui necessitatibus voluptatem.
            </p>
          </div>
          <div></div>
        </div>
        <div className="bg-blue-500 h-[550px] m-10 p-4">Kolom 2</div>
      </div>
    </div>
  );
}

export default Home;
