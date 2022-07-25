import React from 'react';
 import Banner from'../../Components/Banner/banner';
 import Breadcrum from '../../Components/breadcrum/breadcrum'
 import ProductList from '../../Components/ProductList/productlist';

const products = () => {


    return (
        <div>
            <Banner></Banner>
            <Breadcrum></Breadcrum>
            <ProductList ></ProductList>
        </div>
    );
};

export default products;