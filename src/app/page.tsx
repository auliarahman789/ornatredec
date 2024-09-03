import React from "react";
import Footer from "./components/homepage/footer";
import Navbar from "./components/homepage/navbar";
import Home from "./components/homepage/home";
import Edukasi from "./components/homepage/edukasi";
import Login from "./components/auths/page";

function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Edukasi />
      <Footer />
      <Login />
    </div>
  );
}

export default page;
