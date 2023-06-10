import React from "react";
import GenericButton from "../GenericButton/GenericButton";
import PaginationStyle from "./PaginationStyle";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyle>
      <span>10/50</span>
      <div className="pagination">
        <GenericButton className="previous" text="Previous" />
        <GenericButton className="next" text="Next" />
      </div>
    </PaginationStyle>
  );
};

export default Pagination;
