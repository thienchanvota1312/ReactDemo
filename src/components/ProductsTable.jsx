import React from "react";
import Like from "./common/like";
import TableHeader from "./common/TableHeader";

const ProductsTable = (props) => {
  const { products, onLike, onDelete, onSort, sortIcon } = props;
  const columns = [
    {path:'Id', label:'Id'},
    {path:'Name', label:'Name'},
    {path:'Category.name', label:'Category'},
    {path:'Stock', label:'Stock'},
    {path:'Rate', label:'Rate'},
    {key:'like', label:'Like'},
    {key:'delete', label:'Delete'}
  ]
  return (
    <table className="table">
      <TableHeader columns = {columns} onSort = {onSort} sortIcon = {sortIcon} />
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
