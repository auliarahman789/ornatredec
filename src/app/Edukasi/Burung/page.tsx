import Tanaman from "@/app/components/Edukasi/tanaman";
import Footer from "@/app/components/homepage/footer";
import React from "react";

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
