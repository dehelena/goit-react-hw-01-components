import PropTypes from 'prop-types';
import { StyledFriendListItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriendListItem>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="friendAvatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
