import AddFigurePageStyled from "./AddFigurePageStyled";
import GenericForm from "../../components/GenericForm/GenericForm";
import { figuresMock } from "../../mocks/figures/figures";

const AddFiguresPage = (): React.ReactElement => {
  return (
    <AddFigurePageStyled>
      <h1>
        Add your favorite <br /> figure
      </h1>
      <GenericForm
        buttonClassName="add"
        figure={figuresMock[0]}
        textButton="Add figure"
      />
    </AddFigurePageStyled>
  );
};

export default AddFiguresPage;
