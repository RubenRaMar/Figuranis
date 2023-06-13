import React from "react";
import GenericButton from "../GenericButton/GenericButton";
import PaginationStyle from "./PaginationStyle";
import { useAppSelector } from "../../store";

interface PaginationProps {
  skip: number;
  length: number | undefined;
  nextPage: () => void;
  previousPage: () => void;
}

const Pagination = ({
  skip,
  length,
  nextPage,
  previousPage,
}: PaginationProps): React.ReactElement => {
  const figures = useAppSelector(({ figure: { figuresData } }) => figuresData);

  const actionOnNextButton = () => {
    nextPage();
  };

  const actionOnPreviousButton = () => {
    previousPage();
  };

  return (
    <PaginationStyle>
      <span>
        {figures.length + skip}/{length}
      </span>
      <div className="pagination">
        <GenericButton
          actionOnClick={actionOnPreviousButton}
          className="previous"
          text="Previous"
          isDisabled={skip === 0}
        />
        <GenericButton
          actionOnClick={actionOnNextButton}
          className="next"
          text="Next"
          isDisabled={skip + figures.length === length}
        />
      </div>
    </PaginationStyle>
  );
};

export default Pagination;
