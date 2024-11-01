import Card3 from "@/components/super admin/forum/card3reportulasan";
import React from "react";

function DetailReportUlasan() {
  return (
    <div className="overflow-x-hidden">
      <div className="text-black bg-white translate-x-64 pt-[2%] pb-[1.5%]">
        <div className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text">
          Kelola Forum
        </div>
        <div className="text-[20px] ms-[5%] mt-[5%] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] text-transparent bg-clip-text w-[18%]">
          Ulasan yang dilaporkan
        </div>
        <Card3 />
      </div>
    </div>
  );
}

export default DetailReportUlasan;
