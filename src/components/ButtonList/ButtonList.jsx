import PropTypes from 'prop-types';
import css from './ButtonList.module.css';

export const ButtonList = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

ButtonList.propTypes = {
  children: PropTypes.node.isRequired,
};
