import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInUser from '../presentation/LogInForm';
// import SignUpUser from '../presentation/SignUpForm';
import { getMeasurements } from '../../actions';
import { getToken } from '../../helper/session';
import { logInUserSession } from '../../actions/userAction';
import Router from '../../router/Router';
// import Header from './Header';
// import LogoutUser from '../presentation/LogoutUser';
import '../../styles/App.css';

const App = (props) => {
  const { loggedIn, handleGetMeasurements, handleLogInSession } = props;
  const token = getToken();

  // const dispatch = useDispatch();
  // get measurements data from the endpoint
  // useEffect(() => {
  //   dispatch(getMeasurements());
  // }, [dispatch]);
  // Load user data from state
  // console.log(getMeasurements);
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    if (token.auth_token && !loggedIn) {
      handleLogInSession();
    }
    if (loggedIn && token.auth_token) {
      handleGetMeasurements(token);
    }
  }, [loggedIn]);

  let app = <LogInUser />;
  if (loggedIn) {
    app = (
      <>
        {/* <Header /> */}
        <Router />
      </>
    );
  }

  return <div className="App">{app}</div>;
};

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetMeasurements: () => {
    dispatch(getMeasurements());
  },
  handleLogInSession: () => {
    dispatch(logInUserSession());
  },
});

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleGetMeasurements: PropTypes.func.isRequired,
  handleLogInSession: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
