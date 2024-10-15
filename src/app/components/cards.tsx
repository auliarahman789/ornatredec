import React from "react";

interface CardsProps {
  children?: React.ReactNode;
  img: string;
  desc: string;
}

const Cards: React.FC<CardsProps> = ({ children, img, desc }) => {
  return (
    <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center hover:scale-105 duration-150 hover:bg-blue-500">
      <div className="max-w-full rounded ">
        <img
          className="h-32 w-32 object-cover items-center mx-auto"
          src={img}
          alt="Product"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">Product</div>
          <p className="text-gray-700 text-center">{desc}</p>
        </div>
        {children && <div className="px-6 pt-4 pb-2">{children}</div>}
        <div className="absolute inset-0 rounded border-2 border-blue-500 animate-border-light"></div>
      </div>
    </div>
  );
};

export default Cards;
