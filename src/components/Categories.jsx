import { getCategories } from "./CategoryService";
import { ListGroup } from 'react-bootstrap';
import React, { Component } from 'react';

class Categories extends Component {
    constructor(props) {
      super(props)
      this.state = {
        categories: getCategories()
      }
    }
    
    render() {
        return this.state.categories.map((category) =>        
        <ListGroup>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{category.name}</div>
          </div>
        </ListGroup.Item>
        </ListGroup>
    )
    }
  }
  
  export default Categories
  