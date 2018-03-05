import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from './actions';
import { connect } from 'react-redux';

export class StackList extends Component {
	componentDidMount(){
		if(this.props.stacks.length === 0){
			this.props.loadStacks(stacks);	
		}
	}
	render(){
		// console.log('stacklist props ', this.props);
		return (
			<div>
				{
					this.props.stacks.map(stack =>{
						return (
							<Link 
							key={stack.id} 
							to='/stack'
							onClick={() => {this.props.setStack(stack)}}
							>
								<h4> {stack.title} </h4>
							</Link>
						)
					})
				}
			</div>
		);
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		setStack
// 	}, dispatch)
// }

function mapStateToProps(state){
	return { stacks: state.stacks }
}


export default connect(mapStateToProps, {setStack, loadStacks})(StackList);