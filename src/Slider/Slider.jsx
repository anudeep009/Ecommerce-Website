import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    id: 1,
    img: "./src/assets/image1.png",
  },
  {
    id: 2,
    img: "./src/assets/image2.png",
  },
  {
    id: 3,
    img: "./src/assets/image3.png",
  },
  {
    id: 4,
    img: "./src/assets/image4.png",
  },
  {
    id: 5,
    img: "./src/assets/image5.png",
  },
];

export default function MySlider() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="relative mx-auto max-w-7xl">
  <div className="relative mx-auto max-w-7xl">
  <Slider {...settings} className="overflow-hidden">
  {images.map((image) => (
    <div key={image.id} className="flex items-center justify-center px-2 py-4 lg:px-0">
      <img
        src={image.img}
        alt={`image-${image.id}`}
        className="object-cover w-full h-auto rounded-lg shadow-lg max-h-56"
      />
    </div>
  ))}
</Slider>
</div>
</div>
  );
}
