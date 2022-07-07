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
        <div class="gallerycontainer aem-Grid aem-Grid--12">
            <div class="row show-lg aem-GridColumn aem-GridColumn--default--2 visible_sm">
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(1)} alt="product-img" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(2)} alt=" product-img" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(3)}  alt="product-img" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(4)}  alt="product-img" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(5)}  alt="product-img" />
                </div>
                <div class="column">
                    <img class="demo cursor" src={image} onClick={() => currentSlide(6)}  alt="product-img" />
                </div>

                <a class="next-slide"  onClick={() => plusSlides(1)}><img src={downArrow} alt="down arrow" /></a>
            </div>

            <div class="aem-GridColumn aem-GridColumn--default--10">
                <div class="mySlides">                    
                    <img src={image} alt="product-img" />
                </div>

                <div class="mySlides">
                    <img src={image} alt="product-img" />
                </div>

                <div class="mySlides">
                   <img src={image} alt="product-img" />
                </div>

                <div class="mySlides">
                <img src={image} alt="product-img" />
                </div>

                <div class="mySlides">
                <img src={image} alt="product-img" />
                </div> 
                
                <div class="mySlides">
                <img src={image} alt="product-img" />
                </div>              

            </div>

        </div>

    );

};

export default Gallery;