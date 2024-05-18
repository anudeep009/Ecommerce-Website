import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    id: 1,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image1.jpg?updatedAt=1716009713908",
  },
  {
    id: 2,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image2.jpg?updatedAt=1716009713785",
  },
  {
    id: 3,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image4.jpg?updatedAt=1716009713719",
  },
  {
    id: 4,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image3.jpg?updatedAt=1716009713533",
  },
  {
    id: 5,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image5.jpg?updatedAt=1716009713544",
  },
];

export default function MySlider() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 2500,
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
