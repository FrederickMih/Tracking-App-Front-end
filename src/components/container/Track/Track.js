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

const Track = () => {
  const title = 'Measure Tracked';
  const dispatch = useDispatch();
  const allMeasures = useSelector(getAllMeasures);
  const measures = useSelector(getMeasuresStatus);

  useEffect(async () => {
    await dispatch(loadMeasures());
  }, []);

  if (measures.status === 401) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="track">
      <Header title={title} />
      {Object.entries(allMeasures).length === 0 ? (
        <div className="not-found">No data found. Please Add deal first</div>
      ) : (
        Object.entries(allMeasures).map((m) => (
          <div key={m[0]} className="track-tile">
            <Link to={{ pathname: '/track_details', info: m[1], date: m[0] }}>
              <div className="track-tile-left">
                <div className="date">{m[0]}</div>
                <div className="count">
                  Policy Count: <span>{m[1].length}</span>
                </div>
              </div>
              <div className="track-tile-right">
                <span>&#8377;</span>
                <span>
                  {m[1].map((e) => e.data).reduce((a, b) => a + b)}
                </span>
                <NavigateNextIcon />
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Track;
