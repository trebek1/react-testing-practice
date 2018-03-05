import React from 'react';
import { mount, shallow } from 'enzyme';

import { Stack } from './Stack';
import { stack } from '../data/fixtures';

const props = { stack };

describe('stack', () => {
	// export the class so that it doesnt have the 
	// dependency on the connected redux version 

	const stack = shallow(<Stack {...props} />);

	it('has a title', () => {
		expect(stack.find('h3').text()).toEqual(props.stack.title);
	});

	it('renders the link home', () =>{
		expect(stack.find('Link h4').text()).toEqual("Home");
	});

	it('renders the correct number of cards', () =>{
		expect(stack.find('Card').length).toEqual(props.stack.cards.length);
	});

});
