import { GET_MEASUREMENTS } from '../actions/constants';

const initialState = {
  measurements: [],
};

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEASUREMENTS:
      return {
        ...state,
        measurements: action.payload.measurements,
      };
    default:
      return { ...state };
  }
};

export default measurementsReducer;
