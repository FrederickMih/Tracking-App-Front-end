import axios from 'axios';
import {
  LOGIN, LOGOUT, GET_MEASUREMENTS, SET_USER_DATA
} from './constants';

const getMeasurements = () => async (dispatch) => {
  axios.get('https://guarded-sands-43543.herokuapp.com/measurements').then(
    // (response) => console.log(response.data)
    (response) => dispatch({
      type: GET_MEASUREMENTS,
      payload: {
        measurements: [...response.data],
      },
    })
  );
};

const loginAction = (username, email) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: {
      username,
      email,
      loggedIn: true,
    },
  });
};

const logoutAction = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

const setUserData = () => async (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
  });
};

export {
  loginAction, logoutAction, getMeasurements, setUserData
};
