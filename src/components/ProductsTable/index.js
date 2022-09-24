import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";

const columns = [
  { id: "brand", label: "Brand", minWidth: 150 },
  { id: "title", label: "Title", minWidth: 150 },
  {
    id: "price",
    label: "Price",
    minWidth: 50,
  },
  {
    id: "rating",
    label: "Rating",
    minWidth: 50,
  },
  {
    id: "category",
    label: "Category",
    minWidth: 100,
  },
  {
    id: "thumbnail",
    label: "Thumbnail",
    minWidth: 150,
  },
];

const ProductsTable = () => {
  const {
    products,
    productsCount,
    pageInfo,
    handlePageChange,
    handleChangeRowsPerPage,
  } = useContext(StoreContext);

  return (
    <>
      <TableContainer sx={{ maxHeight: "90vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ background: "#cdcdcd" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.rating}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <img
                      src={row.thumbnail}
                      alt={row.title}
                      loading="lazy"
                      width={150}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={productsCount}
        rowsPerPage={pageInfo?.limit}
        page={pageInfo?.skip}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ProductsTable;
