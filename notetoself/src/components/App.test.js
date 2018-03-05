import React from 'react';
import { mount } from 'enzyme';
import App from './App';

// describe the app component 
describe('app', () =>{
	// mount the app component 
	let app = mount(<App />);

	// check that title is rendering 
	it('renders the app title', () => {
		 // console.log(app.debug());
		 // make sure title text is correct 
		expect(app.find('h2').text()).toEqual(" Note to Self ");
	});

	// make sure clear button is rendering 
	it('renders the clear button', () => {
		expect(app.find('.btn').at(1).text()).toEqual( " Clear Notes ");
	});

	// describe the form
	describe('when rendering the form', () => {

		// make sure the form is rendering 
		it('creates a form component', () => {
			expect(app.find('Form').exists()).toBe(true);
		});
		// make sure formcontrol component is rendering 
		it('renders a FormControl component', () => {
			expect(app.find('FormControl').exists()).toBe(true);
		});

		it('renders a submit button', () => {
			expect(app.find('.btn').at(0).text()).toEqual(" Submit ");
		});
	});

	describe('when creating a note', () =>{
		let testNote = 'test note';
		// these tests will run before each of the subsequent tests
		// in this block
		beforeEach(() =>{
			app.find('FormControl').simulate('change', {
				target: {value: testNote}
			});
		});

		it('updates the text in state', () =>{
			expect(app.state().text).toEqual(testNote);
		});

		describe('and submitting the new note', () =>{
			beforeEach(() =>{
				app.find('.btn').at(0).simulate('click');
			});
			afterEach(() => {
				// clear the notes before each test 
				app.find('.btn').at(1).simulate('click');
			});
			it('adds the new note to state', () => {
				expect(app.state().notes[0].text).toEqual(testNote);
			});
			describe('and remounting the component ', () => {
				let app2;
				beforeEach(() => {
					app2 = mount(<App />);
				});
				// we can test the setting and reading of cookies
				// since we would have something there when we clicked
				// submit from before 
				it('reads the stored note cookies', () => {
					expect(app2.state().notes).toEqual([{ text: testNote }]);
				});
			});
		});
		describe('and clicking the clear button ', () => {
			beforeEach(() => {
				app.find('.btn').at(1).simulate('click');	
			});
			it('clears the notes in the state', () => {
				expect(app.state().notes).toEqual([]);
			});
		});
	});
});