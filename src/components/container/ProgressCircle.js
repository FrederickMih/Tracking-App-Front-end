import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ProgressCircle = ({ value, color }) => (
  <Box position="relative" display="inline-flex">
    <CircularProgress
      variant="determinate"
      value={value}
      color={color}
      size={80}
      thickness={7}
    />
    <Box
      top={10}
      left={0}
      bottom={10}
      right={0}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="caption" component="div" color="textSecondary">
        {`${Math.round(value + 5000)}%`}
      </Typography>
    </Box>
  </Box>
);

ProgressCircle.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressCircle;
