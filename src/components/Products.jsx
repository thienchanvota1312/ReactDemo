import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getProducts} from './ProductService.js';
import Pagination from './common/pagination';
import Categories from './Categories';
import { getCategories } from "./CategoryService.js";
import ProductTables from './ProductTables.jsx';
import { paginate } from "../utils/paginate.js";
import _ from "lodash";


class Products extends Component {
  state = {
    products: getProducts(),
    currentPage: 1,
    pageSize: 4,
    categories: getCategories(),
    selectedGenre: null,
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  handleDelete = (product) => {
    const products = this.state.products.filter((m) => m._id !== product._id);
    this.setState({ products });
  };
  handleLike = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
  };

  componentDidMount() {
    const categories = [{ name: "All Categories" }, ...getCategories()];
    this.setState({
      products: getProducts(),
      categories,
    });
  }

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleClickGenre = (category) => {
    this.setState({ selectedGenre: category, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.products;
    const {
      pageSize,
      currentPage,
      products: allProducts,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allProducts.filter(
            (product) => product.category._id === selectedGenre._id
          )
        : allProducts;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const products = paginate(sorted, currentPage, pageSize);
    const { categories } = this.state;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <Categories
              items={categories}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleClickGenre}
            />
          </div>
          <div className="col-9">
            <p>Showing {filtered.length} products in the database.</p>
            <ProductTables
              products={products}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              onLike={this.handleLike}
            />
            <Pagination
              totalItems={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Categories.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Products;
