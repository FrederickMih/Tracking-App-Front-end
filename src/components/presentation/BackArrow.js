import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/BackArrow.css';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const AppBar = ({ link }) => (
  <>
    <div className="bkbar">
      <Link to={link}>
        <ArrowBackIosOutlinedIcon />
      </Link>
    </div>
  </>
);

AppBar.propTypes = {
  link: PropTypes.string,
};

AppBar.defaultProps = {
  link: '/add',
};

export default AppBar;
