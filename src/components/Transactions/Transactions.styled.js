import styled from 'styled-components';

export const StyledTransactions = styled.table`
  width: 700px;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #dbdbd7;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 2px rgba(185, 56, 252, 0.2);
  color: #525150;

  & .tableHead {
    padding: 15px;
    font-size: 21px;
    line-height: 1.8;
    background-color: #0e46b5e6;
    color: #fff;
    border-radius: 10px;
  }

  & .tableBody {
    text-transform: capitalize;
    font-size: 20px;
    line-height: 1.4;
  }

  & .tableBody:nth-child(2n) {
    background-color: #dbf7ff60;
  }

  & td {
    height: 35px;
  }
`;
