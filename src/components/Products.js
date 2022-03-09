import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from '../components/common/like';
import {getProducts} from '../components/ProductService.js';
import { ListGroup } from 'react-bootstrap';

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
      <ListGroup horizontal>
      <ListGroup.Item><ListGroup as="ol" numbered>
        <a>Categories</a>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">suzuki</div>
          _id = 14
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">honda</div>
          _id = 73
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">vinfast</div>
          _id = 12
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">porsche</div>
          _id = 6
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">bugatti</div>
          _id = 7
        </div>
      </ListGroup.Item>
</ListGroup></ListGroup.Item>
      <ListGroup.Item>
      <a>Showing cars in the database</a>
        <table className ="table">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table></ListGroup.Item>
      </ListGroup>
    )
  }
}

export default Products
