import React, { Component } from "react";
import { getProducts } from "./ProductService";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import Category from "./Category";
import { getCategories } from "./CategoryService";
import ProductsTable from "./ProductsTable";
import _ from "lodash";

class Products extends Component {
  state = {
    products: getProducts(),
    currentPage: 1,
    pageSize: 3,
    categories: getCategories(),
    selectedGenre: null,
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  handleDelete = (product) => {
    this.setState(prevState => ({
      products: prevState.products.filter(elm => elm !== product )
    }));
  }
  componentDidMount() {
    const categories = [{ name: "All Categories" }, ...getCategories()];
    this.setState({
      products: getProducts(),
      categories,
    });
  }

  handleLike = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
  };

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
    if (count === 0) return <p>There are no products in the database.</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allProducts.filter(
            (product) => product.Category._id === selectedGenre._id
          )
        : allProducts;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const products = paginate(sorted, currentPage, pageSize);
    const { categories } = this.state;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <Category
              items={categories}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleClickGenre}
            />
          </div>
          <div className="col-9">
            <p>Showing {filtered.length} products in the database.</p>
            <ProductsTable
              products={products}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
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

Category.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Products;



