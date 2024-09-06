import Image from 'next/image'
import React from 'react'
import Footer from '../components/homepage/footer'

function Page() {
  return (
    <div className="bg-[#E4FFF2] w-full min-h-screen">
      <div>
              <h1 className='text-center py-8 text-[40px] font-bold text-[#3F9272]'>Tentang kami</h1>
              <div className='grid grid-cols-3 ms-20 space-y-10 pb-10'>
                  <div className='col-span-2 my-10'>
                      <h1 className='text-[#3F9272] font-bold text-[33px]'>
                          Edukasi
                      </h1>
                      <p>
                          
                      </p>
                  </div>
                  <div className=''>
                      <Image src='/img/about1.png' alt={''} width={300} height={400}/>
                  </div>
                  <div>
                  <Image src='/img/about2.png' alt={''} width={300} height={400}/>
                  </div>
                  <div className='col-span-2'>
                    <h1 className='text-[#3F9272] font-bold text-[33px]'>
                          Produk
                      </h1>
                      <p>
                          
                      </p>
                  </div>
                  <div className='col-span-2'>
                  <h1 className='text-[#3F9272] font-bold text-[33px]'>
                          Forum
                      </h1>
                      <p>
                          
                      </p>
                  </div>
                  <div>
                        <Image src='/img/about2.png' alt={''} width={300} height={400}/>
                  </div>
              </div>
              <div className='bg-[#51CB9F] h-[280px]'>
                  <h1 className='text-center font-bold text-[25px] text-white py-6'>Informasi Website</h1>
              </div>
              <Footer/>
      </div>
    </div>
  )
}

export default Page