import { createContext, useState, useEffect } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
