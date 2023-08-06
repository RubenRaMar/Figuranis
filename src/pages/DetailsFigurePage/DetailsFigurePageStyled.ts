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
      height: fit-content;
    }

    &__title {
      overflow-wrap: anywhere;
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

  .pending {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${toRem(23)};
    color: ${themeColors.pending};
    background: ${themeColors.dark};
    border: 2px solid ${themeColors.pending};
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
      height: fit-content;

      width: fit-content;
      padding-bottom: 5px;
      border-bottom: 2px solid ${themeColors.primary};
    }

    &__description-container {
      display: flex;
      align-items: center;
    }

    &__description {
      height: fit-content;
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
      padding-block: 22px;
    }
  }

  @media (min-width: 800px) {
    .details-container {
      margin-top: 50px;
      display: grid;
      justify-items: center;
      width: 100%;
      max-width: 1440px;
    }

    .top {
      width: 100%;
      grid-row-start: 1;
      grid-column-start: 1;

      &__image {
        width: 100%;
        max-width: 650px;
        order: 1;
      }

      &__franchise {
        font-size: ${toRem(32)};
      }

      &__title {
        font-size: ${toRem(24)};
      }
    }

    .pending {
      width: 100%;
      font-size: ${toRem(32)};
      grid-column-start: 2;
      grid-row-start: 1;
      height: fit-content;
    }

    .purchased {
      width: 100%;
      font-size: ${toRem(32)};
      grid-column-start: 2;
      grid-row-start: 1;
      height: fit-content;
    }

    .bottom {
      grid-column-start: 2;
      grid-row-start: 1;
      width: 100%;
      margin-top: 169px;
      gap: 35px;

      &__data {
        font-size: ${toRem(28)};
        gap: 20px;
      }

      &__description {
        font-size: ${toRem(22)};
      }

      &__description-container {
        gap: 8px;
      }

      &__point {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

export default DetailsFigurePageStyled;
