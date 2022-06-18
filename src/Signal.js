import React from 'react';
import PropTypes from 'prop-types';

const Signal = (props) => {
  return (
    <React.Fragment>
      <h2> Traffic signal</h2>
      <div
        className="dot"
        style={{ backgroundColor: `${props?.signalColor}` }}
      />
    </React.Fragment>
  );
};

Signal.defaultProps = {
  signalColor: 'red',
};

Signal.propTypes = {
  signalColor: PropTypes.string,
};

export default Signal;
