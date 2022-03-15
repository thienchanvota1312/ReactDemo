import React from "react";
import Like from "./common/like";

const ProductsTable = (props) => {
  const { products, onLike, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("Id")}>Id</th>
          <th onClick={() => onSort("Name")}>Name</th>
          <th onClick={() => onSort("Category")}>Category</th>
          <th onClick={() => onSort("Stock")}>Stock</th>
          <th onClick={() => onSort("Rate")}>Rate</th>
          <th>Like</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product. Id}>
            <td>{product.Id}</td>
            <td>{product.Name}</td>
            <td>{product.Category.name}</td>
            <td>{product.Stock}</td>
            <td>{product.Rate}</td>
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
