import styled from 'styled-components';

export const StyledStatistics = styled.section`
  width: 350px;
  text-align: center;
  border: 2px solid #dbdbd7;
  margin: 20px auto;
  padding-top: 20px;
  box-shadow: 2px 2px 4px 2px rgba(185, 56, 252, 0.2);

  & .statList {
    display: flex;
    margin-top: 20px;
    gap: 1px;
    align-items: center;
  }

  & .statItem {
    padding: 15px;
    font-weight: 600;
    color: #e8e8e8;
  }
`;
