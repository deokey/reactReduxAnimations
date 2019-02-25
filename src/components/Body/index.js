import React, { Component } from 'react';
import logo from '../../logo.svg';
import Heart from '../Shared/Heart';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log('veamos', state);
  return {
    groot: state.grow
  };
};

class index extends Component {
  render() {
    const { groot } = this.props;
    console.log('shego', groot);
    return (
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}

        <div className={groot ? 'panel2 hide' : 'panel2'} />
        <div className={groot ? 'panel grew' : 'panel'} />
        <div className={groot ? 'panel2 hide' : 'panel2'} />
        {/* <div className={groot ? 'half-circle grew' : 'half-circle'} /> */}
        {/* <Heart /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps)(index);
