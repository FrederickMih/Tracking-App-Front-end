import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TARGET } from '../../../useful-info/constants';
import { getTotalData } from '../../../Redux/slicers/measure';
import '../../../styles/Stats.css';

const Stats = ({ today }) => {
  // load data from state
  const totalData = useSelector(getTotalData);

  return (
    <div className="stats">
      <div className="stats-item">
        <div>{today}</div>
        <div>Day</div>
      </div>
      <div className="stats-item">
        <div>{getTotalData}</div>
        <div>Achieved</div>
      </div>
      <div className="stats-item">
        <div>{TARGET > totalData ? TARGET - totalData : 0}</div>
        <div>Lag</div>
      </div>
      <div className="stats-item">
        <div>{TARGET}</div>
        <div>Target</div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  today: PropTypes.number.isRequired,
};

export default Stats;
