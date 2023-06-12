import React, { useEffect, useState } from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import FiguresList from "../../components/FiguresList/FiguresList";
import useFigures from "../../hooks/useFigure/useFigure";
import Pagination from "../../components/Pagination/Pagination";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";

const FiguresPage = (): React.ReactElement => {
  const filter = useAppSelector((store) => store.figure.filter);
  const dispatch = useAppDispatch();
  const { getFiguresList } = useFigures();
  const [totalFigures, setTotalFigures] = useState(0);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);

  useEffect(() => {
    (async () => {
      const response = await getFiguresList(skip, limit, filter);

      if (response) {
        const { figures, length } = response;

        setTotalFigures(length);

        dispatch(loadFiguresActionCreator(figures));
      }
    })();
  }, [dispatch, getFiguresList, filter, limit, skip]);

  const nextPage = () => {
    setSkip(skip + limit);
    scrollTo(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    scrollTo(0, 0);
  };

  return (
    <FiguresPageStyled>
      <h1>
        Your favorite <br /> figures
      </h1>
      <GeneralContainerStyled>
        <FiguresList />
        <Pagination
          totalFigures={totalFigures}
          nextPage={nextPage}
          previousPage={previousPage}
          skip={skip}
        />
      </GeneralContainerStyled>
    </FiguresPageStyled>
  );
};

export default FiguresPage;
