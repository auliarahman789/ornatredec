"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import foto from "../../../../../../public/img/Group 1000004376 (1).png";
import axios from "axios";
import tambahicon from "../../../../../../public/icon/dell_square.svg";
import { useRouter } from "next/navigation";
import LoadingProduk from "@/components/super admin/loadingProduk";

interface SubVariasi {
  nama_sub_variasi: string;
  stok: number;
  harga: number;
  usia: string;
}

interface Variasi {
  nama_variasi: string;
  subvariasis: SubVariasi[];
}

interface Produk {
  judul_produk: string;
  deskripsi_produk: string;
  harga: number;
  foto_produk: string;
  variasis: Variasi[];
}

const Page = ({ params }: { params: { id: number } }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>();
  const [variasi, setVariasi] = useState([
    {
      nama_variasi: "",
      subvariasis: [
        {
          nama_sub_variasi: "",
          usia: 0,
          stok: 0,
          harga: 0,
        },
      ],
    },
  ]);

  const [subVariasi2, setSubVariasi2] = useState<string[]>([]);
  const [judulProduk, setJudulProduk] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [harga, setHarga] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [formData, setFormData] = useState<Produk>({
    judul_produk: "",
    deskripsi_produk: "",
    harga: 0,
    foto_produk: "",
    variasis: [],
  });
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    getProduk();
  }, [id]);

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

  // const handleAdd = () => {
  //   setVariasi([
  //     ...variasi,
  //     {
  //       nama_variasi: "",
  //       sub_variasi: [
  //         {
  //           nama_sub_variasi: "",
  //           usia: 0,
  //           stok: 0,
  //           harga: 0,
  //         },
  //       ],
  //     },
  //   ]);
  // };

  const handleChangeField = (e: any, i: number) => {
    const { name, value } = e.target;
    const onChange: any = [...variasi];
    onChange[i][name] = value;
    setVariasi(onChange);
  };

  const handleChangeFieldSub = (e: any, i: number, ii: number) => {
    const { name, value } = e.target;
    const onChange: any = [...variasi];
    onChange[i].subvariasis[ii][name] = value;
    setVariasi(onChange);
    console.log(onChange);
  };

  // const handleAddSub = (i: any) => {
  //   const onChange = [...variasi];
  //   onChange[i][`sub_variasi`].push({
  //     nama_sub_variasi: "",
  //     usia: 0,
  //     stok: 0,
  //     harga: 0,
  //   });
  //   setVariasi(onChange);
  // };

  // const handleDelete = (i: number) => {
  //   const deletesvariasi = [...variasi];
  //   deletesvariasi.splice(i, 1);
  //   setVariasi(deletesvariasi);
  // };
  const handleDeleteSub = (i: number, ii: number) => {
    const deletesvariasi = [...variasi];
    deletesvariasi[i].subvariasis.splice(ii, 1);
    setVariasi(deletesvariasi);
  };

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

  const getProduk = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/getProdukId/${id}`;
    try {
      const res = await axios.get(url, {
        withCredentials: true,
      });

      setFormData({
        judul_produk: res.data.judul_produk,
        deskripsi_produk: res.data.deskripsi_produk,
        harga: res.data.harga,
        foto_produk: res.data.foto_produk,
        variasis: res.data.variasis || [], // Tambahkan default [] jika variasi kosong
      });
      setVariasi(res.data.variasis || []); // Simpan variasi ke state
      setImage(res.data.foto_produk);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      const formData2 = new FormData();
      formData2.append("judul_produk", formData.judul_produk);
      formData2.append("deskripsi_produk", formData.deskripsi_produk);
      formData2.append("harga", formData.harga.toString());
      formData2.append("foto_produk", formData.foto_produk);
      formData2.append("variasi", JSON.stringify(variasi));

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL}api/editProduk/${id}`,
        formData2,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Produk berhasil diedit");
      router?.push("/Superadmin/Produk");
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengedit produk");
    }
  };

  const handleDeleteProduk = async () => {
    const url = `${process.env.NEXT_PUBLIC_URL}api/hapusProduk/${id}`;
    try {
      const res = await axios.delete(url, {
        withCredentials: true,
      });
      console.log(res.data);
      alert("berhasil menghapus produk");
      router?.push("/Superadmin/Produk");
    } catch (error) {
      alert("gagal menghapus produk");
    }
  };

  // async function tambahProduk() {
  //   const formData2 = new FormData();
  //   formData2.append("judul_produk", formData.judul_produk);
  //   formData2.append("deskripsi_produk", formData.deskripsi_produk);
  //   formData2.append("harga", formData.harga.toString());
  //   formData2.append("foto_produk", formData.foto_produk);
  //   formData2.append("kategori_produk", formData.kategori_produk);
  //   formData2.append("variasi", JSON.stringify(variasi));

  //   const url = `https://74gslzvj-8000.asse.devtunnels.ms/api/produk`;
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.post(url, formData2, {
  //       withCredentials: true,
  //     });
  //     router?.push('/Superadmin/Produk');
  //     alert('Berhasil menambahkan produk')
  //     console.log(res.data);
  //     setIsLoading(false);
  //   } catch (error: any) {
  //     setIsLoading(false);
  //     console.log(error);
  //   }
  // }

  // const handleEdit = async () => {
  //   try {
  //     const formData2 = new FormData();
  //     formData2.append("judul_produk", formData.judul_produk);
  //     formData2.append("deskripsi_produk", formData.deskripsi_produk);
  //     formData2.append("harga", formData.harga.toString());
  //     formData2.append("foto_produk", formData.foto_produk);
  //     formData2.append("kategori_produk", formData.kategori_produk);
  //     formData2.append("variasi", JSON.stringify(variasi));
  //     const id =
  //     const response = await axios.put(
  //       `https://74gslzvj-8000.asse.devtunnels.ms/api/editProduk/${id}`,
  //       formData2,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-Data",
  //         },
  //       }
  //     );
  //   }
  // }

  return (
    <div className="overflow-x-hidden min-h-screen ">
      <div className="flex justify-center">
        <div className="bg-[#E2FFF5] min-h-screen w-[62%] ms-[2.5%] pb-[8%]">
          <div className="flex flex-col mx-[10%] mt-[7%]">
            <div className="relative">
              <button
                onClick={handleDeleteProduk}
                className="bg-[#3F9272] cursor-pointer absolute top-3 right-0 text-white rounded-full py-1 px-2 w-[16%] text-[11px] font-bold"
              >
                Hapus Produk
              </button>
            </div>
            <div className="w-[50%] mx-auto mb-[6%]">
              <div onClick={handleImageClick} className="ms-[3%]">
                {image ? (
                  <img
                    src={"https://74gslzvj-8000.asse.devtunnels.ms" + image}
                    alt="foto"
                    width={250}
                    height={200}
                  />
                ) : (
                  <Image src={foto} alt="foto" width={250} height={200} />
                )}
                <input
                  type="file"
                  name="foto"
                  ref={inputRef}
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={handleInputImage}
                  className="mt-3"
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <label
              htmlFor="Nama produk"
              className="text-[#8EAEA6] mt-[4%] text-[20px] font-semibold"
            >
              Nama Produk
            </label>
            <input
              type="text"
              defaultValue={formData.judul_produk}
              onChange={handleInputChange}
              name="judul_produk"
              className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
              required
            />
            <label
              htmlFor="Deskripsi produk"
              className="text-[#8EAEA6] mt-[3%] text-[20px] font-semibold"
            >
              Deskripsi Produk
            </label>
            <textarea
              name="deskripsi_produk"
              defaultValue={formData.deskripsi_produk}
              onChange={handleInputChange}
              className="w-[100%] mt-1 bg-white h-[210px]

                            text-[20px] px-3 py-2 text-[#3F9272] rounded-md"
              maxLength={300}
              required
            />
            {/* <div className='flex w-full mt-[3%]'>
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
                          </div> */}
            <label
              htmlFor="Harga"
              className="text-[#8EAEA6] text-[20px] font-semibold mt-[3%]"
            >
              Harga Produk
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="harga"
              defaultValue={formData.harga}
              className="w-[100%] mt-1 bg-white h-[45px]
                            text-[20px] px-3 text-[#3F9272] rounded-md"
              required
            />
            <p className="text-[#8EAEA6] text-[20px] font-semibold mt-[3%]">
              Variasi Produk
            </p>
            {variasi.length > 0 ? (
              variasi.map((data, i) => (
                <div key={i}>
                  <div className="flex flex-row mt-[5%]">
                    <div className="ms-7 -translate-y-4 w-[83%] mt-2 flex-col">
                      <label
                        htmlFor="nama_variasi"
                        className="text-[#8EAEA6] text-[20px] font-semibold mt-[3%]"
                      >
                        Nama Variasi
                      </label>
                      <input
                        type="text"
                        name="nama_variasi"
                        onChange={(e) => handleChangeField(e, i)}
                        className="w-[100%] mt-1 bg-white h-[45px]
                              text-[20px] px-3 text-[#3F9272] rounded-md"
                        defaultValue={data.nama_variasi}
                        required
                      />
                    </div>
                    {/* <div>
                    <button
                      className="px-7 ms-4 bg-[#8EAEA6] h-[45px] mt-7 font-bold text-white rounded-md"
                      onClick={() => handleDelete(i)}
                    >
                      X
                    </button>
                  </div> */}
                  </div>
                  <p className="text-[#8EAEA6] ms-12 text-[20px] font-semibold mt-[3%]">
                    Sub Variasi
                  </p>
                  <div className=" ms-12">
                    <div>
                      {data.subvariasis.length > 0 ? (
                        data.subvariasis.map((data2: any, ii: number) => (
                          <div key={data2.id || ii} className="flex flex-col">
                            <div className="grid grid-cols-5 space-x-12 mb-4">
                              <div>
                                <label
                                  htmlFor="nama_variasi"
                                  className="text-[#8EAEA6] text-sm mt-2 font-semibold"
                                >
                                  Nama Variasi
                                </label>
                                <input
                                  onChange={(e) =>
                                    handleChangeFieldSub(e, i, ii)
                                  }
                                  type="text"
                                  name="nama_sub_variasi"
                                  defaultValue={data2.nama_sub_variasi}
                                  className="w-[150px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                              <div className="pl-2">
                                <label
                                  htmlFor="stok"
                                  className="text-[#8EAEA6] text-sm mt-2 font-semibold"
                                >
                                  Stok
                                </label>
                                <input
                                  onChange={(e) =>
                                    handleChangeFieldSub(e, i, ii)
                                  }
                                  defaultValue={data2.stok}
                                  type="text"
                                  name="stok"
                                  className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                              <div className="pl-1">
                                <label
                                  htmlFor="harga"
                                  className="text-[#8EAEA6] text-sm mt-2 font-semibold"
                                >
                                  Harga
                                </label>
                                <input
                                  onChange={(e) =>
                                    handleChangeFieldSub(e, i, ii)
                                  }
                                  type="text"
                                  name="harga"
                                  defaultValue={data2.harga}
                                  className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                              <div className="pl-1">
                                <label
                                  htmlFor="usia"
                                  className="text-[#8EAEA6] text-sm mt-2 font-semibold"
                                >
                                  Usia
                                </label>
                                <input
                                  onChange={(e) =>
                                    handleChangeFieldSub(e, i, ii)
                                  }
                                  type="text"
                                  name="usia"
                                  defaultValue={data2.usia}
                                  className="w-[90px] mt-1 bg-white h-[45px] text-[20px] px-3 text-[#3F9272] rounded-md"
                                  required
                                />
                              </div>
                              <button
                                className="px-4 bg-[#8EAEA6] h-[45px] mt-7 font-bold text-white rounded-md"
                                onClick={() => handleDeleteSub(i, ii)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>Tidak ada variasi</p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Tidak ada variasi</p>
            )}

            <div className="relative">
              <button
                className="py-1 absolute right-0 top-12 text-[#8EAEA6] font-semibold text-[19px] w-[20%] bg-white"
                disabled={isLoading}
                onClick={handleEdit}
              >
                {isLoading ? "Loading..." : "Edit"}{" "}
              </button>
              {isLoading && <LoadingProduk />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
