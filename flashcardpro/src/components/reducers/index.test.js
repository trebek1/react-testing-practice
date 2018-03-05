import rootReducer from './index';
import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../actions';
import { stack, stacks } from '../../data/fixtures';

describe('root reducer', () => {
	it('returns the initial state ', () => {
		expect(rootReducer({}, {})).toEqual({stack: {}, stacks: []});
	});
	it('sets the main stack', () =>{
		// root reducer will take a previous state and an action. 
		// expect that the new state will be the result of the computation
		// const action = setStack(stack);
		expect(rootReducer({}, {type: actions.SET_STACK, stack})).toEqual({stack, stacks: []});
	});
	it('loads stacks', () =>{
		expect(rootReducer({}, {type: actions.LOAD_STACKS, stacks})).toEqual({stack: {}, stacks});
	});
	it('adds a stack', () => {
		expect(rootReducer({}, {type: actions.ADD_STACK, stack})).toEqual({stack: {}, stacks: [stack]});
	});
});
