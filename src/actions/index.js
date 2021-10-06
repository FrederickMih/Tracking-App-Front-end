import axios from 'axios';
import { LOGIN, LOGOUT, GET_MEASUREMENTS } from './constants';

const getMeasurements = () => async (dispatch) => {
  const req = 'https://aqueous-spire-81105.herokuapp.com/measurements';
  axios.get(req).then(
    // (response) => console.log(response.data)
    (response) => {
      dispatch({
        type: GET_MEASUREMENTS,
        payload: {
          measurements: [...response.data],
        },
      });
    }
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

export { loginAction, logoutAction, getMeasurements };
