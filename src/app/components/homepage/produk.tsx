import axios from "axios";
import React from "react";

const Produk = () => {
  async function Produk() {
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/product`;
    try {
      const res = await axios.post(
        url,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat login.");
    }
  }

  return (
    // bg-[#D9FFF0]
    <div className="flex flex-col min-h-[80%] bg-slate-300">
      <div className="bg-white my-[69px] mx-[98px] h-[800px] shadow-[12px_12px_15px] shadow-[#0000002e]">
        <div className="font-bold inline-block p-1 mt-[43px] ms-[50px]">
          <span className="text-[#308967] text-[40px]">Produk </span>
          <span className="text-[#51CB9F] text-[40px]">Kami</span>
        </div>
        <div className="px-4 grid grid-cols-4 gap-6">
          {/* {data.map((item: any, i: number) => ( */}
          <div
            // key={i}
            className="w-[239px] h-[319px] border bg-gray-400"
          >
            <a href="#">
              <img
                className="mx-auto h-40 rounded-lg"
                // src={item.image}
                alt="product image"
              />
            </a>
            <div className="px-4 py-2">
              <h5 className="text-lg font-semibold text-black">
                {/* {item.title} */}
              </h5>
              {/* <p className="text-sm text-gray-600">{item.category}</p> */}
              <div className="flex items-center mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 rounded">
                  {/* {item.id} */}
                </span>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-bold text-black">
                  {/* {item.price} */}
                </span>
                {/* <a
                  href=""
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Add to Cart
                </a> */}
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Produk;
