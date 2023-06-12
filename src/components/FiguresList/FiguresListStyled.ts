import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const FiguresListStyled = styled.ul`
  display: grid;
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

  @media (min-width: 650px) {
    max-width: 1200px;
    &.figure-list {
      grid-template-columns: repeat(2, 1fr);
    }

    &.center {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 1000px) {
    max-width: 1300px;

    &.figure-list {
      grid-template-columns: repeat(3, 1fr);
    }

    &.center {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 1305px) {
    &.figure-list {
      grid-template-columns: repeat(4, 1fr);
    }

    &.center {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default FiguresListStyled;
