import React, { Component } from 'react';
import './Note.js';
class Note extends Component {

    
  render() {
    return (
      <div className= "note" onClick={this.props.deleteMethod}>
        {this.props.text}
      </div>

      


    
    );
  }
}

export default Note;

