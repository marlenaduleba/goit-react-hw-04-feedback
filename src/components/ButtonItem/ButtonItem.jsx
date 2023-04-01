import PropTypes from 'prop-types';
import css from './ButtonItem.module.css';

export const ButtonItem = ({ name, text, onLeaveFeedback }) => {
  return (
    <li>
      <button className={css.button} name={name} onClick={onLeaveFeedback}>
        {text}
      </button>
    </li>
  );
};

ButtonItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
