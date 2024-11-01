import Burung from "@/components/Edukasi/burung/burung";
import Footer from "@/components/homepage/footer";
import React from "react";

function Edukasi() {
  return (
    <div>
      <div className="bg-[#E4FFF2] min-h-screen">
        <Burung />
      </div>
        <Footer />
    </div>
  );
}

export default Edukasi;
