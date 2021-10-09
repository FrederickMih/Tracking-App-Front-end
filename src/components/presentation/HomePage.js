// import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import '../../styles/HomePage.css';

const HomePage = () => {
  const containerRef = useRef();
  const [index, setIndex] = useState(0);

  const handleToAddMeasures = () => {
    const value = (index + 1) * 100;

    containerRef.current.style.left = `-${value}vw`;

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="main__div">
      <div className="homeContainer">
        <p className="homeText">
          Welcome back let&apos;s add your measurement for today.
        </p>
        <span className="reversedTriangle" />
      </div>
      <div className="buttonBackground">
        <button type="button" className="button" onClick={handleToAddMeasures}>
          Go
        </button>
      </div>
    </div>
  );
};

// HomePage.propTypes = {
//   handleToAddMeasures: PropTypes.func.isRequired,
// };

export default HomePage;
