import React, { Component } from 'react';
import top from './imgs/top.jpeg';
import skirt from './imgs/skirt.jpg';
import shoes from './imgs/shoes.jpg';

export var products = [
	{name: 'Top', price: '30EUR', img_url: top},
	{name: 'Skirt', price: '60EUR', img_url: skirt},
	{name: 'Shoes', price: '130EUR', img_url: shoes}
];

export class Search extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(name){
		this.props.onClick(name);
		document.getElementById('results-div').style.display = "block";
		document.getElementById('search-div').style.opacity = 1;
	}

	render(){
		var query = this.props.onUserInput;
		var suggestions = [];
		let results;

		products.forEach(function(item){
			if (item.name.toLowerCase().indexOf(query) !== -1) {
				suggestions.push(item.name);
			}
		});

		if (suggestions.length !== 0) {
			results = suggestions.map((suggestion, i) =>
				<li key={i} onClick={this.handleClick.bind(null, suggestion)}>{suggestion}</li>
				);
		}else{
			results = "No results"
		};

		return (
			<div id="search-div" className="suggestions hide"> 
				<ul id="list" className="search-results">{results}</ul>
			</div>
		);
		
	}
}
