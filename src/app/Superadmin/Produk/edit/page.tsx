'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import foto from '../../../../../public/img/Group 1000004376 (1).png'
import tambahicon from '../../../../../public/icon/dell_square.svg'
import axios from 'axios';

const Page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>("");
const handleImageClick = () => {
  if (inputRef.current) {
    inputRef.current.click();
  }
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setImage(imageUrl); 
      console.log(file.name); 
    }
  };
  const [variations, setVariations] = useState<string[]>(['']); // State untuk menyimpan variasi

  const handleAddVariation = () => {
    setVariations([...variations, '']); // Tambahkan variasi baru
  };

  const handleVariationChange = (index: number, value: string) => {
    const updatedVariations = [...variations];
    updatedVariations[index] = value; // Update variasi yang sesuai
    setVariations(updatedVariations);
  };
  

  
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
              <div className='flex justify-center'>    
                  <div className='bg-[#E2FFF5] min-h-screen w-[70%] pb-[10%]'>
                              <div className="w-[30%] mx-auto mt-[6%]">
                                  <div onClick={handleImageClick} className=''>
                                    {image ? (
                                      <Image src={image} alt='foto' width={250} height={200}/>
                                    ):(
                                      <Image src={foto} alt='foto' width={250} height={200}/>
                                    )}
                                    <input type="file" name='foto' ref={inputRef} onChange={handleImageChange} className='mt-3' style={{ display: 'none' }} />
                                    </div>
                              </div>
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
                            className="w-[100%] mt-1 bg-white h-[210px]
                            text-[20px] px-3 py-2 text-[#3F9272] rounded-md"
                            maxLength={300}
                            required
                          />
              <p className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Variasi Produk</p>
              <div className="ms-7 mt-3 flex flex-col">
                      <label htmlFor="nama variasi" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Nama Variasi</label>
                      <input
                            type="text"
                            name="nama variasi"
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
              </div>
                <p className='text-[#8EAEA6] ms-12 text-[20px] font-semibold mt-[3%]'>Sub Variasi</p>
              <div className=" ms-12">
                <div className='flex flex-col'>
                  <label htmlFor="nama variasi" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Nama Variasi</label>
                          <input
                                type="text"
                                name="nama variasi"
                                className="w-[100%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="nama variasi" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Nama Variasi</label>
                          <input
                                type="text"
                                name="nama variasi"
                                className="w-[100%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="nama variasi" className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>Nama Variasi</label>
                          <input
                                type="text"
                                name="nama variasi"
                                className="w-[100%] mt-1 bg-white h-[45px]
                                text-[20px] px-3 text-[#3F9272] rounded-md"
                                required
                    />
                </div>
              </div>
              <div className="ms-7 mt-3 flex flex-col">
                      <label htmlFor="nama variasi" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Nama Variasi</label>
                      <input
                            type="text"
                            name="nama variasi"
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
              </div>
              <p className='text-[#8EAEA6] ms-12 text-[20px] font-semibold mt-[3%]'>Sub Variasi</p>
              <div className="ms-12">
              <button
                type="button"
                onClick={handleAddVariation}
              >
                <Image src={tambahicon} width={50} height={50} alt='ikon tambah'/>
              </button>
                {variations.map((variation, index) => (
                  <div key={index} className='flex flex-col'>
                    <label htmlFor={`variation-${index}`} className='text-[#8EAEA6] text-sm font-semibold mt-[3%]'>
                      Nama Variasi {index + 1}
                    </label>
                    <input
                      type="text"
                      name={`variation-${index}`}
                      value={variation}
                      onChange={(e) => handleVariationChange(index, e.target.value)}
                      className="w-[100%] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                      required
                    />
                  </div>
                ))}

              </div>
              {/* Tombol untuk menambah field variasi */}
              <div className="relative">
              <button className='py-1 absolute right-0 top-12 text-[#8EAEA6] font-semibold text-[19px] w-[20%] bg-white'>
                Tambah</button>
              </div>
                    </div>
                  </div>
              </div>
     </div>
  )
}

export default Page