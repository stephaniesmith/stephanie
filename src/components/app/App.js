import React, { Component } from 'react';
import portrait from '../../media/portrait.png';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Hello, I'm Stephanie.</h1>
        <a href="https://github.com/stephaniesmith">GitHub</a>
        <a href="https://www.linkedin.com/in/stephanie-lauren-smith/">LinkedIn</a>
      </div>
    );
  }
}