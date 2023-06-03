import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const FiguresListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;

  .figures-not-found {
    display: flex;
    flex-direction: column;
    gap: 38px;
    align-items: center;
    margin-top: 30px;

    span {
      text-align: center;
      font-size: ${toRem(22)};
    }
  }
`;

export default FiguresListStyled;
