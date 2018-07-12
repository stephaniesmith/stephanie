import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Bio.css';
import stephanie from '../../media/Stephanie.jpg';

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
        <img src={stephanie}/>
        <h1>A little about me.</h1>
        <p>As a Full Stack-JavaScript developer with a background in industrial design, I enjoy collaborating, learning new skills, and analyzing code to find solutions. Currently I'm writing JavaScript using a MERN stack and styling it up with SCSS, but excited to learn new languages, frameworks, and libraries! I do both 2d and 3d design work, predominantly using the Adobe Suite and SolidWorks. Outside of tech, I'm an avid hiker and creative, you can find me in the mountains making videos about the PNW.</p>
      </div>
    );
  }
}
