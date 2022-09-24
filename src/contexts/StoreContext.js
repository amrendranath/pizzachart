import { createContext } from "react";
import useGetProducts from "../hooks/getProducts";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const {
    loading,
    products,
    productsCount,
    error,
    pageInfo,
    handlePageChange,
    handleChangeRowsPerPage,
  } = useGetProducts();
  return (
    <StoreContext.Provider
      value={{
        loading,
        products,
        productsCount,
        error,
        pageInfo,
        handlePageChange,
        handleChangeRowsPerPage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
