import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';

describe("app", () =>{
	// since we dont have context to store we need to shallow render 
	// const app = mount(<App />);
	// shallow only shows context of component being rendered, not subcomponents
	const app = shallow(<App />);

	it('renders the flashcard pro title', () => {
		expect(app.find('h2').text()).toEqual(" Flashcard Pro ")
	});

	it('renders the stacklist', () => {
		// console.log(app.debug());
		expect(app.find('Connect(StackList)').exists()).toBe(true);
	});

	it('renders a link to create new stacks ', () => {
		expect(app.find('Link h4').text()).toEqual(' Create a new Stack ')
	});
});