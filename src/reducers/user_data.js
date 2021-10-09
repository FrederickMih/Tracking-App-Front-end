import { SET_USER_DATA } from '../actions/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...action.data,
      };
    default:
      return state;
  }
};
