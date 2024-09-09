import React from "react";
import Footer from "./components/homepage/footer";
import Navbar from "./components/homepage/navbar";
import Home from "./components/homepage/home";
import Edukasi from "./components/homepage/edukasi";
import Login from "./components/auths/loginform";
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

      <main className="flex min-h-[30%] w-full px-[8%]">
        <Footer />
      </main>
    </div>
  );
}

export default page;
