import React from 'react';
import PropTypes from 'prop-types';
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
    <div className="d-flex justify-content-end p-4">
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
  );
};

PaginationWrap.propTypes = {
  productcount: PropTypes.number.isRequired,
  handleSetpage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default PaginationWrap;
