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
        <p>Full Stack-JavaScript developer with a degree in industrial
design. I enjoy collaborating, learning new skills, and analyzing
code to find solutions. As an avid hiker and creative, you can
find me in the mountains making videos about the PNW.</p>
      </div>
    );
  }
}
