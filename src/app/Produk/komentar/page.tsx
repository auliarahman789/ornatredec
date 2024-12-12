"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Ulasan = {
  id: number;
  id_produk: number;
  id_user: number;
  rating: number;
  komentar: string;
  foto?: string | null;
  video?: string | null;
  createdAt: string;
  updatedAt: string;
};

const Komentar: React.FC = () => {
  const [ulasans, setUlasans] = useState<Ulasan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUlasans = async () => {
      const url = `${process.env.NEXT_PUBLIC_URL}api/ulasan`;
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setUlasans(response.data);
        }
      } catch (error) {
        setUlasans([]);
      }
    };

    fetchUlasans();
  }, []);

  return (
    <div className="bg-white w-[80%] pl-4 mx-auto">
      <h2>Ulasan</h2>
      {ulasans.length === 0 ? (
        <p>Tidak ada ulasan.</p>
      ) : (
        ulasans.map((ulasan) => (
          <div key={ulasan.id} className="ulasan">
            <p>Rating: {ulasan.rating}</p>
            <p>Komentar: {ulasan.komentar}</p>
            {ulasan.foto && (
              <img
                src={ulasan.foto}
                alt="Foto Ulasan"
                style={{ width: "200px", height: "auto" }}
              />
            )}
            {ulasan.video && (
              <video controls style={{ width: "200px", height: "auto" }}>
                <source src={ulasan.video} type="video/mp4" />
                Browser Anda tidak mendukung pemutar video.
              </video>
            )}
            <p>
              Dibuat pada: {new Date(ulasan.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Komentar;
