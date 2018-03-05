import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
const cookie_key = "NOTES"

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      notes: []
    }
  }

  componentDidMount(){
    const notes = read_cookie(cookie_key);
    this.setState({notes});
  }

  clearNotes(){
    delete_cookie(cookie_key);
    this.setState({notes: []});
  }
  submit(){
    const { notes, text } = this.state;
    notes.push({text});
    // document.getElementById("text").value = "";
  
    this.setState({
      notes,
      text: ""
    });
    bake_cookie(cookie_key, this.state.notes);
  }
  render(){
    return (
      <div>
        <h2> Note to Self </h2>
        <Form inline>
          <FormControl ref="alex" id="text" onChange={event => {
            this.setState({text: event.target.value})
          }} />
          {' '}
          <Button onClick={() => {
            this.submit()}}> Submit </Button>
        </Form>
        {
          this.state.notes.map((note,index) => {
            return (
              <Note note={note} key={index} />
            )
          })
        }
        <hr/>
        <Button onClick={() =>{
          this.clearNotes();
        }}> Clear Notes </Button>
      </div>
      )
  }
}

export default App;