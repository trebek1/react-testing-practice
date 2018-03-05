import React from 'react';
import { shallow } from 'enzyme';
import { Clue } from './Clue';
import { clue, clue2} from '../data/fixtures';

describe('Clue component', () => {
	const props = { clue }
	const clu = shallow(<Clue clue={clue} />);
	const cluNoVal = shallow(<Clue clue={clue2} />);

	it('has the correct value', () => {
		//. change toString if comes in as an integer, dont change the data 
		expect(clu.find('h4').text()).toEqual(clue.value.toString());
	});

	it('has the right value', () => {
		expect(clu.find('h5').at(0).text()).toEqual(clue.question);
	});

	it('starts with class `text-hidden`', () => {
		expect(clu.find('h5').at(1).hasClass('text-hidden')).toEqual(true);
	});

	it('should start with false clue state ', () => {
		expect(clu.state().reveal).toEqual(false);
	});

	describe('when rendering a clue with no value ', () => {
		it('should give value `unknown` if there is no value passed', () => {
			expect(cluNoVal.find('h4').text()).toEqual('unknown');
		});
	});

	describe('clicking on clu ', () => {
		beforeEach(() => {
			clu.simulate('click');
		});

		afterEach(() => {
			clu.simulate('click');
		});
		it('has class `text-revealed`', () => {
			expect(clu.find('h5').at(1).hasClass('text-revealed')).toEqual(true);
		});
	});

});