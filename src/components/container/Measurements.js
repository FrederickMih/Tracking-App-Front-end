import React from 'react';
import { useSelector } from 'react-redux';
import MeasurementItem from '../presentation/MeasurementItem';
import '../../styles/Measurements.css';

const Measurements = () => {
  const measurements = useSelector((state) => state.measurements.measurements);

  return (
    <div className="measures">
      {measurements.map((measurement) => (
        <MeasurementItem
          key={measurement.id}
          id={measurement.id}
          image={measurement.image_url}
          name={measurement.name}
        />
      ))}
    </div>
  );
};

export default Measurements;
