import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonList from 'components/ButtonList/ButtonList';
import ButtonItem from 'components/ButtonItem/ButtonItem';

export default class FeedbackOption extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ButtonList>
        {options.map(btn => (
          <ButtonItem
            key={btn}
            text={this.capitalizeFirstLetter(btn)}
            name={btn}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </ButtonList>
    );
  }
}
