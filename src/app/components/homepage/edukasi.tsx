import React from "react";
import Image from "next/image";

function Edukasi() {
  return (
    <main
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/img/edukasi hal.png')" }}
    >
      <div className="grid grid-cols-2 pl-28 pt-20">
        <Image
          src="/img/edukasi buku gambar.png"
          width={600}
          height={600}
          alt="gambar"
        />
        <div className="p-12">
          <h1 className="text-6xl">Edukasi</h1>
        </div>
      </div>
    </main>
  );
}

export default Edukasi;
