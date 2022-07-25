import React, { useEffect, useState } from "react";
import "./productlist.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import Productdetails from "../product/product";
import Sidebar from "../Sidebar/Sidebar";
import loader from "../../assests/loader.gif";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
function ProductList() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, products.length);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => { });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const [filterState, updateFilter] = useState([]);

  let filterONitems = [];
  function filterOn(filteritems) {
    filterONitems = [...filteritems];
    updateFilter(filterONitems);
  }
  return (
    <div>
      <div className="container grid-wrapper">
        <div className="grid-child-sidebar">
          <Sidebar setFilter={filterOn} />
        </div>
        <div className="grid-child-product">
          {products.length != 0 ? (
            <div>
              <div className="grid-container-inner">
                <Productdetails
                  products={currentProducts}
                  filterOnItems={filterState}
                />
              </div>
              <div className="pagination-background">
                <Pagination
                  itemsCountPerPage={postsPerPage}
                  activePage={currentPage}
                  totalItemsCount={products.length}
                  onChange={handlePageChange}
                  hideFirstLastPages={true}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            </div>
          ) : (
            <center>
              <span>
                <img src={loader} className="loader-img" alt="loader" />
              </span>
            </center>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductList;