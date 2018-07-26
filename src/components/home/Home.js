import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.css';
import resume from '../../media/resume.pdf';


export default class Home extends Component {

  static propTypes = {
    onToggleClass: PropTypes.func.isRequired
  };

  handleClass = className => {
    event.preventDefault();
    this.props.onToggleClass(className);
  };

  render() {

    return (
      <div className={styles.home}>
        <h1>Hello, I am Stephanie.</h1>
        <a href="https://github.com/stephaniesmith">GitHub</a>
        <a href="https://www.linkedin.com/in/stephanie-lauren-smith/">LinkedIn</a>
        <a href={resume}>Résumé</a>
        <button onClick={() => this.handleClass('bio')}>bio</button>
      </div>
    );
  }
}