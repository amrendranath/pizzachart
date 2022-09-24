import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useGetProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [pageInfo, setPageInfo] = useState({ skip: 0, limit: 100 });
  const [productsCount, setProductsCount] = useState(0);

  const fetchApi = useCallback(() => {
    axios
      .get(
        `https://dummyjson.com/products?skip=${pageInfo.skip}&limit=${pageInfo.limit}`
      )
      .then((res) => {
        console.log(res.data.total);
        setProducts(res?.data?.products);
        setProductsCount(res?.data?.total);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [pageInfo]);

  const handlePageChange = (event, newPage) => {
    setPageInfo({
      ...pageInfo,
      skip: newPage,
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setPageInfo({
      ...pageInfo,
      limit: parseInt(event.target.value, 10),
      skip: 0,
    });
  };

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return {
    loading,
    products,
    productsCount,
    error,
    pageInfo,
    handlePageChange,
    handleChangeRowsPerPage,
  };
};

export default useGetProducts;
