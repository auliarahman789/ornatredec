import React from "react";
import Ikan from "../components/Edukasi/ikan";
import Footer from "../components/homepage/footer";
import Tanaman from "../components/Edukasi/Tanaman/tanaman";

function page() {
  return (
  <div className="bg-[#E4FFF2] min-h-screen">
      <Ikan />
    <div>
      <Tanaman />
    </div>
  </div>
  );
}

export default page;
