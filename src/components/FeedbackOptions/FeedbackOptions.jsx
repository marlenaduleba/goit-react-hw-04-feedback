import PropTypes from 'prop-types';
import { ButtonList } from 'components/ButtonList/ButtonList';
import { ButtonItem } from 'components/ButtonItem/ButtonItem';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
 

  const capitalizeFirstLetter = string => 
   string.charAt(0).toUpperCase() + string.slice(1);
  



    return (
      <ButtonList>
        {options.map(btn => (
          <ButtonItem
            key={btn}
            text={capitalizeFirstLetter(btn)}
            name={btn}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </ButtonList>
    );
  
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
