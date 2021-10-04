import { LOGIN, LOGOUT } from '../actions/constants';

const initialState = {
  username: null,
  password: null,
  isLogIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload,
        isLogIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        username: null,
        isLogIn: false,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
