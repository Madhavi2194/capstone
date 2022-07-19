import React from "react";
import "./category.scss";
import { Link } from "react-router-dom";

const Category = ()  =>   {
    const categories =[
        {
            id: 'shop_women',
            source: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            title: 'Shop Women',
            description: 'Lorem ipsum dolor sit amet',
            
        },
        {
            id: 'shop_men',
            source: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
            title: 'Shop Men',
            description: 'Lorem ipsum dolor sit amet',
            
        },
        {
            id: 'jewellery',
            source: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
            title: 'Jewellery',
            description: 'Lorem ipsum dolor sit amet',
           
        },
        {
            id: 'electronics',
            source: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
            title: 'Electronics',
            description: 'Lorem ipsum dolor sit amet',
            
        }
    ];

    return(

        <div className="container">
            <div className="category-wrapper">
                <div className="aem-Grid aem-Grid--12">
                {categories.map((data) => {
                    
                    return(
                        <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12  category-item-wrapper' key={data.id}>
                        <Link to={'/product'}>
                            <div className='category-item'>
                                
                                <div className='category-image'>
                                    <figure>
                                        <img src={data.source} alt="data.title " width="160px" height="90%" />
                                    </figure>
                                </div> 
                                <div className='category-label'>
                                    <div>{data.title}</div>
                                    <span>{data.description}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    )
                    
                })}
                </div>
            </div>
        </div> 
        
    )

}
 export default Category;