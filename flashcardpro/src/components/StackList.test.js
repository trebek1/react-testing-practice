import React from 'react';
import { mount, shallow } from 'enzyme';

import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

const props = { stacks };

describe("StackList", () => {

	const stackList = shallow(<StackList  {...props}/>);

	it('renders the right number of links', () => {
		// console.log(stackList.debug());
		expect(stackList.find('Link').length).toEqual(props.stacks.length);
	});

});