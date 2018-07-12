import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {

  state = {
    active: ''
  };

  bioTransition = () => {
    this.setState({
      active: 'bio'
    });
  };

  render() {
    const { active } = this.state;

    const bioClass = active ? `${styles.home} ${active}` : styles.home;

    return (
      <div className={bioClass}>
        <h1>Hello, I'm Stephanie.</h1>
        <a href="https://github.com/stephaniesmith">GitHub</a>
        <a href="https://www.linkedin.com/in/stephanie-lauren-smith/">LinkedIn</a>
        <button onClick={this.bioTransition}>bio</button>
      </div>
    );
  }
}