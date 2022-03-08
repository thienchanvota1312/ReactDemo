import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        { id: 1, Name: 'Car 1', Brand: 'Audi', Stock: 7, Rate: 3.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: ''},
        { id: 2, Name: 'Car 2', Brand: 'Suzuki', Stock: 5, Rate: 2.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: ''},
        { id: 3, Name: 'Car 3', Brand: 'Vinfast', Stock: 8, Rate: 3.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: ''},
        { id: 4, Name: 'Car 4', Brand: 'Mercedes', Stock: 7, Rate: 4.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: ''},
      ],
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
      const { id ,Name, Brand, Stock, Rate, Like, Action } = product
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{Name}</td>
          <td>{Brand}</td>
          <td>{Stock}</td>
          <td>{Rate}</td>
          <td>{Like}</td>
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

export default Tables
