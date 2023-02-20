import PropTypes from 'prop-types';
import { StyledProfile } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (
        <StyledProfile className="profile">
  <div className="profileDescription">
    <img
      src={avatar}
      alt="User avatar"
      className="profileAvatar"
    />
    <p className="profileName">{username}</p>
    <p className="profileTag">@{tag}</p>
    <p className="profileLocation">{location}</p>
  </div>

  <ul className="profileStats">
    <li className="profileStatsItem">
      <span className="label">Followers</span>
      <span className="profileQuantity"> {followers} </span>
    </li>
    <li className="profileStatsItem">
      <span className="label">Views </span>
      <span className="profileQuantity"> {views} </span>
    </li>
    <li className="profileStatsItem">
      <span className="label">Likes </span>
      <span className="profileQuantity"> {likes} </span>
    </li>
  </ul>
</StyledProfile>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  })
  
}