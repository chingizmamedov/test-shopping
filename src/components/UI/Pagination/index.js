import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const PaginationWrap = ({ productcount, handleSetpage, page }) => {
  const handlePageClick = (data) => {
    const { selected } = data;
    handleSetpage(selected);
  };
  if (productcount === 0) {
    return null;
  }
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-end p-3">
        <ReactPaginate
          forcePage={page}
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={productcount / 20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default PaginationWrap;
