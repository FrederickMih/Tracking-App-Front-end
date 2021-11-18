import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Header from '../Header';
import {
  getAllMeasures,
  getMeasuresStatus,
  loadMeasures,
} from '../../../Redux/slicers/measure';
import '../../../styles/Track.css';
import Profile from '../Profile';

const Track = () => {
  const title = 'Measure Tracked';
  const dispatch = useDispatch();
  const allMeasures = useSelector(getAllMeasures);
  const measures = useSelector(getMeasuresStatus);

  useEffect(async () => {
    await dispatch(loadMeasures());
  }, []);

  if (measures.status === 401) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header title={title} />
      <div className="track">
        <Profile />
        {Object.entries(allMeasures).length === 0 ? (
          <div className="not-found">
            No data found. Please Add Measure first
          </div>
        ) : (
          Object.entries(allMeasures).map((m) => (
            <div key={m[0]} className="track-tile">
              <Link to={{ pathname: '/track_details', info: m[1], date: m[0] }}>
                <div className="track-tile-left">
                  <div className="date">{m[0]}</div>
                  <div className="count">
                    Measured Parts:
                    {' '}
                    <span>{m[1].length}</span>
                  </div>
                </div>
                <div className="track-tile-right">
                  <span>Details</span>
                  <NavigateNextIcon />
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Track;
