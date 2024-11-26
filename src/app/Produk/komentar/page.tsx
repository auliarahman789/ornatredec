"use client";
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
      try {
        const url = `${process.env.NEXT_PUBLIC_URL}/api/filterdanGet`;
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setUlasans(data);
        } else {
          console.error("Gagal mengambil data ulasan dari API");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUlasans();
  }, []);

  if (loading) {
    return <p>Loading ulasan...</p>;
  }

  return (
    <div>
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
