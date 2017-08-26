import React, { Component } from 'react';
import { products } from './Search.js';

export class Results extends Component{
	render(){
		let item = this.props.name;
		let price = '';
		let url = '';

		for (var i = 0; i < products.length; i++) {
			if (item === products[i].name) {
				price = products[i].price;
				url = products[i].img_url;
			}
		}

		return (
			<div id="results-div" className="selected-item fadeIn">
				<img src={url} alt="Item" />
				<p>{item}</p>
				<p>{price}</p>
			</div>
			);
	}
}