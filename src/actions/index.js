import axios from 'axios';
// import T_HEADER from '../helper/tHeader';
import {
  LOGIN,
  LOGOUT,
  GET_MEASUREMENTS,
  SET_USER_DATA,
  BASE,
} from './constants';

const getMeasurements = () => async (dispatch) => {
  const url = `${BASE}measurements`;
  axios.get(url).then((response) => {
    dispatch({
      type: GET_MEASUREMENTS,
      payload: {
        measurements: [...response.data],
      },
    });
    console.log(response.data);
  });
};
// (response) => console.log(response.data);

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
