import React, { useState } from "react";
import Datakasir from "./data/datakasir";
import Dataadmin from "./data/dataadmin";
import Datauser from "./data/datauser";

function Data() {
  const [data, setData] = useState("user");
  return (
    <div>
      <div className="mt-4 ms-[4%]">
        <button
          onClick={() => setData("user")}
          className={`text-[17px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text ${
            data === "user" ? "border-b-4 border-[#308967]" : ""
          }`}
        >
          User
        </button>

        <button
          onClick={() => setData("admin")}
          className={`text-[17px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text ${
            data === "admin" ? "border-b-4 border-[#308967]" : ""
          }`}
        >
          Admin
        </button>

        <button
          onClick={() => setData("kasir")}
          className={`text-[17px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-[2%] mt-4 inline-block text-transparent bg-clip-text ${
            data === "kasir" ? "border-b-4 border-[#308967]" : ""
          }`}
        >
          Kasir
        </button>
      </div>
      <div className=" pb-24 translate-x-20">
        <div>{data === "user" && <Datauser />}</div>
        <div>{data === "admin" && <Dataadmin />}</div>
        <div>{data === "kasir" && <Datakasir />}</div>
      </div>
    </div>
  );
}

export default Data;
