import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

//jest describe 

const props = {note: {text: 'hey there'}, students: {alex: 'john'}}; 
// console.log({...props});

// const triplePrint = (a, b, c) => {
// 	console.log(`${a} ${b} ${c}`);
// }
// const message = ['react', 'is', 'awesome'];
// triplePrint('react', 'is', 'awesome');
// triplePrint(...message);

describe("Note", () =>{
  // ...props === note = {props.note}
  let note = mount(<Note {...props} />);
  
  it('renders the note text', () => {
  	// console.log(note.debug());
  	expect(note.find('p').text()).toEqual(props.note.text);
  });
});