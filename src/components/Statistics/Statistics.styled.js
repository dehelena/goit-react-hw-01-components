import styled from 'styled-components';

export const StyledStatistics = styled.section`
  width: 400px;
  margin: 20px auto;
  padding-top: 30px;
  text-align: center;
  border: 2px solid #dbdbd7;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 2px rgba(185, 56, 252, 0.2);

  & .title {
    color: #525150;
  }

  & .statList {
    display: flex;
    margin-top: 30px;
    align-items: center;
  }

  & .statItem {
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #e8e8e8;
  }

  & .statItem:first-child {
    border-bottom-left-radius: 10px;
  }

  & .statItem:last-child {
    border-bottom-right-radius: 10px;
  }
`;
