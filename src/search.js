import React, { Component } from 'react';

var products = [
	{name: 'Sweater', price: '30EUR'},
	{name: 'Dress', price: '60EUR'},
	{name: 'Shoes', price: '130EUR'}
];

export class Search extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(name){
		this.props.onClick(name);
	}

	render(){
		var query = this.props.onUserInput;
		var suggestions = [];

		products.forEach(function(item){
			if (item.name.toLowerCase().indexOf(query) !== -1) {
				suggestions.push(item.name);
			}
		});

		let results = suggestions.map((suggestion, i) =>
			<li key={i} onClick={this.handleClick.bind(null, suggestion)}>{suggestion}</li>
			);

		return (
			<div id="search-div" className="suggestions hide"> 
				<ul className="search-results">{results}</ul>
			</div>
			);
	}
}