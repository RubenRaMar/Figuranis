import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const AddFigurePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-size: ${toRem(22)};
    width: 100%;
    height: 93px;
    border-block: 1px solid ${themeColors.primary};
    margin-bottom: 64px;
  }
`;

export default AddFigurePageStyled;
