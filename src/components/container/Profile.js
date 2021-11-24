import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserInfo, loginUser, logoutUser } from '../../Redux/slicers/user';
import logoutBtn from '../../assets/images/logout.png';
import '../../styles/Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfo);

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  if (userInfo.logged_in === false) {
    return <Redirect to="/" />;
  }

  const handleLogout = async () => {
    await dispatch(logoutUser());
  };

  return (
    <>
      <div className="profile-top">
        <h2>
          Hi &nbsp;
          <span className="profile-cap">
            {' '}
            {userInfo.username}
          </span>
        </h2>
      </div>
      <button type="button" onClick={handleLogout} className="logout-button">
        <img src={logoutBtn} alt="logout" className="logoutBtn__color" />
      </button>
    </>
  );
};

export default Profile;
