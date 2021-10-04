import { LOGOUT } from './constants';

const logoutAction = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
export default logoutAction;
