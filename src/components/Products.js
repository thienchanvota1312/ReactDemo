import React, { Component } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"


class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        { Name: 'Car 1', Brand: 'Audi', Stock: 7, rate: 3.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: <button style={{color:"white", backgroundColor: "red"}} onClick={() => this.handleDelete(products)>Delete</button> },
        { Name: 'Car 2', Brand: 'Suzuki', Stock: 5, rate: 2.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: <button style={{color:"white", backgroundColor: "red"}} onClick={() => this.handleDelete(products)>Delete</button> },
        { Name: 'Car 3', Brand: 'Vinfast', Stock: 8, rate: 3.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: <button style={{color:"white", backgroundColor: "red"}} onClick={() => this.handleDelete(products)>Delete</button> },
        { Name: 'Car 4', Brand: 'Mercedes', Stock: 7, rate: 4.5, Like: <FontAwesomeIcon icon= {faHeart} /> , Action: <button style={{color:"white", backgroundColor: "red"}} onClick={() => this.handleDelete(products)>Delete</button> },
      ],
    }
  }
  handleDelete = (products) => {
  const newsName = products.Name;
  this.setState(prevState => ({
    news: prevState.news.filter(elm => elm.Name !== newsName )
  }));
}

  renderTableData() {
    return this.state.products.map((product, index) => {
      const { Name, Brand, Stock, Rate, Like, Action } = product
      return (
        <tr key={Name}>
          <td>{Name}</td>
          <td>{Brand}</td>
          <td>{Stock}</td>
          <td>{Rate}</td>
          <td>{Like}</td>
          <td>{Action}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.products[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    const myStyle = {
      color: "black",
      backgroundColor: "white",
      padding: "10px",
      fontFamily: "Sans-Serif",
      border: "1px solid black",
    };
    return (
        <table style={myStyle}>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
    )
  }
}

export default Tables
