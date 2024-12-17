import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface PostData {
  id: number;
  userId: number;
  postId: number;
  createdAt: string;
  updatedAt: string;
  post: {
    id: number;
    judul: string;
    desc: string;
    fotoKonten: string;
    kategori_forum: string;
    jumlahTanggapan: number;
    jumlahView: string;
    jumlahReport: string;
    createdAt: string;
    updatedAt: string;
  };
  User: {
    id: number;
    username: string;
    email: string;
    no_hp: string;
    role: string;
    alamat: string;
    photoProfile: string;
    tanggalLahir: string;
    status: string;
    statusAktif: string;
    createdAt: string;
    updatedAt: string;
  };
}

const Riwayat: React.FC = () => {
  const [data, setData] = useState<PostData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<PostData[]>(
          `${process.env.NEXT_PUBLIC_URL}api/simpanan`,
          { withCredentials: true }
        );
        setData(response.data);
        setError(null); // Reset error jika sukses
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            "Terjadi kesalahan saat mengambil data."
        );
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : data.length > 0 ? (
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center"
            >
              <img
                src={"https://74gslzvj-8000.asse.devtunnels.ms" + item.post.fotoKonten}
                alt="Foto Konten"
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.post.judul}</h2>
                <p className="text-gray-600">{item.post.desc}</p>
                <div className=" flex flex-row mt-3">
                  <p className="w-[66px] h-[17px] bg-[#83F6CA] text-[12px] text-[#06612B] font-light rounded-sm text-center">
                    {item.post.kategori_forum}
                  </p>
                  <p className="ml-5 text-[7px] font-light text-black">
                    <img
                      src="/icon/komen.svg"
                      width={15}
                      height={15}
                      alt="komen"
                    />
                    <span className="ml-1">{item.post.jumlahTanggapan}</span>
                  </p>
                  <p className="ml-5 text-[7px] font-light text-black">
                    <img
                      src="/icon/mata.svg"
                      width={20}
                      height={20}
                      alt="komen"
                    />
                    <span className="ml-2 mt-2">{item.post.jumlahView}</span>
                  </p>
                  <div className="ml-5">
                    <img
                      src="/icon/simpan.svg"
                      width={15}
                      height={15}
                      alt="komen"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">harap simpan postingan belum ada data</p>
      )}
    </div>
  );
};

export default Riwayat;
