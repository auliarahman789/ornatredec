<<<<<<<<< Temporary merge branch 1:src/app/Edukasi/Burung/page.tsx
import Burung from "../../components/Edukasi/burung";
import Footer from "../../components/homepage/footer";
=========
import React from "react";
import Footer from "../components/homepage/footer";
import Tanaman from "../components/Edukasi/tanaman";
>>>>>>>>> Temporary merge branch 2:src/app/Edukasi/page.tsx

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
