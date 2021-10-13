import { useHistory } from 'react-router-dom';
import '../../styles/HomePage.css';
import Header from '../container/Header';

const HomePage = () => {
  const history = useHistory();
  const handleClick = () => history.push('/add');

  return (
    <div className="main__div">
      <Header title="More" />
      <div className="homeContainer">
        <p className="homeText">Let&apos;s add your measurement for today.</p>
        <span className="reversedTriangle" />
      </div>
      <div className="buttonBackground">
        <button type="button" className="button" onClick={handleClick}>
          Go
        </button>
      </div>
    </div>
  );
};

export default HomePage;
