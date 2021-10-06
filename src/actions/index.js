import axios from 'axios';
import { LOGIN, LOGOUT, GET_MEASUREMENTS } from './constants';

const getMeasurements = () => (dispatch) => {
  const req = 'https://aqueous-spire-81105.herokuapp.com/measurements';
  axios.get(req)
    .then((response) => dispatch({
      type: GET_MEASUREMENTS,
      payload: response.data,
    }))
    .catch((err) => err);
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

export { loginAction, logoutAction, getMeasurements };
