import React, { useEffect } from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import FiguresList from "../../components/FiguresList/FiguresList";
import useFigures from "../../hooks/useFigure/useFigure";
import Pagination from "../../components/Pagination/Pagination";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import { paginationActionCreator } from "../../store/ui/uiSlice";

const FiguresPage = (): React.ReactElement => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { filter, length } = useAppSelector((store) => store.figure);
  const { limit, skip } = useAppSelector((store) => store.ui.pagination);
  const dispatch = useAppDispatch();
  const { getFiguresList } = useFigures();

  useEffect(() => {
    (async () => {
      const figuresData = await getFiguresList(skip, limit, filter);

      if (figuresData) {
        dispatch(loadFiguresActionCreator(figuresData));
      }
    })();
  }, [dispatch, getFiguresList, filter, limit, skip, isLogged]);

  const nextPage = () => {
    scrollTo(0, 0);
    const newSkip = skip + limit;

    dispatch(paginationActionCreator(newSkip));
  };

  const previousPage = () => {
    scrollTo(0, 0);
    const newSkip = skip - limit;

    dispatch(paginationActionCreator(newSkip));
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
