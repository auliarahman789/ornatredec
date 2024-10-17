import React from 'react';

const SkeletonCard = () => {
  return (
    <div
      className="bg-gray-200 mt-[4%] ms-[4%] h-[92px] w-[21%] rounded-xl flex animate-pulse"
      style={{ boxShadow: '1px 5px 4px #00000040' }}
    >
      <div className="w-[45%] h-[45%] bg-gray-300 mt-[10%]"></div>
      <div className="border-r-2 bg-gray-300 h-[46px] mt-6"></div>
      <div className="flex flex-col ms-8 mt-6">
        <div className="w-16 h-4 bg-gray-300 mb-2"></div>
        <div className="w-12 h-6 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
