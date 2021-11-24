import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import {
  getMeasurements,
  loadMeasurements,
} from '../../../Redux/slicers/measurement';
import '../../../styles/TrackDetails.css';
import Stats from './Stats';

const TrackDetails = ({ location }) => {
  const { info, date } = location;
  const title = 'Track Measure Details';
  const dispatch = useDispatch();
  const measurementsObj = useSelector(getMeasurements);
  const measurements = measurementsObj.measurements === undefined
    ? []
    : measurementsObj.measurements;
  const todayTotal = info ? info.map((e) => e.data).reduce((a, b) => a + b) : 0;

  useEffect(() => {
    dispatch(loadMeasurements());
  }, []);

  if (measurementsObj.status === 401) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header title={title} link="/track" />
      <div className="details">
        <div className="details-header">
          <div className="date">{date}</div>
          <Stats today={todayTotal || 0} />
        </div>
        <div className="details-items">
          {info
            && info.map((e) => (
              <div key={e.id} className="details-item">
                <div className="ins-type">
                  {measurements.length > 0
                    ? measurementsObj.measurements.filter(
                      (f) => f.id === e.measurement_id
                    )[0].measurement_name
                    : ''}
                </div>
                <div className="data">
                  {e.data}
                  {' '}
                  <span>CM</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

TrackDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TrackDetails;
