import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutAction } from '../../actions';
import logoutImage from '../../assets/images/logout.png';
import backLogo from '../../assets/images/back.png';
import '../../styles/Header.css';

const Header = ({ title, logoutAction, back }) => {
  const username = useSelector((state) => state.user.username);
  const history = useHistory();
  const handleClick = () => {
    logoutAction();
    localStorage.removeItem('token');
  };

  const returnBack = () => {
    history.goBack();
  };

  return (
    <div className="headline">
      {username}
      &apos; Tracking App
      {back && (
        <button className="backButton" type="button" onClick={returnBack}>
          <img src={backLogo} alt="back sign" />
        </button>
      )}
      {title}
      <button className="logoutBtn" type="button" onClick={handleClick}>
        <img src={logoutImage} alt="log out button" />
      </button>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  logoutAction: PropTypes.func.isRequired,
  back: PropTypes.bool,
};

Header.defaultProps = {
  back: false,
};

const mapDispatchToProps = {
  logoutAction,
};

export default connect(null, mapDispatchToProps)(Header);
