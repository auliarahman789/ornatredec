import React from 'react'
import up from "../../../../public/img/upkonten.png"
import Image from 'next/image'
function Page() {
  return (
      <div className='flex min-h-screen'>
          <div className="w-[38%] flex-col pt-[3.5%]">
              <Image className="w-[80%] h-[45%] justify-self-center" src={up} alt="up" width={400} height={400} />
              <div className="flex flex-col space-y-6 mt-[15%] justify-self-center">
                    <div className="flex space-x-3">
                      <input
                        type="radio"
                        name="kategori_produk"
                        className="w-[20px]"
                        value="tanaman"
                        id="tanaman"
                      />
                      <label
                        htmlFor="tanaman"
                        className="text-[#308967] text-[20px] font-light"
                      >
                        Tanaman
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <input
                        type="radio"
                        name="kategori_produk"
                        className="w-[20px]"
                        value="burung"
                        id="burung"
    
                      />
                      <label
                        htmlFor="burung"
                        className="text-[#308967] text-[20px] font-light"
                      >
                        Burung
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <input
                        type="radio"
                        name="kategori_produk"
                        className="w-[20px] border-2 
                                         border-[#308967]"
                        value="ikan"
                        id="ikan"
    
                      />
                      <label
                        htmlFor="ikan"
                        className="text-[#308967] text-[20px] font-light"
                      >
                        Ikan
                      </label>
                    </div>
             
                  </div>
         </div>
          <div className="w-[62%] p-[2.5%] pb-[2.5%]">
              <div className="relative">
                  <button className='absolute right-0 bg-[#367B60] -translate-y-[80%] translate-x-[80%] pt-1 px-3 text-[20px] rounded-md text-white'>X</button>
              </div>
              <div className="bg-[#E2FFF8] rounded-[5px] w-[100%] px-[2.2%] pt-[2.2%] pb-[0.5%] h-screen">
                  <div className="flex-col space-y-[2%] h-[100%] w-[100%]">
                      <input type="text" placeholder='Masukan Judul' className='bg-white text-lg rounded-[5px] pt-[1%] placeholder:font-light ps-[8%] placeholder:text-[#51CB9F] placeholder:text-[24px] w-[100%] h-[11%]' />
                      <textarea placeholder='Deskripsi' className='bg-white rounded-[5px] text-lg pt-[3%] placeholder:font-light ps-[8%] placeholder:text-[#51CB9F] placeholder:text-[32px] w-[100%] h-[75%]' />
        
                  </div>
              </div>
              <div className="relative">
               <button className='w-[120px] absolute right-0 top-4 h-[40px] bg-[#E2FFF8] rounded-[5px] text-[#51CB9F] text-[24px] pb-2 pt-1'>Posting</button>
              </div>
                  
         </div>
    </div>
  )
}

export default Page