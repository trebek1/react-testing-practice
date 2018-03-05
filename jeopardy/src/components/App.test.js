
import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { categories } from '../data/fixtures';

describe("app", () => {
	const props = { categories }
	const app = shallow (<App {...props} />);

	it('renders the title ', () => {
		expect(app.find('h2').text()).toEqual(" Jeopardy! ");
	});

	it('renders the categories ', () => {
		expect(app.find('Link').length).toEqual(categories.length);
	});

	it('titles the links correctly', () => {
		app.find('Link h4').forEach((linkTitle, index) => {
			expect(linkTitle.text()).toEqual(categories[index].title);
		});
			//.at(0).text(0)).toEqual(categories[0].title);
	});
});