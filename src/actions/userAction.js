import axios from 'axios';
import {
  LOGIN_USER,
  SIGN_UP_USER,
  USER_REQUEST_FAILURE,
  LOGOUT_USER,
  LOGIN_USER_SESSION,
} from './constants';

const signUpUserRequest = (response) => ({
  type: SIGN_UP_USER,
  payload: response,
});

const logInUserRequest = (response) => ({
  type: LOGIN_USER,
  payload: response,
});

const logInUserSession = () => ({
  type: LOGIN_USER_SESSION,
});

const userRequestFailure = (error) => ({
  type: USER_REQUEST_FAILURE,
  payload: error,
});

const signUpUser = (user) => async (dispatch) => {
  // const url = 'http://localhost:3001/signup/';

  const url = 'https://guarded-sands-43543.herokuapp.com/signup/';
  try {
    const response = await axios.post(url, user);
    dispatch(signUpUserRequest(response.data));
  } catch (error) {
    dispatch(userRequestFailure(error.message));
  }
};

const logInUser = (details) => async (dispatch) => {
  // const url = 'http://localhost:3001/auth/login';
  const url = 'https://guarded-sands-43543.herokuapp.com/auth/login';
  try {
    const response = await axios.post(url, details);
    dispatch(logInUserRequest(response.data));
  } catch (error) {
    dispatch(userRequestFailure(error.message));
  }
};

const logOutUser = () => ({
  type: LOGOUT_USER,
});

export {
  signUpUser, logInUser, logOutUser, logInUserSession
};
