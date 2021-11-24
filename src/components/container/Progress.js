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
import '../../styles/Progress.css';

const Progress = () => {
  const title = 'Progress Report';
  const dispatch = useDispatch();
  const totalData = useSelector(getTotalData);
  const progressReport = useSelector(getProgressReport);
  const progressPercent = totalData * 100;
  const measures = useSelector(getMeasuresStatus);

  useEffect(async () => {
    await dispatch(loadMeasures());
  }, []);

  if (measures.status === 401) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header title={title} />
      <div className="progress-stats">
        <div>
          <ProgressCircle
            value={100 - progressPercent}
            color={progressPercent >= 100 ? 'primary' : 'secondary'}
          />
        </div>
      </div>
      <div className="progress-items">
        {Object.entries(progressReport).map((p) => (
          <div key={p[0]} className="progress-item">
            <div className="ins-type">{p[0]}</div>
            <div className="ins-data">
              {p[1].map((e) => e.data).reduce((a, b) => a + b)}
              {' '}
              CM
            </div>
            <div className="ins-count">
              Frequency:
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
