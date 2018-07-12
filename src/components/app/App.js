import React, { Component } from 'react';
import Home from '../home/Home';
import Bio from '../bio/Bio';
import styles from './App.css';

export default class App extends Component {

  state = {
    active: ''
  };

  handleActive = activePage => {
    this.setState({
      active: activePage
    });
  };

  render() {
    const { active } = this.state;

    return (
      <div className={styles.app}>
        <div className={`wrapper ${active}`}>
          <Home onToggleClass={this.handleActive}/>
          <Bio onToggleClass={this.handleActive}/>
        </div>
      </div>
    );
  }
}