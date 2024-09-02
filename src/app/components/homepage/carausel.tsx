"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function Carausel1() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <Slider {...settings}>
      <div className="px-10 bg-center">
        <Image
          className="w-[1200px] h-[450px] rounded-3xl"
          src="/img/pot.png"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="px-10">
        <Image
          className="w-[1200px] h-[450px] rounded-3xl"
          src="/img/bg/umroh2.jpeg"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="px-10">
        <Image
          className="w-[1200px] h-[450px] rounded-3xl"
          src="/img/bg/umroh3.jpg"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
    </Slider>
  );
}
