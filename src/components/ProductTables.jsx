import React from "react";
import Like from "./common/like";

const ProductsTable = (props) => {
  const { products, onLike, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("category")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th>Like</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.category.name}</td>
            <td>{product.numberInStock}</td>
            <td>{product.dailyRentalRate}</td>
            <td>
              <Like liked={product.liked} onClick={() => onLike(product)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(product)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
