import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from './common/like';

const ProductTables = props => {
  const {products} = props;

    const handleDelete = (product) =>{
      this.setState(prevState => ({
    products: prevState.products.filter(elm => elm !== product )
    }));
  }
  return <div>{
       <table className ="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Like</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {products.map((product) => 
        <tr key={product.Id}>
          <td>{product.Id}</td>
          <td>{product.Name}</td>
          <td>{product.Category.name}</td>
          <td>{product.Stock}</td>
          <td>{product.Rate}</td>
          <td><Like liked ={product.Like}/></td>
          <td><button type="button" className="btn btn-danger" onClick={() => handleDelete(product)}>Delete</button></td>
        </tr>
    )}
        </tbody>
      </table>    
      }
  </div> 
};

export default ProductTables;
