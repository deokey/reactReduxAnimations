import React, { Component } from 'react';
import logo from '../../logo.svg';
import Heart from '../Shared/Heart';
export default class index extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Heart />
      </div>
    );
  }
}
