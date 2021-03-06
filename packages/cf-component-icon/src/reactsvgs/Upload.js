import React from 'react';
import PropTypes from 'prop-types';

const Upload = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M13.636,7.344a2.128,2.128,0,0,0-3.28-2.588A4.246,4.246,0,0,0,2.2,6.416c0,.035,0,.069.005.1A3.455,3.455,0,0,0,3.3,13.2V13.2h3.27V10.083H4.476L8.012,6.752l3.536,3.331H9.454V13.2H13.18V13.2a2.957,2.957,0,0,0,.456-5.853Z" />
  </svg>
);

Upload.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Upload;
