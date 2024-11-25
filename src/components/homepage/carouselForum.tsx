"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from "../../../public/icon/profile.svg";
import Image from "next/image";
import nextButton from "../../../public/icon/Group 119.svg";
import prevButton from "../../../public/icon/Group 118.svg";
import ellipseprof from "../../../public/icon/Ellipse 17.svg";
import chat2 from "../../../public/icon/Chat_alt_2 (1).svg";
import axios from "axios";

type Konten = {
  judul: string;
  desc: string;
  fotoKonten: string;
  jumlahTanggapan: number;
  User: {
    username: string;
    photoProfile: string;
  };
};

export default function ForumCarousel() {
  const [data, setData] = useState<Konten[]>([]);
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    customPaging: () => <div className="customDot translate-y-24" />,
    infinite: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true, // Ensure that arrows are enabled
    nextArrow: <div className="custom-arrow next-arrow" />, // Custom next arrow
    prevArrow: <div className="custom-arrow prev-arrow" />, // Custom prev arrow
    // Added styles to prevent carousel from sliding down
    // and ensure it stays within its container
  };

  useEffect(() => {
    getPopulerKonten();
  }, []);

  async function getPopulerKonten() {
    const url = `${process.env.NEXT_PUBLIC_URL}api/populer`;
    try {
      const res = await axios.get<Konten[]>(url, {
        withCredentials: true,
      });
      setData(res.data);
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      alert("Terjadi kesalahan saat mengambil data konten yang populer.");
    }
  }

  return (
    <div className="w-[60%] p-[5%] h-[40%] justify-self-center">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item: any, id: number) => (
          <div className="p-6 w-[40%]" key={id}>
            <div className="h-[220px] mx-[3%] bg-white rounded-[34px]">
              <div className="relative right-7 bottom-3 ">
                <Image
                  src={
                    item.User.photoProfile
                      ? "https://74gslzvj-8000.asse.devtunnels.ms" +
                        item.User.photoProfile
                      : "/img/default-avatar.png"
                  }
                  className="rounded-full bg-white border-8 border-[#51CB9F] absolute"
                  width={80}
                  height={80}
                  alt="profile"
                />
              </div>
              <div className="ms-[15%] me-[15%] pt-[5%]">
                <div className="flex">
                  <img
                    src={
                      "https://74gslzvj-8000.asse.devtunnels.ms" +
                      item.fotoKonten
                    }
                    width={70}
                    height={40}
                    alt="foto konten"
                  />
                  <h1 className="ms-[3%]">{item.judul}</h1>
                </div>

                <p className="text-[13px] mt-[3%] text-[#323735] font-light line-clamp-4">
                  {item.desc}
                </p>
                <div className="translate-y-20 ms-[75%] mt-[1%] flex space-x-2">
                  <Image src={chat2} alt="tanggapan" width={20} height={20} />
                  <p className="text-[#323735]">{item.jumlahTanggapan}</p>
                  <p className="text-[#323735] ps-2">Balas</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex -translate-y-40 -translate-x-24">
        <Image
          src={prevButton}
          onClick={previous}
          width={60}
          height={60}
          alt="prev"
        />
        <Image
          src={nextButton}
          className="ms-[120%]"
          onClick={next}
          width={60}
          height={60}
          alt="next"
        />
      </div>
    </div>
  );
}

function setData(arg0: any) {
  throw new Error("Function not implemented.");
}
