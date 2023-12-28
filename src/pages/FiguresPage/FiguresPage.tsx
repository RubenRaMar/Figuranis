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
  const { getFiguresList } = useFigures();
  const dispatch = useAppDispatch();
  const {
    user: { isLogged },
    figure: { filter, totalFigures },
    ui: {
      pagination: { totalFiguresToShow, page },
    },
  } = useAppSelector((state) => state);

  useEffect(() => {
    scrollTo(0, 0);

    (async () => {
      const figuresData = await getFiguresList(
        page,
        totalFiguresToShow,
        filter
      );

      if (figuresData) {
        dispatch(loadFiguresActionCreator(figuresData));

        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = figuresData.figuresData[0].image;

        const head = document.head;
        const firstChild = head.firstChild;
        head.insertBefore(preloadLink, firstChild);
      }
    })();
  }, [dispatch, getFiguresList, filter, totalFiguresToShow, page, isLogged]);

  const nextPage = () => {
    scrollTo(0, 0);
    const newSkip = page + totalFiguresToShow;

    dispatch(paginationActionCreator(newSkip));
  };

  const previousPage = () => {
    scrollTo(0, 0);
    const newSkip = page - totalFiguresToShow;

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
          length={totalFigures}
          nextPage={nextPage}
          previousPage={previousPage}
          skip={page}
        />
      </GeneralContainerStyled>
    </FiguresPageStyled>
  );
};

export default FiguresPage;
