import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navigator.css';
import addMeasureLogo from '../../assets/images/add-measure-logo.png';
import trackLogo from '../../assets/images/track-logo.png';
import progressLogo from '../../assets/images/progress-logo.png';
import moreLogo from '../../assets/images/more.png';

const Navigator = () => (
  <>
    <div className="navbar">
      <Link to="/add">
        <img
          src={addMeasureLogo}
          className="linkImage"
          alt="add Measure logo"
        />
        <div>Measure</div>
      </Link>
      <Link to="/track">
        <img src={trackLogo} className="linkImage" alt="add Measure logo" />
        <div>Track</div>
      </Link>
      <Link to="/progress">
        <img
          src={progressLogo}
          className="linkImage"
          alt="add Measure logo"
        />
        <div>Progress</div>
      </Link>
      <Link to="/more">
        <img
          src={moreLogo}
          className="linkImage"
          alt="add Measure logo"
        />
        <div>More</div>
      </Link>
    </div>
  </>
);

export default Navigator;
