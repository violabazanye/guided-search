import React, { Component } from 'react';

export class Results extends Component{
	render(){
		console.log(this.props.name);
		return (
			<div className="selected-item"></div>
			);
	}
}