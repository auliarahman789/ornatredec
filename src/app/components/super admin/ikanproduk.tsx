import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Ikanproduk = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getIkan();
  }, []);

  async function getIkan() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/filterdanGet?kategori=ikan`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });
      setData(res.data); 
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert('Terjadi kesalahan saat mengambil data produk ikan.');
    }
  }

  return (
    <div className="pt-14 px-7">
      <div className="grid grid-cols-5 gap-5">
        {data.map((item: any, i: number) => (
          <div
            className="w-[160px] h-[200px] bg-white rounded-xl border-[1.5px] border-[#A9A7A7] "
            key={item.id}
          >
            <a href="#">
              <img
                className="mx-auto mt-5 h-[55%] w-[85%]"
                alt="Produk Gambar"
                src={
                  "https://74gslzvj-8000.asse.devtunnels.ms" +
                  item.foto_produk
                }
              />
            </a>
            <div className="px-4 py-2">
              <h5 className="text-sm font-semibold text-black">
                {item.judul_produk}
              </h5>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-bold text-[#FF0A0A]">
                  Rp {item.harga}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ikanproduk;
