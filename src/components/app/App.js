import React, { Component } from 'react';
import Home from '../home/Home';
import Bio from '../bio/Bio';
import styles from './App.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className="wrapper">
          <Home/>
          <Bio/>
        </div>
      </div>
    );
  }
}