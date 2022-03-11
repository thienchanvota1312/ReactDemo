import React, {useEffect, useState} from 'react';
import _ from 'lodash';

const Pagination = props => {
  const {totalItems, pageSize, onPageChange, data} = props;
  const [posts, setPosts] = useState();
  const [paginatedPosts, setpaginatedPosts ] = useState();
  const [currentPage, setcurrenPage ] = useState(1);
  useEffect (()=>{
    console.log(data);
    setPosts(data);
    setpaginatedPosts(_(data).slice(0).take(pageSize).value());
  },[]);
  const totalPages = totalItems/pageSize;
  const pages = _.range(1,totalPages+1)
  const paginate=(pageNo)=>{
    setcurrenPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
    setpaginatedPosts(paginatedPost)
  }
  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
      <li className="page-item"><a class="page-link" href="#">Previous</a></li>
      {pages.map(page => (
      <li className={
        page === currentPage? "page-item active" : "page item"
      }><a className="page-link"
       onClick={()=>paginate(page)} href="#">{page}</a></li>
      ))} 
      <li className="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
      </nav>
      
  );
};

export default Pagination;