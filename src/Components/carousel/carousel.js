import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from "react-router-dom";
import "../carousel/carousel.scss";

const HomeCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <section>
      <div className="aem-Grid aem-Grid--12 carousel-wrapper">
        <Carousel responsive={responsive}>
          <div className="carousel_image1">
            <div className="carousel-content">
              <div className="display-xl-48- mb-8">
                <div className="">Shop the new</div>
                <div className="">Signature Collection</div>
              </div>
              <p className="mb-32">
                    Refresh your daily rotation with our women’s clothing range.Set the table for a relaxed meal with stylish details in black and white.</p>
              <NavLink to={'/product/all'}>
                <button className="carousel-button">SHOP NOW</button>
                </NavLink>
            </div>
          </div>
          <div className="carousel_image2">

            <div className="carousel-content">
              <div className="display-xl-48- mb-8">
                <div className="">Shop the new</div>
                <div className="">Signature Collection</div>
              </div>
              <p className="mb-32">Finish off your favourite new looks with an array of trendy accessories, and don’t forget to scroll for statement footwear in our women's shoes range</p>
               <NavLink to={'/product/all'}>
                 <button className="carousel-button">SHOP NOW</button>
              </NavLink>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
export default HomeCarousel;