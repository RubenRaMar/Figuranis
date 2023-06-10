import React, { useEffect, useState } from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import FiguresList from "../../components/FiguresList/FiguresList";
import useFigures from "../../hooks/useFigure/useFigure";
import Pagination from "../../components/Pagination/Pagination";

const FiguresPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getFiguresList } = useFigures();
  const [totalFigures, setTotalFigures] = useState(0);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);

  useEffect(() => {
    (async () => {
      const response = await getFiguresList(skip, limit);

      if (response) {
        const { figures, length } = response;

        setTotalFigures(length);

        dispatch(loadFiguresActionCreator(figures));
      }
    })();
  }, [dispatch, getFiguresList, limit, skip]);

  const nextPage = () => {
    setSkip(skip + limit);
  };

  const previousPage = () => {
    setSkip(skip - limit);
  };

  return (
    <FiguresPageStyled>
      <h1>
        Your favorite <br /> figures
      </h1>
      <FiguresList />
      <Pagination
        totalFigures={totalFigures}
        nextPage={nextPage}
        previousPage={previousPage}
        skip={skip}
      />
    </FiguresPageStyled>
  );
};

export default FiguresPage;
