import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const DetailsFigurePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin-bottom: 34px;
  }

  .details-container {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .top {
    width: 279px;
    font-size: 1.3125rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    gap: 29px;

    &__franchise {
      overflow-wrap: break-word;
      color: ${themeColors.lightGrey};
      text-transform: uppercase;
      font-weight: 700;
    }

    &__title {
      overflow-wrap: break-word;
      font-weight: 400;
    }

    &__image {
      height: fit-content;
      border-radius: 9px;
      object-fit: cover;
    }
  }

  .purchased {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${toRem(23)};
    color: ${themeColors.secundary};
    background: ${themeColors.dark};
    border: 2px solid ${themeColors.secundary};
    padding-block: 7px;
    border-radius: 10px;
    gap: 3px;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 23px;
    font-size: ${toRem(21)};

    &__data {
      display: flex;
      flex-direction: column;
      font-size: ${toRem(20)};
      gap: 11px;
    }

    &__title {
      width: fit-content;
      padding-bottom: 5px;
      border-bottom: 2px solid ${themeColors.primary};
    }

    &__description-container {
      display: flex;
      align-items: center;
    }

    &__description {
      font-size: ${toRem(17)};
    }

    &__point {
      width: 5px;
      height: 5px;
      background-color: ${themeColors.light};
      border-radius: 50%;
      margin-inline: 7px;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 36px;
      padding: 22px;
    }
  }
`;

export default DetailsFigurePageStyled;
