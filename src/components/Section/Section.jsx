import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import css from './Section.module.css';


export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
