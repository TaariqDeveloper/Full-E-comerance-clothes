import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

// createContext is a function from React to create a Context (a way to share data globally).
export const ShopeContext = createContext();

const ShopeContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopeContext.Provider value={value}>
      {props.children}
    </ShopeContext.Provider>
  );
};

export default ShopeContextProvider;
