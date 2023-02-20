import styled from 'styled-components';

export const StyledTransactions = styled.table`
  width: 600px;
  text-align: center;
  border: 2px solid #dbdbd7;
  margin: 20px auto;
  box-shadow: 2px 2px 4px 2px rgba(185, 56, 252, 0.2);

  & .tableHead {
    padding: 15px;
    font-size: 21px;
    line-height: 1.8;
    background-color: #0e46b5;
    color: #fff;
  }

  & .tableBody {
    font-size: 18px;
    line-height: 1.4;
  }

  & .tableBody:nth-child(2n) {
    background-color: #dbf7ff60;
  }
`;
