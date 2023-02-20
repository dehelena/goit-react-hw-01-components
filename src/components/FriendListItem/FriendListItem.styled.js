import styled from 'styled-components';

export const StyledFriendListItem = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding: 15px;
  border: 1px solid #5e018f80;

  & .friendAvatar {
    margin-right: 10px;
  }

  & .online {
    display: block;
    text-align: center;
    margin: 20px 20px 20px 50px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
  }

  & .offline {
    display: block;
    text-align: center;
    margin: 20px 20px 20px 50px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
  }
`;
