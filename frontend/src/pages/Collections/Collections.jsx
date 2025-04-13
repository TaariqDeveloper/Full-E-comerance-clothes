import React, { useContext, useEffect, useState } from "react";
import { ShopeContext } from "../../context/ShopeContext";
import { assets } from "../../assets/frontend_assets/assets";
import Title from "../../components/Title/Title";
import ProductItem from "../../components/ProductItem/ProductItem";

function Collections() {
  const { products } = useContext(ShopeContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterproduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sortType, setsortType] = useState("relavent");

  const togaleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const ApplayFilterr = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productsCopy);
  };

  const sorProduct = () => {
    let fpCopy = filterproduct.slice();

    switch (sortType) {
      case "low-hight":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "hight-low":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;
      default:
        ApplayFilterr();
        break;
    }
  };

  useEffect(() => {
    ApplayFilterr();
  }, [category, subcategory]);

  useEffect(() => {
    sorProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* category filter */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mt-3 text-sm font-medium ">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={togaleCategory}
              />{" "}
              men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={togaleCategory}
              />{" "}
              women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={togaleCategory}
              />{" "}
              kids
            </p>
          </div>
        </div>
        {/*  subCategory Filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mt-3 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* /Right side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* PRODUCT SORT */}
          <select
            onChange={(e) => setsortType(e.target.value)}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-hight">Sort by: low to hight</option>
            <option value="hight-low">Sort by: hight to low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterproduct.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
