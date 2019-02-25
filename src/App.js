import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Body />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
