import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from '../presentation/LoginUser';
import LogoutUser from '../presentation/LogoutUser';
import '../../styles/App.css';

const App = () => {
  // Load user data from state
  const user = useSelector((state) => state.user);

  return <div>{user.loggedIn ? <LogoutUser /> : <LoginUser />}</div>;
};

export default App;
