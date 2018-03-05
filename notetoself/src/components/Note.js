import React, {Component} from 'react';

export default class Note extends Component{
  render(){
    // console.log("props: " + JSON.stringify(this.props) + " keys: " + Object.keys(this.props));
    return(
      <div className="note">
        <p>{this.props.note.text}</p>
      </div>
    )
  }
}