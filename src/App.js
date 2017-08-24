import React, { Component } from 'react';
import sale from './sale.jpeg';
import ootd from './ootd.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>APP NAME</h3>
          <input type="text" placeholder="Search" />
        </div>
        <div className="main-container">
          <img src={sale} alt="Sale"/>
          <p style={{fontSize: 12}}>FREE SHIPPING FOR ORDERS OVER 30EUR</p>
          <h4 style={{textAlign: 'left', marginLeft: 20}}>OUTFIT OF THE DAY</h4>
          <img src={ootd} alt="OOTD"/>
        </div>
        <div className="App-bottomNav">
          <p>text</p>
        </div>
      </div>
    );
  }
}

export default App;
