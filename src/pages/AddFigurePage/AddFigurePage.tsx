import AddFigurePageStyled from "./AddFigurePageStyled";
import GenericForm from "../../components/GenericForm/GenericForm";
import useFigures from "../../hooks/useFigure/useFigure";
import { FigureAddDataStructure } from "../../types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { addFigureActionCreator } from "../../store/figures/figureSlice";
import pathList from "../../utils/pathList/pathList";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";

const AddFiguresPage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addFigureApi } = useFigures();

  const handleAddFigureSubmit = async (figure: FigureAddDataStructure) => {
    const figureData = await addFigureApi(figure);

    if (figureData) {
      dispatch(addFigureActionCreator(figureData));
      navigate(pathList.figures);
      scrollTo(0, 0);
    }
  };

  return (
    <AddFigurePageStyled>
      <h1>
        Add your favorite <br /> figure
      </h1>
      <GeneralContainerStyled>
        <GenericForm
          actionOnClick={handleAddFigureSubmit}
          buttonClassName="add"
          textButton="Add figure"
        />
      </GeneralContainerStyled>
    </AddFigurePageStyled>
  );
};

export default AddFiguresPage;
