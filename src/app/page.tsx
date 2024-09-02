import React from "react";
import Footer from "./components/homepage/footer";
import Navbar from "./components/homepage/navbar";
import Login from "./components/auths/login";

function page() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Login/>
    </div>
  );
}

export default page;
