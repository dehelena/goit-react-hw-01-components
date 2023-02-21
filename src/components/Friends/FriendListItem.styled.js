import styled from 'styled-components';

export const StyledFriendListItem = styled.li`
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding: 15px;
  font-size: 25px;
  color: #525150;
  border: 1px solid #5e018f80;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 2px rgba(185, 56, 252, 0.2);

  & .friendAvatar {
    margin-right: 10px;
  }

  & .status {
    display: block;
    text-align: center;
    margin: 20px 20px 20px 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  & .online {
    background-color: green;
  }

  & .offline {
    background-color: red;
  }
`;
