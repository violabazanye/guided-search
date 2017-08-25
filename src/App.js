import React, { Component } from 'react';
import sale from './imgs/sale.jpeg';
import ootd from './imgs/ootd.jpg';
import avatar from './imgs/avatar.png';
import heart from './imgs/heart.png';
import bag from './imgs/shopping-bag.png';
import './App.css';
import { Search } from './Search.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {userInput: ''};
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e){
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>APP NAME</h3>
          <input type="text" placeholder="Search" onChange={this.handleUserInput} value={this.state.userInput} />
        </div>
        <div className="main-container">
        <Search />
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
