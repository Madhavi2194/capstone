import React from "react";
import Category from "Components/cateogory/category";
import HomeBanner from "Components/homeBanner/homeBanner";
import HomebannerSection from "Components/homebannerSection/homebannerSection";
import Carousel from "Components/carousel/carousel";


function Home() {
 return (
    <div>
        <Carousel></Carousel>
        <Category></Category>
        <HomeBanner></HomeBanner>
        <HomebannerSection></HomebannerSection>
    </div>
 )
        
}
export default Home;