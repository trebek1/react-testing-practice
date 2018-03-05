import React from 'react';
import { shallow, mount } from 'enzyme';
import { LinkedCategory, Category } from './Category';
import { category, clues } from '../data/fixtures';
import { fakeServer } from 'sinon';

let props = { category };
describe('Category component ', () => {
	let server;
	beforeEach(() => {
		server = fakeServer.create();
		server.respondWith('GET', 
			`http://jservice.io/api/clues?category=${props.category.id}`,
			[ 200, {'Content-Type': 'application/json'},
				JSON.stringify(clues)
			]
		)
	});

	describe('when creating a new category ', () => {
		let cat;
		beforeEach(done => {
			cat = mount(<Category {...props}/>);
			
			server.respond();

			setTimeout(done);
		});
		

		it('has a title ', () => {
			expect(cat.find('h2').text()).toEqual(props.category.title);
		});

		it('logs the category ', () => {
			cat.update();
			console.log(cat.debug());
		});

		it('initializes the clues in state', () => {
			expect(cat.state().clues).toEqual(clues);
		});

		it('renders the correct number of clues ', () => {
			cat.update();
			expect(cat.find('Clue').length).toEqual(clues.length);
		});

	});
	describe('linked category ', () => {
		const linkedCat = shallow(<LinkedCategory {...props}/>);

		it('has a link home ', () => {
			expect(linkedCat.find('Link h4').text()).toEqual(" Home ");
		});

		it('creates a category component ', () =>{
			expect(linkedCat.find('Category').exists()).toBe(true);
		});

	});
});