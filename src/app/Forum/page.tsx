import React from "react";
import Grid from "../components/Forum/grid";
import Dropdown1 from "../components/Forum/dropdown1";

function Forum() {
  return (
    <div className="bg-slate-400 h-[2000px]">
      <p className="text-[#308967] text-[20px] ml-[26.5%] bg-blue-500 inline-block mt-[4%]">
        8 ulasan terbaru
      </p>
      <div className="flex">
        <Dropdown1 />
        <Grid />
      </div>
    </div>
  );
}

export default Forum;
