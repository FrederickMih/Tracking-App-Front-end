import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/MeasurementItem.css';

const MeasurementItem = ({ id, name }) => (
  <div>
    <Link to={`/progress/${id}`} className="measurement__item">
      <div>
        <p className="name">{name}</p>
      </div>
    </Link>
  </div>
);

MeasurementItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MeasurementItem;
