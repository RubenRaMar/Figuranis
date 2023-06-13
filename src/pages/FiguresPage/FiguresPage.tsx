import React, { useEffect, useState } from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import FiguresList from "../../components/FiguresList/FiguresList";
import useFigures from "../../hooks/useFigure/useFigure";
import Pagination from "../../components/Pagination/Pagination";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";

const FiguresPage = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { filter, length } = useAppSelector((store) => store.figure);
  const dispatch = useAppDispatch();
  const { getFiguresList } = useFigures();
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);

  useEffect(() => {
    (async () => {
      const figuresData = await getFiguresList(skip, limit, filter);

      if (figuresData) {
        dispatch(loadFiguresActionCreator(figuresData));
      }
    })();
  }, [dispatch, getFiguresList, filter, limit, skip, isLogged]);

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
          length={length}
          nextPage={nextPage}
          previousPage={previousPage}
          skip={skip}
        />
      </GeneralContainerStyled>
    </FiguresPageStyled>
  );
};

export default FiguresPage;
