import React from "react" ;
import '../product/product.scss';
import {Link} from "react-router-dom";
import { useSelector  } from "react-redux";



function Product(props) {
    const products = props.products;
    
    const renderList = products.map((product) => {
     
    return (
               <>
               
               <div className="" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <div className="img-box" >
                            <img className="img-product" src={product.image} alt={product.title} />
                        </div>
                    </Link>

                    <div className="title-section">
                        <h4 className=""> {product.title}</h4>
                        <p className="product-price">${product.price}</p>
                        <div><img alt="wishlist_icon" src={require("../../assests/heart.png")} /></div>
                    </div>
                </div>
                
            </>
            

    )
    
     
});
return <>{renderList}

</>;
};

export default Product; 