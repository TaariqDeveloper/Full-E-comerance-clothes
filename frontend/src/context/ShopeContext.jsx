// import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/frontend_assets/assets";

// // createContext is a function from React to create a Context (a way to share data globally).
// export const ShopeContext = createContext();

// const ShopeContextProvider = (props) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     addToCart,
//   };
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = async (itemId, size) => {
//     let cartData = structuredClone(cartItems);
//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1;
//       } else {
//         cartData[itemId][size] = 1;
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//     }
//     setCartItems(cartData);
//   };
//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);

//   return (
//     <ShopeContext.Provider value={value}>
//       {props.children}
//     </ShopeContext.Provider>
//   );
// };

// export default ShopeContextProvider;

import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopeContext = createContext();

const ShopeContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
  };

  return (
    <ShopeContext.Provider value={value}>
      {props.children}
    </ShopeContext.Provider>
  );
};

export default ShopeContextProvider;
