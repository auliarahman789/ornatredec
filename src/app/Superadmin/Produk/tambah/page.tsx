'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import foto from '../../../../../public/img/Group 1000004376 (1).png'
import axios from 'axios';
import tambahicon from '../../../../../public/icon/dell_square.svg'

const Page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>("");
  const [variasi, setVariasi] = useState<string[]>([]);
  const [variasi2, setVariasi2] = useState<string[]>([]);
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
  const handleAdd = () => {
    setVariasi([...variasi, '']); 
  };

  const handleChangeField = (i: number, value: string) => {
    const inputData = [...variasi];
    inputData[i] = value; 
    setVariasi(inputData);
  };
 
  const handleDelete = (i:number) => {
    const deleteVariasi = [...variasi];
    deleteVariasi.splice(i,1)
    setVariasi(deleteVariasi)
  }

  const handleAdd2 = () => {
    setVariasi2([...variasi2, '']); 
  };

  const handleChangeField2 = (i: number, value: string) => {
    const inputData = [...variasi2];
    inputData[i] = value; 
    setVariasi2(inputData);
  };
 
  const handleDelete2 = (i:number) => {
    const deleteVariasi = [...variasi2];
    deleteVariasi.splice(i,1)
    setVariasi2(deleteVariasi)
  }
  
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
                            className="w-[100%] mt-1 bg-white h-[210px]
                            text-[20px] px-3 py-2 text-[#3F9272] rounded-md"
                            maxLength={300}
                            required
                          />
                          <div className='flex w-full mt-[3%]'>
                              <div className="w-[50%]">
                                  <label htmlFor="foto" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Detail Gambar</label>
                                  <div onClick={handleImageClick}>
                                    {image ? (
                                      <Image src={image} alt='foto' width={250} height={200}/>
                                    ):(
                                      <Image src={foto} alt='foto' width={250} height={200}/>
                                    )}
                                    <input type="file" name='foto' ref={inputRef} onChange={handleImageChange} className='mt-3' style={{ display: 'none' }} />
                                    </div>
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
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
              </div>
                <p className='text-[#8EAEA6] ms-12 text-[20px] font-semibold mt-[3%]'>Sub Variasi</p>
                  <div className=" ms-12">
                    <div className="relative">
                    <button onClick={()=>handleAdd()}><Image src={tambahicon} width={20} height={20} alt='add' className='absolute right-[100%] translate-y-8 me-2'/></button>
                    </div>
                    <div>
                    {variasi.map((data, i) => (
                      <div key={i} className='flex flex-col'>
                        <label htmlFor={`nama-variasi-${i}`} className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Nama Variasi</label>
                        <div className="flex">
                          <input
                            onChange={e => handleChangeField(i, e.target.value)}
                            type="text"
                            value={data}
                            name={`nama-variasi-${i}`}
                            className="w-[100%] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-s-md"
                            required
                          />
                          <button className='px-4 bg-[#8EAEA6] h-[45px] mt-1 font-bold text-white rounded-e-md' onClick={() => handleDelete(i)}>X</button>
                        </div>
                      </div>
                    ))}
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
                <div className=" ms-12">
                <div className="relative">
                    <button onClick={()=>handleAdd2()}><Image src={tambahicon} width={20} height={20} alt='add' className='absolute right-[100%] translate-y-8 me-2'/></button>
                    </div>
                    <div className='flex flex-col'>
                    {variasi2.map((data, i) => (
                      <div key={i} className='flex flex-col'>
                        <label htmlFor={`nama-variasi-${i}`} className='text-[#8EAEA6] text-sm font-semibold mt-2'>Nama Variasi</label>
                        <div className="flex">
                          <input
                            onChange={e => handleChangeField2(i, e.target.value)}
                            type="text"
                            value={data}
                            name={`nama-variasi-${i}`}
                            className="w-[100%] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-s-md"
                            required
                          />
                          <button className='px-4 bg-[#8EAEA6] h-[45px] mt-1 font-bold text-white rounded-e-md' onClick={() => handleDelete2(i)}>X</button>
                        </div>
                      </div>
                    ))}
                      </div>
                    {/* <div className='flex flex-col'>
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
                    </div> */}
                  </div>
              <div className="relative">
              <button className='py-1 absolute right-0 top-12 text-[#8EAEA6] font-semibold text-[19px] w-[20%] bg-white'>
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