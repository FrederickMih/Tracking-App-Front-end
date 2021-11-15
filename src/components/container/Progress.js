import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import {
  getMeasuresStatus,
  getProgressReport,
  getTotalData,
  loadMeasures,
} from '../../Redux/slicers/measure';
import ProgressCircle from './ProgressCircle';
import { TARGET } from '../../useful-info/constants';
import '../../styles/Progress.css';

const Progress = () => {
  const title = 'Progress Report';
  const dispatch = useDispatch();
  const totalData = useSelector(getTotalData);
  const progressReport = useSelector(getProgressReport);
  const progressPercent = (totalData / TARGET) * 100;
  const measures = useSelector(getMeasuresStatus);

  useEffect(async () => {
    await dispatch(loadMeasures());
  }, []);

  if (measures.status === 401) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <Header title={title} />
      <div className="progress-stats">
        <div>
          <ProgressCircle value={progressPercent} color="primary" />
          <div className="progress-stats-label">Achieved</div>
        </div>
        <div>
          <ProgressCircle
            value={100 - progressPercent}
            color={progressPercent >= 100 ? 'primary' : 'secondary'}
          />
          <div className="progress-stats-label">Lag</div>
        </div>
      </div>
      <div className="progress-items">
        {Object.entries(progressReport).map((p) => (
          <div key={p[0]} className="progress-item">
            <div className="ins-type">{p[0]}</div>
            <div className="ins-premium">
              &#8377;
              {' '}
              {p[1].map((e) => e.premium).reduce((a, b) => a + b)}
            </div>
            <div className="ins-count">
              Quantity:
              {' '}
              <span>{p[1].length}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Progress;
