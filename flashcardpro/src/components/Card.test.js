import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';
import { card } from '../data/fixtures';

describe('Card', () =>{
	const cardComponent = shallow(<Card { ...card }/>);
	it('sets reveal to be false', () => {
		expect(cardComponent.state().reveal).toBe(false);		
	});
	it('renders the card ', () =>{
		
		expect(cardComponent.find('.card-prompt h4').at(0).text()).toEqual(card.card.prompt);
		expect(cardComponent.find('h4').at(1).text()).toEqual('there');
	});

	it('applies the class text-hidden to the card answer', () => {

		expect(cardComponent.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
	});

	describe('clicking a card', () => {
		beforeEach(() => {
			cardComponent.simulate('click');
		});
		afterEach(() =>{
			cardComponent.simulate('click');
		});
		it('clicks the card', () =>{
			// console.log("state 1 ",cardComponent.state());
			expect(cardComponent.state().reveal).toBe(true);
		});

		it('applies the text-revealed class to the answer ', () =>{
			expect(cardComponent.find('.card-answer h4').hasClass('text-revealed')).toBe(true);
		});
	});
});
