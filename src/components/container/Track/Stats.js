import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Stats.css';

const Stats = ({ today }) => (
  <div className="stats">
    <div className="stats-item">
      <div>Total Measured</div>
      <div>
        {today}
        {' '}
        cm
      </div>
    </div>
  </div>
);
Stats.propTypes = {
  today: PropTypes.number.isRequired,
};

export default Stats;
