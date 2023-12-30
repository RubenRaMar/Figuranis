import React, { useMemo } from "react";
import GenericButton from "../GenericButton/GenericButton";
import PaginationStyle from "./PaginationStyle";
import { useAppSelector } from "../../store";

interface PaginationProps {
  nextPage: () => void;
  previousPage: () => void;
}

const Pagination = ({
  nextPage,
  previousPage,
}: PaginationProps): React.ReactElement => {
  const {
    ui: {
      pagination: { totalFiguresToShow, page },
    },
    figure: { totalFigures },
  } = useAppSelector((state) => state);

  const totalShowFigures = useMemo(
    () => totalFiguresToShow * page,
    [page, totalFiguresToShow]
  );
  const hasNextPage = useMemo(
    () => totalShowFigures < (totalFigures as number),
    [totalFigures, totalShowFigures]
  );

  const actionOnNextButton = () => {
    nextPage();
  };

  const actionOnPreviousButton = () => {
    previousPage();
  };

  return (
    <PaginationStyle>
      <span>
        {hasNextPage ? totalShowFigures : totalFigures}/{totalFigures}
      </span>
      <div className="pagination">
        {page > 1 && (
          <GenericButton
            actionOnClick={actionOnPreviousButton}
            className="previous"
            text="Previous"
          />
        )}
        {hasNextPage && (
          <GenericButton
            actionOnClick={actionOnNextButton}
            className="next"
            text="Next"
          />
        )}
      </div>
    </PaginationStyle>
  );
};

export default Pagination;
