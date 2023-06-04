import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const LoadingStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  z-index: 10;
  font-size: ${toRem(29)};
  font-weight: 700;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #000000eb;
  position: fixed;
`;

export default LoadingStyled;
