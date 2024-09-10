import React from "react";
import Main from "../components/Edukasi/main";
import Tanaman from "../components/Edukasi/tanaman";
import Ikan from "../components/Edukasi/ikan";

function Edukasi() {
  return (
    <div className="bg-[#E4FFF2]">
      <Tanaman />
      <Ikan />
    </div>
  );
}

export default Edukasi;
