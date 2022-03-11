import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getProducts} from './ProductService.js';
import Pagination from './common/pagination';
import Categories from './Categories';
import ProductTables from './ProductTables.jsx';


class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: getProducts()
    }
  }

  render() {
    return <div>{
      <table className ="table">
          <tbody>
          <h3>Showing cars in the database</h3>
            <tr>
            <td><h3>Category List</h3><Categories/></td>
            <td><ProductTables products={this.state.products} /></td>
            </tr>
          </tbody>
        </table>
      }
     <Pagination totalItems={this.state.products.length} pageSize={3} data={this.state.products} /> 
    </div>   
  }
}

export default Products

