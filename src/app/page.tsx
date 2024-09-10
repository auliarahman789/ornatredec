import React from "react";
import Footer from "./components/homepage/footer";
import Home from "./components/homepage/home";
import Edukasi from "./components/homepage/edukasi";
import Produk from "./components/homepage/produk";
import Forum from "./components/homepage/forum";

function page() {
  return (
    <div>
      <Home />
      <Edukasi />
      <Produk />
      <main className=" min-h-screen w-full ">
        <Forum />
      </main>

      <Footer />
    </div>
  );
}

export default page;
