import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const GenericFormStyled = styled.form`
  background-color: ${themeColors.dark};
  display: flex;
  flex-direction: column;
  color: ${themeColors.placeholder};
  padding: 30px 20px;
  border-radius: 16px;
  gap: 27px;
  box-shadow: 0px 0px 8px 1px rgba(11, 253, 180, 0.3);
  text-transform: capitalize;

  h2 {
    font-size: ${toRem(16)};
    font-weight: normal;
    color: ${themeColors.light};
  }

  .controler {
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      height: 48px;
      width: 237px;
      padding-left: 12px;
      border-radius: 4px;
      font-size: ${toRem(16)};
      border: 1px solid ${themeColors.borderInputs};
      background-color: ${themeColors.mainBackground};
      color: ${themeColors.light};
    }

    input::placeholder {
      color: ${themeColors.placeholder};
    }

    input:focus-visible {
      outline: #24acf0 2px;
      outline-style: inset;
    }

    .symbol {
      position: absolute;
      right: 14px;
      bottom: 14px;
    }
  }

  .number {
    position: relative;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  input[type="number"] {
    padding-right: 47px;
  }

  .purchased {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
    font-size: 19px;
    font-size: ${toRem(19)};
    color: ${themeColors.light};
  }

  .check {
    width: 30px;
    height: 30px;
  }
`;

export default GenericFormStyled;
