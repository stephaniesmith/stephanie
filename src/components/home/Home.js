import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <h1>Hello, I'm Stephanie.</h1>
        <a href="https://github.com/stephaniesmith">GitHub</a>
        <a href="https://www.linkedin.com/in/stephanie-lauren-smith/">LinkedIn</a>
      </div>
    );
  }
}