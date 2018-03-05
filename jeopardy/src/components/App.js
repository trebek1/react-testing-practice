import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories, pickCategory } from '../actions';
import { Link } from 'react-router-dom';

export class App extends Component {
	componentDidMount(){

		// by putting this check in place we wont refetch the data on subsequent page loads 
		if(this.props.categories.length === 0){
			fetch('http://jservice.io/api/categories?count=20')
			.then(response => response.json())
			.then(json => this.props.setCategories(json));
		}
	}
	render(){
		return(
			<div>
				<h2> Jeopardy! </h2>
				{
					this.props.categories.map(cat =>{
						return <div key={cat.id}>
							<Link 
							to='/category'
							onClick = {() =>{this.props.pickCategory(cat)}}
							> 
								<h4>{cat.title}</h4> 
							</Link>
						</div>
					})
				}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		categories: state.categories
	};
}

export default connect(mapStateToProps, { setCategories, pickCategory })(App);
