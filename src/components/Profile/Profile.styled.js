import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 350px;
  margin: auto;
  border: 2px solid #dbdbd7;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 2px rgba(185, 56, 252, 0.2);
  text-align: center;

  & .profileDescription {
    background-color: #fcedfa66;
    padding: 15px 10px;
  }

  & .profileAvatar {
    width: 100%;
    border-radius: 40%;
  }

  & .profileName {
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
  }

  & .profileTag,
  & .profileLocation {
    margin-bottom: 10px;
    color: #919190;
  }

  & .profileStats {
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 2px solid #8a0158;
    border-radius: 10px;

    background-color: #80016ab3;
  }

  & .profileStatsItem {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-around;

    font-weight: 600;
    color: #faf9f5;
  }

  & .profileQuantity {
    font-size: 19px;
    font-weight: 700;
  }
`;
