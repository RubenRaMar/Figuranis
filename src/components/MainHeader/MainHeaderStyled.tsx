import styled from "styled-components";

const MainHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/images/background.webp);
  background-position: center;
  background-size: cover;
  height: 213px;

  .logout {
    position: absolute;
    right: 22px;
    top: 22px;
  }
`;

export default MainHeaderStyled;
