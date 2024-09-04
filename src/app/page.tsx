import React from "react";
import Footer from "./components/homepage/footer";
import Navbar from "./components/homepage/navbar";
import Home from "./components/homepage/home";
import Edukasi from "./components/homepage/edukasi";
import Produk from "./components/homepage/produk";

function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Edukasi />
      <Produk />
      <Footer />
    </div>
  );
}

export default page;
