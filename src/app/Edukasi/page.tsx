import React from "react";
import Footer from "../components/homepage/footer";
import Tanaman from "../components/Edukasi/tanaman";

function Edukasi() {
  return (
    <div>
      <div className="bg-[#E4FFF2] min-h-screen">
        <Tanaman />
        <Footer />
      </div>
    </div>
  );
}

export default Edukasi;
