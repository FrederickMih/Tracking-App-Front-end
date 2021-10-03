import LOGOUT from "./constants"

const logoutAction = () => {
  dispatch({
    type: LOGOUT,
  })
}
export default logoutAction
