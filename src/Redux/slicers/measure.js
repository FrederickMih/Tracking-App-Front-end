import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from '../api';

/* eslint-disable */
const measureSlice = createSlice({
  name: 'measure',
  initialState: {
    newMeasure: [],
    measures: {},
    loading: false,
  },
  reducers: {
    measureRequested: (state, action) => {
      state.loading = true;
    },
    measureCreated: (state, action) => {
      state.newMeasure = action.payload;
      state.loading = false;
    },
    measureReceived: (state, action) => {
      state.measures = action.payload;
      state.loading = false;
    },
    measureRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});
/* eslint-enable */

const { measureRequested, measureCreated, measureReceived, measureRequestFailed } =
  measureSlice.actions;
export default measureSlice.reducer;

// ACTION CREATOR

export const createMeasure = (measureInfo) =>
  apiCallBegan({
    url: `/measurements/${measureInfo.measurement_id}/measures`,
    method: 'post',
    data: measureInfo,
    withCredentials: true,
    onStart: measureRequested.type,
    onSuccess: measureCreated.type,
    onError: measureRequestFailed.type,
  });

export const loadMeasures = () =>
  apiCallBegan({
    url: '/measures',
    withCredentials: true,
    onStart: measureRequested.type,
    onSuccess: measureReceived.type,
    onError: measureRequestFailed.type,
  });

// SELECTOR

export const getAllMeasures = createSelector(
  (state) => state.measure.measures,
  (measures) => (measures.all ? measures.all : 0)
);

export const getTotalData = createSelector(
  (state) => state.measure.measures.progress,
  (progress) => (progress ? progress.sum_data : 0)
);

export const getProgressReport = createSelector(
  (state) => state.measure.measures.progress,
  (progress) => (progress ? progress.items : 0)
);

export const getMeasuresStatus = createSelector(
  (state) => state.measure.measures,
  (measures) => measures
);
