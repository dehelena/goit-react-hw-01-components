import styled from 'styled-components';

export const StyledProfile = styled.div`
  width: 400px;
  margin: 30px auto;
  border: 2px solid #dbdbd7;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 2px rgba(185, 56, 252, 0.2);
  text-align: center;

  & .profileDescription {
    background-color: #fcedfa66;
    padding: 15px 10px;
  }

  & .profileAvatar {
    max-width: 50%;
    margin: 0 auto;
    border: 1px solid #91919060;
    border-radius: 50%;
    background-color: #91919020;
  }

  & .profileName {
    margin-top: 15px;
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;
  }

  & .profileTag,
  & .profileLocation {
    margin-bottom: 10px;
    font-size: 19px;
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
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    background-color: #80016ab3;
  }

  & .label {
    font-size: 20px;
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
    font-size: 22px;
    font-weight: 700;
  }
`;
