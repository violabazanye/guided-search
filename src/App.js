import React, { Component } from 'react';
import sale from './imgs/sale.jpeg';
import ootd from './imgs/ootd.jpg';
import avatar from './imgs/avatar.png';
import heart from './imgs/heart.png';
import bag from './imgs/shopping-bag.png';
import './App.css';
import { Search } from './Search.js';
import { Results } from './Results.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {userInput: '', name: ''};
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showSelection = this.showSelection.bind(this);
  }

  handleUserInput(e){
    this.setState({
      userInput: e.target.value
    });
    if(this.state.userInput !== ''){
      document.getElementById('search-div').className += " show";
      document.getElementById('cancel').style.display = "block"; 
    }
  }

  handleClick(){
    this.setState({
      userInput: ''
    });
    document.getElementById('search-div').classList.remove('show');
    document.getElementById('cancel').style.display = "none"; 
  }

  showSelection(givenName){
    this.setState({
      name: givenName
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>APP NAME</h3>
          <div className="searchBar">
            <input type="text" placeholder="Search" onChange={this.handleUserInput} value={this.state.userInput} />
            <button id="cancel" onClick={this.handleClick}></button>
          </div>
        </div>
        <div className="main-container">
        <Search onUserInput={this.state.userInput} onClick={this.showSelection} />
        <Results name={this.state.name} />
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
