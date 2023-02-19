import PropTypes from 'prop-types';
import data from '../data.json';

export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class={title}>Upload stats</h2>
      <ul class="stat-list">
        {stats.map(data => (
          <li class="item" key={data.id}>
            <span class="label">{data.label}</span>
            <span class="percentage"> {data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};
