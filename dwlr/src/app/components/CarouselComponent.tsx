  import React from "react";
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
  import Image from "next/image";

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselItems = [
    {
      id: 1,
      title: "Ministry of Jal Shakti",
      imagePath: "https://i.postimg.cc/nrQrs560/Ministry-of-Jal-Shakti.png",
    },
    {
      id: 2,
      title: "India Language Map",
      imagePath: "https://i.postimg.cc/FFZqKGZy/411px-India-locator-language-map.png",
    },
    { id: 3, title: "Item 3", imagePath: "/images/item3.jpg" },
    { id: 4, title: "Item 4", imagePath: "/images/item4.jpg" },
  ];

  const CarouselComponent: React.FC = () => {
    return (
      <div className="w-full max-w-3xl mx-auto px-4">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  export default CarouselComponent;