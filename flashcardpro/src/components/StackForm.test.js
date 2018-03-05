import React from 'react';
import { mount, shallow } from 'enzyme';
import { StackForm } from './StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe("StackForm", () => {
	const stackForm = shallow(<StackForm />);
	it('renders a link to home ', () => {
		expect(stackForm.find('Link h4').text()).toEqual(' Home ');
	});

	it('renders a title ', () => {
		expect(stackForm.find('h4').at(1).text()).toEqual(' Create a new stack ');
	});

	it('renders a form component', () =>{
		expect(stackForm.find('Form').exists()).toBe(true);
	});

	it('renders a button to add a new card', () => {
		expect(stackForm.find('Button').at(0).props().children).toEqual(' Add Card ');
	});

	it('renders a button to submit the form', () => {
		expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add Stack');
	});

	describe('updating the title', () => {
		beforeEach(() => {
			stackForm.find('FormControl').simulate('change', {target: {value: changeTitle}});
		});
		it('updates the title in state', () => {
			expect(stackForm.state().title).toEqual(changeTitle);
		});
	});
	describe('when adding a new card', () => {
		beforeEach(() => {
			stackForm.find('Button').at(0).simulate('click');
		});
		afterEach(() => {
			stackForm.setState({cards: []});
		});
		it('has one card in state', () =>{
			expect(stackForm.state().cards.length).toEqual(1);
		});
		it('renders the prompt section', () =>{
			expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt: ')
		});
		it('renders the answer section', () =>{
			expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:')
			// console.log(stackForm.debug());
		});
		describe('and updating the card prompt', () => {
			beforeEach(() => {
				stackForm.find('FormControl')
					.at(1).simulate('change', {target: {value: changePrompt}})
			});
			it('updates the prompt in the state', () =>{
				expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
			});
		});
		describe('and updating the card answer', () => {
			beforeEach(() =>{
				stackForm.find('FormControl').at(2)
				.simulate('change', {target: {value: changeAnswer}});
			});
			it('updates the answer in the state ', () => {
				expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
			});
		});
	});
	//console.log(stackForm.debug());
});

