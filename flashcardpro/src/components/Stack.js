import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import Card from './Card';

// export class Stack extends Component {
// 	render(){
	export const Stack = ({ stack: {cards, title}}) => {
		return (
			<div>
				<Link to='/' className="link-home">
				 	<h4>Home</h4>
				 </Link>
				<h3>{title}</h3>
				<br />
				{
					cards.map(card => {
						return (
							<Card key={card.id} card={card} />
						)
					})
				}
			</div>
		)
	}
		

function mapStateToProps(state){
	return {
		stack: state.stack
	}
}

export default connect(mapStateToProps,null)(Stack);