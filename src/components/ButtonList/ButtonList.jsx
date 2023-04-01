import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ButtonList.module.css';


export default class ButtonList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <ul className={css.list}>{this.props.children}</ul>;
  }
}