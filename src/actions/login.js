import { LOGIN } from "./constants"

const loginAction = (username) => {
  dispatch({
    type: LOGIN,
    payload: {
      username,
      loggedIn: true,
    },
  })
}
export default loginAction;