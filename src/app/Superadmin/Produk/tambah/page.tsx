'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import foto from '../../../../../public/img/Group 1000004376 (1).png'
import axios from 'axios';
import tambahicon from '../../../../../public/icon/dell_square.svg'

const Page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>("");
  const [subVariasi, setSubVariasi] = useState<string[]>([]);
  const [subVariasi2, setSubVariasi2] = useState<string[]>([]);
  const [judulProduk, setJudulProduk] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [harga, setHarga] = useState<string>(""); 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
    setSubVariasi([...subVariasi, '']); 
  };

  const handleChangeField = (i: number, value: string) => {
    const inputData = [...subVariasi];
    inputData[i] = value; 
    setSubVariasi(inputData);
  };
 
  const handleDelete = (i:number) => {
    const deletesSubVariasi = [...subVariasi];
    deletesSubVariasi.splice(i,1)
    setSubVariasi(deletesSubVariasi)
  }

  const handleAdd2 = () => {
    setSubVariasi2([...subVariasi2, '']); 
  };

  const handleChangeField2 = (i: number, value: string) => {
    const inputData = [...subVariasi2];
    inputData[i] = value; 
    setSubVariasi2(inputData);
  };
 
  const handleDelete2 = (i:number) => {
    const deletesSubVariasi = [...subVariasi2];
    deletesSubVariasi.splice(i,1)
    setSubVariasi2(deletesSubVariasi)
  }
  
  async function tambahProduk() {
    const url = `${process.env.NEXT_PUBLIC_URL}/api/produk`;
    try {
      const res = await axios.post(
        url,
        {
          judul_produk: judulProduk,
          deskripsi_produk: deskripsi,
          harga: harga,
          foto_produk: image,
          kategori_produk: selectedCategory || '',
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
    } catch (error: any) {
      console.log("Error:", error.response || error.message);
      alert("Terjadi kesalahan saat membuat produk.");
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
                            value={judulProduk}
                            onChange={(e) => setJudulProduk(e.target.value)}
                            name="Nama produk"
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
                      <label htmlFor="Deskripsi produk" className='text-[#8EAEA6] mt-[3%] text-[20px] font-semibold'>Deskripsi Produk</label>
                      <textarea
                            name="Deskripsi produk"
                            value={deskripsi}
                            onChange={(e) => setDeskripsi(e.target.value)}
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
                                        <input type="radio" name='kategori' className='w-[20px]'
                                        value="tanaman" 
                                        checked={selectedCategory === "tanaman"} 
                                        onChange={() => setSelectedCategory("tanaman")}  />
                                        <label htmlFor="tanaman" className='text-[#308967] font-light'>Tanaman</label>
                                      </div>
                                      <div className="flex space-x-3">
                                        <input type="radio" name='kategori' className='w-[20px]' 
                                         value="burung" 
                                         checked={selectedCategory === "burung"} 
                                         onChange={() => setSelectedCategory("burung")}/>
                                        <label htmlFor="burung" className='text-[#308967] font-light'>Burung</label>
                                      </div>
                                      <div className="flex space-x-3">
                                        <input type="radio" name='kategori' className='w-[20px] border-2 
                                         border-[#308967]'  value="ikan" 
                                         checked={selectedCategory === "ikan"} 
                                         onChange={() => setSelectedCategory("ikan")} />
                                        <label htmlFor="ikan" className='text-[#308967] font-light'>Ikan</label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      <label htmlFor="Harga" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Harga Produk</label>
                      <input
                      value={harga}
                      onChange={(e) => setHarga(e.target.value)}
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
                    <button onClick={()=>handleAdd()}><Image src={tambahicon} width={20} height={20} alt='add' className='absolute right-[100%] top-0 translate-y-8 me-2'/></button>
                    </div>
                    <div>
                    {subVariasi.map((data, i) => (
                      <div key={i} className='flex flex-col'>
                        <div className="grid grid-cols-5 space-x-12 mb-4"> 
                          <div>
                          <label htmlFor={`nama-variasi-${i}`} className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Nama Variasi</label>
                            <input
                              onChange={e => handleChangeField(i, e.target.value)}
                              type="text" 
                              name={`nama-variasi-${i}`}
                              className="w-[150px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                              required
                            />
                          </div>
                          <div className="pl-2">
                           <label htmlFor={`stok-${i}`} className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Stok</label>
                            <input
                              onChange={e => handleChangeField(i, e.target.value)}
                              type="text" 
                              name={`stok-${i}`}
                              className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                              required
                            />
                          </div>
                          <div className="pl-1">
                          <label htmlFor={`harga-${i}`} className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Harga</label>
                            <input
                              onChange={e => handleChangeField(i, e.target.value)}
                              type="text" 
                              name={`harga-${i}`}
                              className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                              required
                            />
                          </div>
                          <div className="pl-1">
                          <label htmlFor={`usia-${i}`} className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Usia</label>
                            <input
                              onChange={e => handleChangeField(i, e.target.value)}
                              type="text" 
                              name={`usia-${i}`}
                              className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                              required
                            />
                          </div>
                          <button className='px-4 bg-[#8EAEA6] h-[45px] mt-7 font-bold text-white rounded-md' onClick={() => handleDelete(i)}>X</button>
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
                    {subVariasi2.map((data, i) => (
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
              <button className='py-1 absolute right-0 top-12 text-[#8EAEA6] font-semibold text-[19px] w-[20%] bg-white' onClick={tambahProduk}>
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