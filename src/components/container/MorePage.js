import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import target from '../../assets/images/target.png';
import email from '../../assets/images/email.png';
import man from '../../assets/images/man.png';
import settings from '../../assets/images/settings.png';
import help from '../../assets/images/help.png';
import { container } from '../../styles/allPages.module.css';
import { user, link, info } from '../../styles/MorePage.module.css';
import Profile from './Profile';
import { getUserInfo } from '../../Redux/slicers/user';

const MorePage = () => {
  const userInfo = useSelector(getUserInfo);

  if (userInfo.logged_in === false) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header title="More" />
      <Profile />
      <div className={container}>
        <div className={user}>
          <img alt="Img" src={man} />
        </div>
        <div className={info}>
          <h2>{userInfo.username}</h2>
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
};
export default MorePage;
