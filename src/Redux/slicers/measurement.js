import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from '../api';

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

const { measurementRequested, measurementsReceived, measurementRequestFailed } =
  measurementSlice.actions;
export default measurementSlice.reducer;

// ACTION CREATOR

export const loadMeasurements = () =>
  apiCallBegan({
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
