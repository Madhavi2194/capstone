import React from "react";
import "./Gallery.scss";
import downArrow from '../../assests/arrow-down-grey.svg';


const Gallery = (props) => {

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (dots[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }


    const image = props.image;

    return (        
        <div className="gallerycontainer aem-Grid aem-Grid--12">
            <div className="row show-lg aem-GridColumn aem-GridColumn--default--2 visible_sm">
                <div className="column">
                    <img className="demo cursor" src={image} onClick={() => currentSlide(1)} alt="product-img" />
                </div>
                <div className="column">
                    <img className="demo cursor" src={image} onClick={() => currentSlide(2)} alt=" product-img" />
                </div>
                <div className="column">
                    <img className="demo cursor" src={image} onClick={() => currentSlide(3)}  alt="product-img" />
                </div>
                <div className="column">
                    <img className="demo cursor" src={image} onClick={() => currentSlide(4)}  alt="product-img" />
                </div>
                <div className="column">
                    <img className="demo cursor" src={image} onClick={() => currentSlide(5)}  alt="product-img" />
                </div>
                

                <a className="next-slide"  onClick={() => plusSlides(1)}><img src={downArrow} alt="down arrow" /></a>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--10">
                <div className="mySlides">                    
                    <img src={image} alt="product-img" style={{display:"block"}}/>
                </div>

                <div className="mySlides">
                    <img src={image} alt="product-img" />
                </div>

                <div className="mySlides">
                   <img src={image} alt="product-img" />
                </div>

                <div className="mySlides">
                <img src={image} alt="product-img" />
                </div>

                <div className="mySlides">
                <img src={image} alt="product-img" />
                </div> 
                
                {/* <div className="mySlides">
                <img src={image} alt="product-img" />
                </div>               */}

            </div>

        </div>

    );

};

export default Gallery;