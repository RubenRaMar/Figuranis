import AddFigurePageStyled from "./AddFigurePageStyled";
import GenericForm from "../../components/GenericForm/GenericForm";

const AddFiguresPage = (): React.ReactElement => {
  return (
    <AddFigurePageStyled>
      <h1>
        Add your favorite <br /> figure
      </h1>
      <GenericForm
        actionOnClick={() => {
          return;
        }}
        buttonClassName="add"
        textButton="Add figure"
      />
    </AddFigurePageStyled>
  );
};

export default AddFiguresPage;
