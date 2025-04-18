import React, { useContext, useEffect, useState } from "react";
import Title from "../Title/Title";
import { ShopeContext } from "../../context/ShopeContext";
import ProductItem from "../ProductItem/ProductItem";

function BestSeller() {
  const { products } = useContext(ShopeContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
    console.log(bestProduct);
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8 ">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
          {bestseller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
