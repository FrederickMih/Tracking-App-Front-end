import PropTypes from 'prop-types';

const ProgressItem = ({ date, data }) => (
  <div className="progress-item">
    <p className="date"></p>
    <p className="data">
      {data}
      {' '}
      cm
    </p>
  </div>
);

ProgressItem.propTypes = {
  date: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default ProgressItem;
