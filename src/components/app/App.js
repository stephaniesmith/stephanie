import React, { Component } from 'react';
import portrait from '../../media/portrait.png';

export default class App extends Component {
  render() {
    return (
      <div>
        <img src={portrait} style={{ width: '100vw' }}/>
        <h1>Hello, I'm Stephanie.</h1>
        <a href="https://github.com/stephaniesmith">GitHub</a>
        <a href="https://www.linkedin.com/in/stephanie-lauren-smith/">LinkedIn</a>
      </div>
    );
  }
}