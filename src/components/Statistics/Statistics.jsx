import PropTypes from 'prop-types';
import { StyledStatistics } from './Statistics.styled';

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
}

export function Statistics({ title, stats }) {
  return (
    <StyledStatistics className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="statList">
        {stats.map(data => (
          <li className="statItem " key={data.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className="label">{data.label}</span>
            <span className="percentage"> {data.percentage}</span>
          </li>
        ))}
      </ul>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
