import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/LogoutUser.css';
import { logoutAction } from '../../actions/index';

const LogoutUser = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div className="logout">
      <h1>
        Hi....
        <span className="welcome__user">{user.username}</span>
      </h1>
      <button
        type="submit"
        className="logout__btn"
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutUser;
