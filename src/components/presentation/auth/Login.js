import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import '../../../styles/auth.css';
import {
  getUserInfo,
  getUserLoadingStatus,
  loginUser,
} from '../../../Redux/slicers/user';

const Login = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(getUserInfo);
  const userLoading = useSelector(getUserLoadingStatus);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUser({
        user: {
          username,
          password,
        },
      })
    );
    resetForm();
  };

  if (userInfo.logged_in) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div className="auth">
        <div className="auth-sub">
          <p>Are you a new user?</p>
          <Link to="/registration">Register</Link>
        </div>
        <div
          className={`error-message ${
            !userLoading && userInfo.status === 'Error' ? 'show' : 'hide'
          }`}
        >
          Sign In Failed: Invalid username or password
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {userLoading && <LinearProgress className="progress-bar" />}
      </div>
    </>
  );
};

export default Login;
