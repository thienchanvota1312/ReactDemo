import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { totalItems, pageSize, currentPage, onPageChange } = props;

  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages === 1) return null;
  const pages = _.range(1, totalPages + 1);

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination">
          <li className={
                currentPage === 1 ? "page-item active" : "page-item"
              } onClick={() => {onPageChange(currentPage-1)}}><a class="page-link" href="#">Prev</a></li>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          ))}
          <li className={
                currentPage === totalPages ? "page-item active" : "page-item"
              } onClick={() => {onPageChange(currentPage+1)}}><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  );
};


export default Pagination;