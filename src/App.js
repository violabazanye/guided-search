import React, { Component } from 'react';
import sale from './imgs/sale.jpeg';
import ootd from './imgs/ootd.jpg';
import avatar from './imgs/avatar.png';
import heart from './imgs/heart.png';
import bag from './imgs/shopping-bag.png';
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
          <ul>
            <li><img src={avatar} alt="Profile"/></li>
            <li><img src={heart} alt="Favorites"/></li>
            <li><img src={bag} alt="Cart"/></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
