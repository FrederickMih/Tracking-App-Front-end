import { LOGIN } from './constants';

const loginAction = (username) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: {
      username,
      loggedIn: true,
    },
  });
};
export default loginAction;
