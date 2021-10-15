import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProgressItem from '../presentation/ProgressItem';
import Header from './Header';

function sortObjByDate(array) {
  return array.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

const Progress = () => {
  const { measurementId } = useParams();
  const [measures, setMeasures] = useState([]);
  const [measureName, setMeasureName] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://guarded-sands-43543.herokuapp.com/measurements/${measurementId}`
      )
      .then((response) => {
        setMeasures(sortObjByDate(response.data.measures));
        setMeasureName(response.data.name);
      })
      .catch((err) => err);
  }, []);

  return (
    <div className="progress-container">
      <Header title="Progress Report" />
      <h3>
        Your
        {measureName}
        {' '}
        Progress
      </h3>
      {measures.map((measure) => (
        <ProgressItem
          key={measure.id}
          date={measure.created_at}
          data={measure.value}
        />
      ))}
    </div>
  );
};

export default Progress;