import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/BackArrow.css';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const AppBar = ({ title, link }) => (
  <>
    <div className="bkbar">
      <Link to={link}>
        <ArrowBackIosOutlinedIcon />
      </Link>
      <div className="title">{title}</div>
    </div>
  </>
);

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

AppBar.defaultProps = {
  link: '/add',
};

export default AppBar;
