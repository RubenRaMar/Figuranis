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
    figure: { isPurchasedFilter },
    ui: {
      pagination: { totalFiguresToShow, page },
    },
  } = useAppSelector((state) => state);

  useEffect(() => {
    (async () => {
      const figuresData = await getFiguresList({
        page,
        isPurchasedFilter,
      });

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
  }, [
    dispatch,
    getFiguresList,
    isPurchasedFilter,
    totalFiguresToShow,
    page,
    isLogged,
  ]);

  const nextPage = () => {
    scrollTo(0, 0);
    const newPage = page + 1;

    dispatch(paginationActionCreator(newPage));
  };

  const previousPage = () => {
    scrollTo(0, 0);
    const newPage = page - 1;

    dispatch(paginationActionCreator(newPage));
  };

  return (
    <FiguresPageStyled>
      <h1>
        Your favorite <br /> figures
      </h1>
      <GeneralContainerStyled>
        <FiguresList />
        <Pagination nextPage={nextPage} previousPage={previousPage} />
      </GeneralContainerStyled>
    </FiguresPageStyled>
  );
};

export default FiguresPage;
