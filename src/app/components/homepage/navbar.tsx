import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between bg-gradient-to-r from-[#51CB9F] via-[#83F6CA] to-[#DBFFF6] px-14 flex-row">
        <div className="flex space-x-4">
          <button>Home</button>
          <button>Forum</button>
          <button>Produk</button>
          <button>Edukasi</button>
          <button>About</button>
        </div>
        <div>
          <button>login</button>
          <button className="bg-green-500 rounded-lg py-1 px-4 ml-2">
            Daftar
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
