import React from "react";
import Banner from'../../Components/Banner/banner';
import Breadcrum from '../../Components/breadcrum/breadcrum'
import ProductList from '../../Components/ProductList/productlist';

function Home() {
 return (
    <div>
        <Banner></Banner>
        <Breadcrum></Breadcrum>
        <ProductList></ProductList>
        
    </div>
 )
        
}
export default Home;