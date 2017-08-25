import React, { Component } from 'react';
import { products } from './Search.js';

export class Results extends Component{
	render(){
		let item = this.props.name;
		let price = '';

		for (var i = 0; i < products.length; i++) {
			if (item === products[i].name) {
				price = products[i].price
			}
		}

		return (
			<div id="results-div" className="selected-item">
				<p>{item}</p>
				<p>{price}</p>
			</div>
			);
	}
}