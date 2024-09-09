"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { NextPage } from "next";

const Carausel1: NextPage = () => {
  const [shuffledKeys, setShuffledKeys] = useState<string[]>([]); // State untuk menyimpan key yang sudah diacak

  interface ImageMap {
    [key: string]: any;
  }

  const imageMap: ImageMap = {
    1: "/carousel/13.png",
    2: "/carousel/14.png",
    3: "/carousel/15.png",
    4: "/carousel/16.png",
  };

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getRandomImageKeys = (): string[] => {
    const keys = Object.keys(imageMap);
    return shuffleArray(keys);
  };

  useEffect(() => {
    const randomKeys = getRandomImageKeys();
    setShuffledKeys(randomKeys); // Simpan array yang sudah diacak dalam state
  }, []); // Hanya diacak sekali saat komponen pertama kali di-render

  const settings = {
    dots: false,
    infinite: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
  };

  return (
    <div className="w-[410px] h-[70px] ms-16">
      <Slider {...settings}>
        {shuffledKeys.map((key) => (
          <div key={key} className="mt-14 mx-20">
            <Image
              className={`w-[300px] h-[400px] ${
                key === "2" ? "mt-10 ms-5" : ""
              }`} // Menambahkan class 'custom-class' hanya pada gambar ke-14
              src={imageMap[key]}
              alt="Gambar Acak"
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carausel1;
