import Ikan from "@/app/components/Edukasi/ikan/ikan";
import Footer from "@/app/components/homepage/footer";
import React from "react";

function Edukasi() {
  return (
    <div>
      <div className="bg-[#E4FFF2] min-h-screen">
        <Ikan />
        <Footer />
      </div>
    </div>
  );
}

export default Edukasi;
