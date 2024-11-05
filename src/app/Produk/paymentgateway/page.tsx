import React from 'react'
import Image from 'next/image';
function page() {
  return (
    <div className="bg-[#E5FFF9] min-h-screen">
      <Image
        src="/icon/backk.svg"
        alt="icon background"
        width={390}
        height={390}
        className="ml-[8%] translate-y-10 h-[50px] w-[50px]"
      />
      <div></div>
    </div>
  );
}

export default page
