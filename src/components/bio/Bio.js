import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Bio.css';

export default class Bio extends Component {
  
  static propTypes = {
    onToggleClass: PropTypes.func.isRequired
  };

  handleClass = className => {
    event.preventDefault();
    this.props.onToggleClass(className);
  };

  render() {
    return (
      <div className={styles.bio}>
        <button onClick={() => this.handleClass('')}>home</button>
        <p>This is a bio.</p>
      </div>
    );
  }
}
