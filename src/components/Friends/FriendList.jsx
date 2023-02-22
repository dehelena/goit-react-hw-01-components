import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { StyledFriendList } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <StyledFriendList className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </StyledFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
