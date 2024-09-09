import React from "react";
import Main from "../components/(Edukasi)/main";
import Burung from "../components/(Edukasi)/burung";
import Footer from "../components/homepage/footer";

function Edukasi() {
  return (
    <div className="bg-[#E4FFF2] min-h-screen">
      <Main />
      <Burung />
      <Footer />
    </div>
  );
}

export default Edukasi;
