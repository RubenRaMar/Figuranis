import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const GenericButtonStyled = styled.button`
  width: 100%;
  height: 48px;
  background: #000000;
  border: 2px solid #c80c0c;
  border-radius: 10px;
  font-size: ${toRem(18)};
  text-transform: uppercase;
  font-weight: 700;
`;

export default GenericButtonStyled;
