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
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="w-[410px] h-[70px] ms-16">
      <Slider {...settings}>
        <div className="mt-12">
          <Image
            className="w-[1000px] h-[450px] rounded-3xl"
            src="/img/pot.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="mt-12">
          <Image
            className="w-[1000px] h-[450px] rounded-3xl"
            src="/img/pot.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="mt-12">
          <Image
            className="w-[1000px] h-[450px] rounded-3xl"
            src="/img/pot.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
      </Slider>
    </div>
  );
}
