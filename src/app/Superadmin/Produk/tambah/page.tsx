import React, { useState } from 'react'
import Image from 'next/image'
import foto from '../../../../../public/img/Group 1000004376.png'
import axios from 'axios';

const Page = () => {
    async function tambahProduk() {
      const url = `${process.env.NEXT_PUBLIC_URL}/api/produk`;
      try {
        const res = await axios.post(
          url,
          {
            
          },
          {
            withCredentials: true,
          }
        );
  
      } catch (error: any) {
        console.log(error);
        alert("Terjadi kesalahan saat membuat akun.");
      }
    }
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
                  <div className='bg-[#E2FFF5] min-h-screen w-[62%] ms-[2.5%] pb-[8%]'>
                      <div className='flex flex-col mx-[10%] mt-[7%]'>
                      <label htmlFor="Nama produk" className='text-[#8EAEA6] text-[20px] font-semibold'>Nama Produk</label>
                      <input
                            type="text"
                            name="Nama produk"
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
                      <label htmlFor="Deskripsi produk" className='text-[#8EAEA6] mt-[3%] text-[20px] font-semibold'>Deskripsi Produk</label>
                      <textarea
                            name="Deskripsi produk"
                            className="w-[100%] mt-1 bg-white h-[250px]
                            text-[20px] px-3 py-2 text-[#3F9272] rounded-md"
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
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
              <p className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Variasi Produk</p>
              <div className="ms-7 mt-3 flex flex-col">
                      <label htmlFor="nama variasi" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Nama Variasi</label>
                      <input
                            type="text"
                            name="nama variasi"
                            className="w-[40%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
              </div>
                <p className='text-[#8EAEA6] ms-12 text-[20px] font-semibold mt-[3%]'>Sub Variasi</p>
              <div className="grid grid-cols-2 ms-12">
                <div className='flex flex-col'>
                  <label htmlFor="nama variasi" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Nama Variasi</label>
                          <input
                                type="text"
                                name="nama variasi"
                                className="w-[80%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="stok" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Stok</label>
                          <input
                                type="text"
                                name="stok"
                                className="w-[20%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="nama variasi" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Nama Variasi</label>
                          <input
                                type="text"
                                name="nama variasi"
                                className="w-[80%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="stok" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Stok</label>
                          <input
                                type="text"
                                name="stok"
                                className="w-[20%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="nama variasi" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Nama Variasi</label>
                          <input
                                type="text"
                                name="nama variasi"
                                className="w-[80%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="stok" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Stok</label>
                          <input
                                type="text"
                                name="stok"
                                className="w-[20%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
              </div>
              <div className="relative">
              <button className='py-1 absolute right-32 top-5 text-[#8EAEA6] font-semibold text-[19px] w-[20%] bg-white'>
                Tambah</button>
              </div>
                    </div>
                  </div>
              </div>
     </div>
    </div>
  )
}

export default Page