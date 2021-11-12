import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getMeasurements } from '../../actions';
import Router from '../../router/Router';
// import Header from './Header';
import LogInUser from '../presentation/LoginUser';
import '../../styles/App.css';

const App = () => {
  // Fetch measurements data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeasurements());
  }, [dispatch]);

  // Load user data from state
  const user = useSelector((state) => state.user);

  let app = <LogInUser />;
  if (user.loggedIn) {
    app = (
      <>
        <Router />
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">{app}</div>
    </BrowserRouter>
  );
};

export default App;
