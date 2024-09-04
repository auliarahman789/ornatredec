"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { NextPage } from "next";

const Carausel1: NextPage = () => {
  // const [imageIndex, setImageIndex] = useState<any | null>(null);
  const [imageIndex, setImageIndex] = useState<string>("");
  interface ImageMap {
    [key: string]: any; // Menggunakan tipe any untuk fleksibilitas
  }
  const imageMap: ImageMap = {
    1: "/carousel/1.png",
    2: "/carousel/2.png",
    3: "/carousel/3.png",
    4: "/carousel/4.png",
    5: "/carousel/5.png",
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
    console.log(imageIndex);
    const randomKeys = getRandomImageKeys();
    setImageIndex(randomKeys[0]); // Ambil gambar pertama dari array acak
  }, []);

  // useEffect(() => {
  //   // const imageCount = 12; // Replace with the number of images in your folder
  //   // const randomIndex = Math.floor(Math.random() * imageCount);
  //   // setImageIndex(randomIndex);
  //   const getRandomIndex = () => {
  //     const keys = Object.keys(imageMap);
  //     const randomIndex = Math.floor(Math.random() * keys.length);
  //     return keys[randomIndex];
  //   };

  //   // Atur indeks gambar awal secara acak
  //   setImageIndex(getRandomIndex());
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-[410px] h-[70px] ms-16">
      <Slider {...settings}>
        {getRandomImageKeys().map((key) => (
          <div key={key} className="mt-14 mx-16">
            <Image
              className="w-[300px] h-[400px]"
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
