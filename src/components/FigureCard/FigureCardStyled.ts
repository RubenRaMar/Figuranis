import styled from "styled-components";
import { themeColors } from "../../styles/theme/theme";
import toRem from "../../styles/functions/toRem";

const FigureCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  .figure,
  .figure--pending {
    position: relative;
    width: 279px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${themeColors.dark};
    border-radius: 18px;
    box-shadow: 0px 0px 8px 1px #0bfdb44d;
    border: 1px solid #0bfdb438;

    &--pending {
      box-shadow: 0px 0px 8px 1px #e0730e4d;
      border: 1px solid #e0730e40;
    }

    &__image {
      border-radius: 18px 18px 0 0;
      object-fit: cover;
    }

    &__data {
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      gap: 12px;
      padding: 22px;
      padding-bottom: 83px;

      &__purchased,
      &__pending {
        font-size: ${toRem(23)};
        font-family: lora;
        font-weight: bold;
        height: 46px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        position: absolute;
        top: 336px;
        background-color: ${themeColors.dark};
      }

      &__purchased {
        border-block: 1px solid ${themeColors.secundary};
        color: ${themeColors.secundary};
      }

      &__pending {
        border-block: 1px solid ${themeColors.pending};
        color: ${themeColors.pending};
      }

      &__franchise {
        font-size: ${toRem(16)};
        font-weight: bold;
        text-transform: uppercase;
        color: ${themeColors.lightGrey};
        text-align: center;
        max-width: 237px;
        overflow-wrap: break-word;
        border-bottom: 2px solid rgb(138, 136, 136);
        padding-bottom: 4px;
      }

      &__title {
        max-width: 237px;
        text-align: center;
        font-size: ${toRem(19)};
        overflow-wrap: break-word;
      }

      &__price {
        padding: 4px 18px;
        font-size: 23px;
        font-weight: bold;
        border-radius: 8px;
        max-width: 200px;
        text-align: center;
        overflow-wrap: break-word;
      }
    }
  }
`;

export default FigureCardStyled;
