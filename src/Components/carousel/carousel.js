import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
              <p className="mb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
              <button className="carousel-button">SHOP NOW</button>
            </div>
          </div>
          <div className="carousel_image2">

            <div className="carousel-content">
              <div className="display-xl-48- mb-8">
                <div className="">Shop the new</div>
                <div className="">Signature Collection</div>
              </div>
              <p className="mb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
              <button className="carousel-button">SHOP NOW</button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
export default HomeCarousel;