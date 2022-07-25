


import React from "react";
import "./Sidebar.scss";
import { useState } from "react";

const Sidebar = (props) => {
  let ourpage =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  console.log("check");
  const [show, setShow] = useState(false);
  const [filters, setFilters] = useState(new Set());

  function filterHandler(optin) {
    setFilters((state) => {
      if (state.has(optin)) state.delete(optin);
      else state.add(optin);
      props.setFilter(state);
      return state;
    });
  }

  return (
    <section className="sidebar">
      <div>
        <div className="pd-32 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 text-center  visible_lg_none ">
          <span onClick={() => setShow(!show)}>
            <img
              alt="slider-image"
              className="sort_arrow"
              src={require("../../assests/sliders.png")}
            />{" "}
            Filter Results
          </span>{" "}
          &nbsp; &nbsp;
          <span>
            <img alt="arrow-icon" src={require("../../assests/arrow-up.png")} />{" "}
            <img
              alt="arrowdown-icon"
              src={require("../../assests/arrow-down.png")}
            />{" "}
            Sort Products{" "}
          </span>
        </div>

        <div className="pd-32 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 text-center visible_sm_none ">
          <span>
            <img
              alt="slider-image"
              className="sort_arrow"
              src={require("../../assests/sliders.png")}
            />{" "}
            Filter Results
          </span>{" "}
          &nbsp; &nbsp;
          <span>
            <img alt="arrow-icon" src={require("../../assests/arrow-up.png")} />{" "}
            <img
              alt="arrowdown-icon"
              src={require("../../assests/arrow-down.png")}
            />{" "}
            Sort Products{" "}
          </span>
        </div>
      </div>

      {show ? (
        <div className="mobile display-block-sm">
          <div className="filter-heading">Filters</div>
          <div className="filter-section">
            <p>Size</p>
            <ul>
              <li
                style={{
                  display:
                    ourpage == "all" || ourpage == "jewellery"
                      ? "list-item"
                      : "none",
                }}
              >
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  value="Option1x"
                  onClick={() => filterHandler("jewelery")}
                />
                <label htmlFor="option1">Jewelery</label>
              </li>
              <li
                style={{
                  display:
                    ourpage == "all" || ourpage == "electronic"
                      ? "list-item"
                      : "none",
                }}
              >
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  value="Option2"
                  onClick={() => filterHandler("electronics")}
                />
                <label htmlFor="option2">Electronics</label>
              </li>
              <li
                style={{
                  display:
                    ourpage == "all" || ourpage == "men" ? "list-item" : "none",
                }}
              >
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  value="Option3"
                  onClick={() => filterHandler("men's clothing")}
                />
                <label htmlFor="option3">Men's Clothing </label>
              </li>
              <li
                style={{
                  display:
                    ourpage == "all" || ourpage == "women"
                      ? "list-item"
                      : "none",
                }}
              >
                <input
                  type="checkbox"
                  id="option4"
                  name="option4"
                  value="Option4"
                  onClick={() => filterHandler("women's clothing")}
                />
                <label htmlFor="option4">Women's Clothing</label>
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="desktop display-block-lg">
        <div className="filter-heading">Filters</div>
        <div className="filter-section">
          <p>Category</p>
          <ul>
            <li
              style={{
                display:
                  ourpage == "all" || ourpage == "jewellery"
                    ? "list-item"
                    : "none",
              }}
            >
              <input
                type="checkbox"
                id="option19"
                name="option19"
                value="Option19"
                onClick={() => filterHandler("jewelery")}
              />
              <label htmlFor="option19">Jewelery</label>
            </li>
            <li
              style={{
                display:
                  ourpage == "all" || ourpage == "electronic"
                    ? "list-item"
                    : "none",
              }}
            >
              <input
                type="checkbox"
                id="option20"
                name="option20"
                value="Option20"
                onClick={() => filterHandler("electronics")}
              />
              <label htmlFor="option20">Electronics</label>
            </li>
            <li
              style={{
                display:
                  ourpage == "all" || ourpage == "men" ? "list-item" : "none",
              }}
            >
              <input
                type="checkbox"
                id="option21"
                name="option21"
                value="Option21"
                onClick={() => filterHandler("men's clothing")}
              />
              <label htmlFor="option21">Men's Clothing</label>
            </li>
            <li
              style={{
                display:
                  ourpage == "all" || ourpage == "women" ? "list-item" : "none",
              }}
            >
              <input
                type="checkbox"
                id="option22"
                name="option22"
                value="option22"
                onClick={() => filterHandler("women's clothing")}
              />
              <label htmlFor="option22">Women's Clothing</label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;



