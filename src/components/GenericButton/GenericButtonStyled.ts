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
  box-shadow: 0px 1px 8px 0px #c80c0cb3;
`;

export default GenericButtonStyled;
