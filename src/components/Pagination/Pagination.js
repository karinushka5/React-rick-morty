import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.scss'

const Pagination = ({pageNumber, setPageNumber, info}) => {

  return  <ReactPaginate 
  onPageChange={ (target) => {
    setPageNumber(target.selected +1)
  }}
  pageCount={info?.pages}
  className="pagination justify-content-center gap-4 my-4" 
  nextLabel="Next" previousLabel="Prev" 
  nextClassName='btn btn-primary '
  previousClassName='btn btn-primary '
  previousLinkClassName=" link-main"
  nextLinkClassName="link-main"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="active"/>

  
};

export default Pagination