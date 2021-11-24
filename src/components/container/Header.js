import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import backLogo from '../../assets/images/back.png';
import '../../styles/BackArrow.css';
import '../../styles/Header.css';

const Header = ({
  title, back, link
}) => {
  // const username = useSelector((state) => state.user.username);
  const history = useHistory();

  const returnBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="headline">
        {back && (
          <button className="backButton" type="button" onClick={returnBack}>
            <img src={backLogo} alt="back sign" />
          </button>
        )}
        {title}
        <div className="bkbar">
          <Link to={link}>
            <ArrowBackIosOutlinedIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  back: PropTypes.bool,
};

Header.defaultProps = {
  back: false,
  link: '/add',
};

export default Header;
