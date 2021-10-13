import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import target from '../../assets/images/target.png';
import email from '../../assets/images/email.png';
import man from '../../assets/images/man.png';
import settings from '../../assets/images/settings.png';
import help from '../../assets/images/help.png';
import { container } from '../../styles/allPages.module.css';
import { user, info, link } from '../../styles/MorePage.module.css';

const MorePage = ({ userData }) => (
  <div>
    <Header title="More" />
    <div className={container}>
      <div className={user}>
        <img alt="Img" src={man} />
        <div className={info}>
          <div>{userData.username}</div>
          <div>{userData.email}</div>
        </div>
      </div>
      <div className={link}>
        <img alt="target" src={target} />
        <div>Your goal</div>
      </div>
      <div className={link}>
        <img alt="target" src={email} />
        <div>Mailing list</div>
      </div>
      <div className={link}>
        <img alt="target" src={man} />
        <div>Your profile</div>
      </div>
      <div className={link}>
        <img alt="target" src={settings} />
        <div>Settings</div>
      </div>
      <div className={link}>
        <img alt="target" src={help} />
        <div>Help</div>
      </div>
    </div>
  </div>
);

MorePage.propTypes = {
  userData: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
};

const mapStateToProps = ({ userData }) => ({
  userData,
});

export default connect(mapStateToProps)(MorePage);
