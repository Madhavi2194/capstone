import React, { useEffect } from "react";
import "../product/product.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWishlist ,productListLength} from "redux/actions/productsActions";



function Product(props) {
  const products = props.products;
  const dispatch = useDispatch();
  let ourFilter = [], 
    ourpage =
      window.location.href.split("/")[
      window.location.href.split("/").length - 1
      ];
  if (ourpage == "men") {
    ourFilter.push("men's clothing");
  }
  if (ourpage == "women") {
    ourFilter.push("women's clothing");
  }
  if (ourpage == "electronic") {
    ourFilter.push("electronics");
  }
  if (ourpage == "jewellery") {
    ourFilter.push("jewelery");
  }
  // props.setFilter(ourFilter);
  let filteredproducts = products;
  if (
    ourpage == "men" ||
    ourpage == "women" ||
    ourpage == "electronic" ||
    ourpage == "jewellery"
  ) {
    if (ourFilter.length > 0) {
      filteredproducts = products.filter(
        (item) => ourFilter[0] == item.category
      );
    }
  } else {
    if (props.filterOnItems.length > 0) {
      filteredproducts = products.filter((item) =>
        props.filterOnItems.includes(item.category)
      );
    }
  }

  useEffect(() =>{
   dispatch(productListLength(filteredproducts.length))
  },[filteredproducts])
  
  const HeartEvent = (e) => {
    const x = e.target.id;
    if (e.target.className == "product__heart--icon") {
      e.target.className = "product__heart--icon--red";
    } else {
      e.target.className = "product__heart--icon";
    }
    // setChangeHeartIcon(x);
    const whishItem = products.filter((xv) => xv.id == x);
    dispatch(setWishlist(whishItem));
  };
  const renderList = filteredproducts.map((product) => {
    return (
      <>
        <div className="" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className="img-box">
              <img
                className="img-product"
                src={product.image}
                alt={product.title}
              />
            </div>
          </Link>
          <div className="title-section">
            <h4 className=""> {product.title}</h4>
            <p className="product-price">${product.price}</p>
            <div
              className="product__heart--icon"
              onClick={HeartEvent}
              id={product.id}
            ></div>
            <div></div>
          </div>
        </div>
      </>
    );
  });
  return <>{renderList}</>;
}
export default Product;