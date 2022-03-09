import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from '../components/common/like';
import {getProducts, handleDelete} from '../components/ProductService.js';

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: getProducts()
    }
  }
  handleDelete = (product) => {
    this.setState(prevState => ({
      products: prevState.products.filter(elm => elm !== product )
    }));
  }
  renderTableData() {
    return this.state.products.map((product) => 
        <tr key={product.Id}>
          <td>{product.Id}</td>
          <td>{product.Name}</td>
          <td>{product.Category.name}</td>
          <td>{product.Stock}</td>
          <td>{product.Rate}</td>
          <td><Like liked ={product.Like}/></td>
          <td><button type="button" class="btn btn-danger" onClick={() => this.handleDelete(product)}>Delete</button></td>
        </tr>
    )
  }

  renderTableHeader() {
    const header = Object.keys(this.state.products[0])
    return header.map((key, index) => <th key={index}>{key}</th>)
  }

  render() {
    return (
        <table className ="table">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
    )
  }
}

export default Products
