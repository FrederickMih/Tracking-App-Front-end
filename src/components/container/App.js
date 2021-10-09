import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from '../presentation/LoginUser';
import { getMeasurements } from '../../actions';
import Router from '../../router/Router';
import Header from './Header';
// import LogoutUser from '../presentation/LogoutUser';
import '../../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  // get measurements data from the endpoint
  useEffect(() => {
    dispatch(getMeasurements());
  }, [dispatch]);
  // Load user data from state
  const user = useSelector((state) => state.user);

  let app = <LoginUser />;
  if (user.loggedIn) {
    app = (
      <>
        <Header />
        <Router />
      </>
    );
  }

  return <div className="App">{app}</div>;
};

export default App;
