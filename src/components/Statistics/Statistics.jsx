import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={`${css.item} ${css.good}`}>Good: {good}</li>
      <li className={`${css.item} ${css.neutral}`}> Neutral: {neutral}</li>
      <li className={`${css.item} ${css.bad}`}> Bad: {bad}</li>
      <li className={`${css.item} ${css.total}`}> Total: {total}</li>
      <li className={`${css.item} ${css.percent}`}>
        Positive feedback: {positivePercentage ? positivePercentage : 0} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
