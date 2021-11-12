import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import Header from '../container/Header';
import { getMeasurements, loadMeasurements } from '../../Redux/slicers/measurement';
import { createMeasure } from '../../Redux/slicers/measure';
import '../../styles/AddMeasure.css';

const AddMeasure = () => {
  const appBarTitle = 'Add Measure';
  const dispatch = useDispatch();
  const measurementsObj = useSelector(getMeasurements);
  const productsArray =
    measurementsObj.measurements === undefined ? [] : measurementsObj.measurements;

  const [measurementId, setMeasurementId] = useState(0);
  const [data, setData] = useState('');

  const [selectPlaceholderText, setSelectPlaceholderText] =
    useState('Select your measurement item');
  const [selectPlaceholderClass, setSelectPlaceholderClass] = useState('');

  useEffect(async () => {
    await dispatch(loadMeasurements());
  }, []);

  if (measurementsObj.status === 401) {
    return <Redirect to="/home" />;
  }

  const resetForm = () => {
    setMeasurementId(0);
    setData('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (measurementId === 0) {
      setSelectPlaceholderText('Please select a Product');
      setSelectPlaceholderClass('red-text');
    } else {
      dispatch(
        createMeasure({
          measurement_id: measurementId,
          data,
        })
      );
      resetForm();
    }
  };

  return (
    <>
      <Header title={appBarTitle} link="/track" />
      <div className="add-measure">
        <form onSubmit={handleSubmit}>
          <Select
            className="react-select"
            classNamePrefix="react-select"
            options={measurementsArray.map((m) => ({
              label: m.measurement_name,
              value: m.id,
            }))}
            onChange={(e) => setMeasurementId(e.value)}
            placeholder={
              <div className={selectPlaceholderClass}>
                {selectPlaceholderText}
              </div>
            }
          />

          <input
            type="number"
            step="0.01"
            placeholder="Your measure in cm"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddMeasure;
