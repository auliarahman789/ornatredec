import React from "react";
import Image from "next/image";

function Tanaman() {
  return (
    <div id="Tanaman">
      <div>
        <div className="grid grid-cols-2 bg-[#E4FFF2] min-h-screen">
          <div className="flex justify-start pl-[15%]">
            <h1 className="text-[40px] font-bold text-[#3F9272]">
              Tujuan Merawat Tanaman Hias
            </h1>
          </div>
          <div>
            <Image
              src="/img/Daun hias.png"
              width={555}
              height={80}
              alt="bunga"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tanaman;
