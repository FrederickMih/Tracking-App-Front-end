import React from 'react';
import { useSelector } from 'react-redux';
import MeasurementItem from '../presentation/MeasurementItem';
import '../../styles/Measurements.css';
import Header from './Header';

const Measurements = () => {
  const measurements = useSelector((state) => state.measurements.measurements);

  return (
    <div>
      <Header title="Track.it" />
      <div className="measurements">
        {measurements.map((measurement) => (
          <MeasurementItem
            key={measurement.id}
            id={measurement.id}
            name={measurement.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Measurements;
