import React from "react";
import Footer from "./components/homepage/footer";
import Navbar from "./components/homepage/navbar";
import Home from "./components/homepage/home";

function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default page;
