// src/app/components/CarouselComponent.tsx

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true}
      infinite={true}
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="flex justify-center items-center">
        <Image
          src="https://i.postimg.cc/nrQrs560/Ministry-of-Jal-Shakti.png"
          alt="Item 1"
          className="object-cover"
          width={300}
          height={200}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://i.postimg.cc/nrQrs560/Ministry-of-Jal-Shakti.png"
          alt="Item 2"
          className="object-cover"
          width={300}
          height={200}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://i.postimg.cc/nrQrs560/Ministry-of-Jal-Shakti.png"
          alt="Item 3"
          className="object-cover"
          width={300}
          height={200}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://i.postimg.cc/nrQrs560/Ministry-of-Jal-Shakti.png"
          alt="Item 4"
          className="object-cover"
          width={300}
          height={200}
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
