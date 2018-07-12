import React, { Component } from 'react';
import styles from './Bio.css';

export default class Bio extends Component {
  render() {
    return (
      <div className={styles.bio}>
        <p>This is a bio.</p>
      </div>
    );
  }
}
