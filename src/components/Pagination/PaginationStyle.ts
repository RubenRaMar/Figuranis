import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const PaginationStyle = styled.section`
  width: 279px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 22px;

  span {
    font-size: ${toRem(18)};
    font-weight: 700;
  }

  .pagination {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
  }
`;

export default PaginationStyle;
