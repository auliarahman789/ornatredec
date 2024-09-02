import React from "react";
import Image from "next/image";

function Edukasi() {
  return (
    <main
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/img/edukasi hal.png')" }}
    >
      <div className="pt-4">
        <Image
          src="/img/edukasi buku gambar.png"
          width={500}
          height={500}
          alt="gambar"
        />
      </div>
    </main>
  );
}

export default Edukasi;
