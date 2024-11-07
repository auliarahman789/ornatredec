import React from "react";

function page() {
  return (
    <div className="h-auto ml-[10%] mr-[10%] bg-white flex items-center">
      <div className="border-b-2 border-black"></div>
      <div className="ml-10 flex flex-row space-x-8">
        <div>foto profile</div>
      </div>
      <div className="flex flex-col mt-[6%] ml-5">
        <div>username</div>
        <span>Aroma : </span>
        <span>Estetika :</span>
        <span>Warna :</span>
      </div>
    </div>
  );
}

export default page;
