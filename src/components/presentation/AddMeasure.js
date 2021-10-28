import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../container/Header';
import '../../styles/AddMeasure.css';

const AddMeasure = () => {
  const history = useHistory();
  const [measurementId, setMeasurementId] = useState({
    id: 1,
  });

  const [measureValue, setMeasureValue] = useState({
    value: 0.01,
  });

  const measurements = useSelector((state) => state.measurements.measurements);

  const handleSelectChange = (e) => {
    setMeasurementId({
      id: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    setMeasureValue({
      value: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const payload = {
      measurement: {
        id: measurementId.id,
      },
      measure: {
        value: measureValue.value,
      },
    };
    axios
      .post('https://guarded-sands-43543.herokuapp.com/measurements', payload)
      .then(() => {
        document.getElementById('measurement-input').value = '';
        history.push(`/progress/${measurementId.id}`);
      });
  };

  return (
    <div>
      <Header title="Add Measurement" />
      <div className="add-measure">
        <div className="container">
          <div className="select-wrapper">
            <select
              name="select-measurements"
              id="select-measurements"
              onChange={handleSelectChange}
            >
              {measurements.map((measurement) => (
                <option key={measurement.id} value={measurement.id}>
                  {measurement.name}
                </option>
              ))}
            </select>
            <input
              id="measurement-input"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.01 cm"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="AddMeasure__btn"
            type="submit"
            onClick={handleClick}
          >
            Add Measure
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMeasure;
