import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from '../api';

/* eslint-disable */
const measurementSlice = createSlice({
  name: 'measurement',
  initialState: {
    measurements: {},
    loading: false,
  },
  reducers: {
    measurementRequested: (state, action) => {
      state.loading = true;
    },
    measurementsReceived: (state, action) => {
      state.measurements = action.payload;
      state.loading = false;
    },
    measurementRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

/* eslint-enable */
/* eslint-disable */
const { measurementRequested, measurementsReceived, measurementRequestFailed } = measurementSlice.actions;
export default measurementSlice.reducer;
/* eslint-enable */

// ACTION CREATOR

export const loadMeasurements = () => apiCallBegan({
  url: '/measurements',
  withCredentials: true,
  onStart: measurementRequested.type,
  onSuccess: measurementsReceived.type,
  onError: measurementRequestFailed.type,
});

// SELECTOR

export const getMeasurements = createSelector(
  (state) => state.measurement.measurements,
  (measurements) => measurements
);
