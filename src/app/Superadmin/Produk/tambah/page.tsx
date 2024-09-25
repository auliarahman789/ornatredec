import React from 'react'
import Image from 'next/image'
import foto from '../../../../../public/img/Group 1000004376.png'

function Page() {
  return (
    <div className='overflow-x-hidden min-h-screen '>
          <div className='translate-x-64'>
              <div className='flex'>    
                <div className='flex flex-col mt-[3%]'>
                    <p className="text-[23px] font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-6 inline-block text-transparent bg-clip-text">
                    Produk
                    </p>
                    <p className="text-sm font-semibold bg-gradient-to-b from-[#00663F] to-[#5CD5A6] ms-4  mt-1 inline-block text-transparent bg-clip-text">
                    Tambah Produk
                    </p>        
                  </div>
                  <div className='bg-[#E2FFF5] min-h-screen w-[62%] ms-[2.5%]'>
                      <div className='flex flex-col mx-[10%] mt-[7%]'>
                      <label htmlFor="Nama produk" className='text-[#8EAEA6] text-[20px] font-semibold'>Nama Produk</label>
                      <input
                            type="text"
                            name="Nama produk"
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] ps-3 text-[#3F9272] rounded-md"
                            required
                          />
                          <div className='flex w-full mt-[3%]'>
                              <div className="w-[50%]">
                                  <label htmlFor="foto" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Detail Gambar</label>
                                  <Image src={foto} alt='foto' width={250} height={200}/>
                                  <input type="file" name='foto' className='mt-3' />
                              </div>
                              <div className="w-[50%] mt-6">
                                  <label htmlFor="foto" className='text-[#8EAEA6] text-[25px] mt-[3%]'>Pilih Kategori</label>
                                  <div className="flex flex-col space-y-6 mt-[5%] ">
                                      <div className='flex space-x-3'>
                                        <input type="radio" name='tanaman' className='w-[20px]' />
                                        <label htmlFor="tanaman" className='text-[#308967] font-light'>Tanaman</label>
                                      </div>
                                      <div className="flex space-x-3">
                                        <input type="radio" name='burung' className='w-[20px]' />
                                        <label htmlFor="burung" className='text-[#308967] font-light'>Burung</label>
                                      </div>
                                      <div className="flex space-x-3">
                                        <input type="radio" name='ikan' className='w-[20px] border-2   border-[#308967]' />
                                        <label htmlFor="ikan" className='text-[#308967] font-light'>Ikan</label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      <label htmlFor="Harga" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Harga Produk</label>
                      <input
                            type="text"
                            name="Harga"
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] ps-3 text-[#3F9272] rounded-md"
                            required
                          />
                          
                    </div>
                  </div>
              </div>
     </div>
    </div>
  )
}

export default Page