'use client'
import React, { ChangeEvent, useRef, useState } from 'react'
import Image from 'next/image'
import foto from '../../../../../public/img/Group 1000004376 (1).png'
import axios from 'axios';
import tambahicon from '../../../../../public/icon/dell_square.svg'

interface Produk {
          judul_produk: string,
          deskripsi_produk: string,
          harga: number, 
          foto_produk: any,
          kategori_produk: string,
          variasi: any 
}

const Page = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>();
  const [variasi, setVariasi] = useState([
    
    {
      nama_variasi: '',       
      sub_variasi: [
        { 
          nama_sub_variasi: '',
          usia: 0,
          stok: 0,
          harga:0
        }
      ]
    }
  ])

  const [subVariasi2, setSubVariasi2] = useState<string[]>([]);
  const [judulProduk, setJudulProduk] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [harga, setHarga] = useState<number>(); 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [formData, setFormData] = useState<Produk>({
    judul_produk: '',
    deskripsi_produk: '',
    harga: 0, 
    foto_produk: '',
    kategori_produk: '',
    variasi: []
  });

const handleImageClick = () => {
  if (inputRef.current) {
    inputRef.current.click();
  }
  };
  const handleInputImage = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      ["foto_produk"]: e.target.files[0],
    }));
    console.log(e.target.files);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value);
  };
  
  const handleAdd = () => {
    setVariasi([
      ...variasi,
      {
        nama_variasi: '',
        sub_variasi: [
          {
            nama_sub_variasi: '',
            usia: 0,
            stok: 0,
            harga:0
          }
        ]
    }])
  }

  const handleChangeField = (e:any, i: number) => {
    const { name, value } = e.target;
    const onChange: any = [...variasi];
    onChange[i][name] = value;
    setVariasi(onChange);
  };

  const handleChangeFieldSub = (e:any, i: number, ii:number) => {
    const { name, value } = e.target;
    const onChange: any = [...variasi];
    onChange[i][`sub_variasi`][ii][name] = value;
    setVariasi(onChange);
    console.log(onChange)
  };

  const handleAddSub = (i: any) => {
    const onChange = [...variasi];
    onChange[i][`sub_variasi`].push({
      nama_sub_variasi: '',
      usia: 0,
      stok: 0,
      harga:0
    })
    setVariasi(onChange)
  }
 
  const handleDelete = (i:number) => {
    const deletesvariasi = [...variasi];
    deletesvariasi.splice(i,1)
    setVariasi(deletesvariasi)
  }
  // const handleDeleteSub = (ii:number) => {
  //   const deletesvariasi = [...variasi];
  //   deletesvariasi.splice(ii,1)
  //   setVariasi(deletesvariasi)
  // }

  // const handleAdd2 = () => {
  //   setSubVariasi2([
  //     ...subVariasi2,
  //     {
  //     nama_sub_variasi: '',
  //     usia: 0,
  //     stok: 0,
  //     harga:0
  //   }])
  // };

  // const handleChangeField2 = (e:any, i: number) => {
  //   const { name, value } = e.target;
  //   const onChange: any = [...subVariasi2];
  //   onChange[i][name] = value;
  //   setSubVariasi2(onChange);
  // };
 
  // const handleDelete2 = (i:number) => {
  //   const deletesSubVariasi = [...subVariasi2];
  //   deletesSubVariasi.splice(i, 1) 
  //   setSubVariasi2(deletesSubVariasi)
  // }
  
  async function tambahProduk() {
    const formData2 = new FormData();
    formData2.append("judul_produk", formData.judul_produk);
    formData2.append("deskripsi_produk", formData.deskripsi_produk);
    formData2.append("harga", formData.harga.toString());
    formData2.append("foto_produk", formData.foto_produk);
    formData2.append("kategori_produk", formData.kategori_produk);
    formData2.append("variasi", JSON.stringify(variasi)); 
  
    const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/produk`;
    try {
      const res = await axios.post(url, formData2, {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
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
                            onChange={handleInputChange}
                            name="judul_produk"
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
                      <label htmlFor="Deskripsi produk" className='text-[#8EAEA6] mt-[3%] text-[20px] font-semibold'>Deskripsi Produk</label>
                      <textarea
                            name="deskripsi_produk"
                            onChange={handleInputChange}
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
                                    <input type="file" name='foto' ref={inputRef} accept="image/x-png,image/gif,image/jpeg" onChange={handleInputImage} className='mt-3' style={{ display: 'none' }} />
                                    </div>
                              </div>
                              <div className="w-[50%] mt-6">
                                  <label htmlFor="foto" className='text-[#8EAEA6] text-[25px] mt-[3%]'>Pilih Kategori</label>
                                  <div className="flex flex-col space-y-6 mt-[5%] ">
                                      <div className='flex space-x-3'>
                                        <input type="radio" name='kategori_produk' className='w-[20px]'
                                        value="tanaman" id='tanaman' 
                                        onChange={handleInputChange}  />
                                        <label htmlFor="tanaman" className='text-[#308967] font-light'>Tanaman</label>
                                      </div>
                                      <div className="flex space-x-3">
                                        <input type="radio" name='kategori_produk' className='w-[20px]' 
                                         value="burung" id='burung'
                                         onChange={handleInputChange}/>
                                        <label htmlFor="burung" className='text-[#308967] font-light'>Burung</label>
                                      </div>
                                      <div className="flex space-x-3">
                                        <input type="radio" name='kategori_produk' className='w-[20px] border-2 
                                         border-[#308967]'  value="ikan" id='ikan'
                                         onChange={handleInputChange} />
                                        <label htmlFor="ikan" className='text-[#308967] font-light'>Ikan</label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      <label htmlFor="Harga" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Harga Produk</label>
                      <input
                      onChange={handleInputChange}
                            type="text"
                            name="harga"
                            
                            className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
                            required
                          />
              <p className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Variasi Produk</p>
                    <div className="relative">
                <button onClick={handleAdd}
                  > <Image src={tambahicon} width={20} height={20} alt='add' className='absolute right-[100%] top-0 translate-y-8 me-2' /></button>
                    </div>
              {variasi.map((data, i) => (
                <>
                  <div className="flex flex-row">
                    <div className="ms-7 -translate-y-4 w-[83%] mt-2 flex-col">
                      <label htmlFor="nama variasi" className='text-[#8EAEA6] text-[20px] font-semibold mt-[3%]'>Nama Variasi</label>
                      <input
                        type="text"
                        name="nama_variasi"
                        onChange={(e) => handleChangeField(e, i)}
                        className="w-[100%] mt-1 bg-white h-[45px]
                              text-[20px] px-3 text-[#3F9272] rounded-md"
                        required
                      />
                  </div>
                      <div>
                        <button className='px-7 ms-4 bg-[#8EAEA6] h-[45px] mt-7 font-bold text-white rounded-md' onClick={() => handleDelete(i)}>
                        X</button>
                      </div>
                  </div>
                  <p className='text-[#8EAEA6] ms-12 text-[20px] font-semibold mt-[3%]'>Sub Variasi</p>
                  <div className="relative">
                      <button onClick={() => handleAddSub(i)}><Image src={tambahicon} width={20} height={20} alt='add' className='absolute right-[100%] top-0 translate-y-8 me-2' /></button>
                    </div>
                  <div className=" ms-12">
                    <div>
                      {data.sub_variasi.map((data2: any, ii: number) => {
                        return (
                         <>
                          <div key={i} className='flex flex-col'>
                            <div className="grid grid-cols-5 space-x-12 mb-4">
                              <div>
                                <label htmlFor='nama_variasi' className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Nama Variasi</label>
                                <input
                                  onChange={(e) => handleChangeFieldSub(e, i, ii)}
                                  type="text"
                                  name='nama_sub_variasi'
                                  className="w-[150px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                              <div className="pl-2">
                                <label htmlFor='stok' className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Stok</label>
                                <input
                                  onChange={(e) => handleChangeFieldSub(e, i, ii)}
                                  type="text"
                                  name='stok'
                                  className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                              <div className="pl-1">
                                <label htmlFor='harga' className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Harga</label>
                                <input
                                  onChange={(e) => handleChangeFieldSub(e, i, ii)}
                                  type="text"
                                  name='harga'
                                  className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                              <div className="pl-1">
                                <label htmlFor='usia' className='text-[#8EAEA6] text-sm mt-2 font-semibold'>Usia</label>
                                <input
                                  onChange={(e) => handleChangeFieldSub(e, i, ii)}
                                  type="text"
                                  name='usia'
                                  className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                                <button className='px-4 bg-[#8EAEA6] h-[45px] mt-7 font-bold text-white rounded-md' onClick={() => handleDeleteSub(ii)}>
                                  X</button>
                            </div>
                          </div>
                         </>
                        )
                      })}
                    </div>
                    </div>
                    </>
))}
             
              
              <div className="relative">
                <button className='py-1 absolute right-0 top-12 text-[#8EAEA6] font-semibold text-[19px] w-[20%] bg-white'
                  onClick={() => tambahProduk()}>
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