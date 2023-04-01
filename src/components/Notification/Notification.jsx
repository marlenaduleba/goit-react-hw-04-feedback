import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';


export default class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <p className={css.message}>{this.props.message}</p>;
  }
}