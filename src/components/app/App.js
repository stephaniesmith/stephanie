import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../home/Home';
import Bio from '../bio/Bio';
import styles from './App.css';

export default class App extends Component {
  // static propTypes = {
  //   onToggleClass: PropTypes.func
  // };

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
          <Bio/>
        </div>
      </div>
    );
  }
}