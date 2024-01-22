"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import s from "./carousel.module.css";
import { destinationCard } from "@/utils/data";

const CarouselCard = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      // customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {destinationCard.map((item) => (
        <div key={item.id}>
          <h1>{item.city}</h1>
          <Image src={item.img} alt="" width={200} height={350} />
          <div>
            <Image src={item.map} alt="" width={50} height={30} />
            <h2>{item.country}</h2>
          </div>
          <p>Price starts at {item.price}</p>
          <Image src={item.stars} alt="" width={200} height={100} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCard;
