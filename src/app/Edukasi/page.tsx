import React from "react";
import Tanaman from "../components/Edukasi/tanaman";
import Ikan from "../components/Edukasi/ikan";
import Burung from "../components/Edukasi/burung";
import Footer from "../components/homepage/footer";

function Edukasi() {
  return (
    <div className="bg-[#E4FFF2] min-h-screen">
      <Burung />
      <Footer />
      <Tanaman />
      <Ikan />
    </div>
  );
}

export default Edukasi;
