import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addStack } from './actions';

export class StackForm extends Component {
	constructor(){
		// this is not initialized if super is not called 
		super();
		// super(props); is required if you want to use this.props in constructor
		this.state = {
			title: '',
			cards: []
		}
	}

	addCard(){
		const { cards } = this.state;
		cards.push({id: cards.length, prompt: '', answer: ''});
		this.setState({
			cards
		});
	}

	updateCardPart(event, index, part){
		const { cards } = this.state;
		cards[index][part] = event.target.value;
		this.setState({cards})
	}

	addStack(){
		// console.log("Stackform ", this.state);
		this.props.addStack(this.state);
	}

	render(){
		
		return (
			<div>
				<Link to='/' className="link-home">
					<h4> Home </h4>
				</Link>
				<h4> Create a new stack </h4>
				<br />
				<Form inline>
					<FormGroup>
						<ControlLabel>Title:</ControlLabel>
						{' '}
						<FormControl onChange={event => {this.setState({title: event.target.value})}} />
					</FormGroup>
					{
						this.state.cards.map((card,index) => {
							return (
								<div key={card.id}>
								<br />
								<FormGroup> 
									<ControlLabel>Prompt: </ControlLabel>
									{' '}
									<FormControl 
									onChange={event => {
										this.updateCardPart(event, index, 'prompt');
									}} 
									/>
									{' '}
									<ControlLabel>Answer:</ControlLabel>
									{' '}
									<FormControl onChange={event => {this.updateCardPart(event, index, 'answer')}} />
								</FormGroup>
								</div>
							)
						})
					}
				</Form>
				<br />
				<Button onClick={() => this.addCard()}> Add Card </Button>
				{' '}
				<Button onClick={() => this.addStack()}>Save and Add Stack</Button>
			</div>
		);
	}
}

export default connect(null, { addStack })(StackForm);