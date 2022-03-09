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
  handleDelete = (id) => {
    const newsId = id;
    this.setState(prevState => ({
      products: prevState.products.filter(elm => elm.id !== newsId )
    }));
  }
  renderTableData() {
    return this.state.products.map((product, index) => {
      const { id ,name, category, stock, rate, like, action } = product
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{category}</td>
          <td>{stock}</td>
          <td>{rate}</td>
          <td><Like liked ={like}/></td>
          <td><button type="button" class="btn btn-danger" onClick={() => this.handleDelete(id)}>Delete</button></td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.products[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
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
