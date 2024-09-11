import Burung from "@/app/components/Edukasi/burung/burung";
import Footer from "@/app/components/homepage/footer";
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
