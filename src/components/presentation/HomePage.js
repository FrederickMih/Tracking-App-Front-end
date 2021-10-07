import PropTypes from 'prop-types';
import '../../styles/HomePage.css';

const HomePage = ({ handleSlideToAddMeasurement }) => (
  <div className="main__div">
    <div className="homeContainer">
      <p className="homeText">
        Welcome back let&apos;s add your measurement for today.
      </p>
      <span className="reversedTriangle" />
    </div>
    <div className="buttonBackground">
      <button
        type="button"
        className="button"
        onClick={handleSlideToAddMeasurement}>
        Go
      </button>
    </div>
  </div>
);

HomePage.propTypes = {
  handleSlideToAddMeasurement: PropTypes.func.isRequired,
};

export default HomePage;
