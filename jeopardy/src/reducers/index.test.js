import * as actions from '../actions/index';
import combineReducers from './index'
import { category, categories } from '../data/fixtures';

describe('reducers ', () => {

	it("should set new categories ", () => {

		const expectedResult = {categories,category: []};
		// reducer take initial state and the action
		expect(combineReducers({},{type: actions.SET_CATEGORIES, categories})).toEqual(expectedResult);

	});

	it("should set new category ", () => {

		const expectedResult = {categories: [],category: []};
		// reducer take initial state and the action
		expect(combineReducers({},{type: actions.SET_CATEGORY, category})).toEqual(expectedResult);

	});

});
