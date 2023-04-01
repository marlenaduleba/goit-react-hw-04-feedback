import React from 'react';
import PropTypes from 'prop-types';
import css from './Box.module.css';

const Box = ({ children }) => {
  return <div className={css.box}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Box;