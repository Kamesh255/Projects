import React from "react";
import "./Pagination.css";
import { FcPrevious, FcNext } from "react-icons/fc";

const Pagination = ({ page, per_page, len, nextPage, prevPage }) => {
  const isLastPage = () => {
    return Math.ceil(len / per_page) == page;
  };
  return (
    <div className="wrapper">
      <FcPrevious size="50px" className="arrows" onClick={prevPage} />
      <div className="page_num">
        {!(page === 1) && (
          <div className="non_active" onClick={prevPage}>
            {page - 1}
          </div>
        )}
        <div className="active">{page}</div>
        {!isLastPage() && (
          <div className="non_active" onClick={nextPage}>
            {page + 1}
          </div>
        )}
      </div>
      <FcNext size="50px" className="arrows" onClick={nextPage} />
    </div>
  );
};

export default Pagination;
