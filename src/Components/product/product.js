import React from "react" ;
import '../product/product.scss';
import {Link} from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { setWishlist } from "redux/actions/productsActions";




function Product(props) {
    const products = props.products;
    const dispatch = useDispatch();

    const HeartEvent = (e) =>{
        const x = e.target.id;
        if(e.target.className == "product__heart--icon"){
            e.target.className = 'product__heart--icon--red'
        } else {
            e.target.className = 'product__heart--icon'
        }
        // setChangeHeartIcon(x);
        const whishItem  = products.filter(xv => 
            xv.id == x
         );
     dispatch(setWishlist(whishItem)); 
  }
    
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
                        <div className="product__heart--icon" onClick={HeartEvent} id={product.id} ></div>
                        <div>
                           
                        </div>
                    </div>
                </div>
                
                
            </>
        )
});

return <>{renderList}

</>;
};

export default Product; 