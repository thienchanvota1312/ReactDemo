import React, {useEffect, useState} from 'react';
import _ from 'lodash';


const Pagination = props => {
  const {totalItems, pageSize, onPageChange} = props;
  const totalPages = totalItems/pageSize;
  const pages = _.range(1,totalPages+1);

  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
      <li className="page-item"><a class="page-link" href="#">Previous</a></li>
      {pages.map(page => (
      <li className="page item"><a class="page-link"
       onClick={()=>onPageChange(page)} href="#">{page}</a></li>
      ))} 
      <li className="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
      </nav>
  );
};

export default Pagination;