import React, { Component } from 'react';
import './input.css'

class Inputbox extends Component{

  render(){
    return(
      <div>
      <input className = "inputfield" placeholder = "Add in your Topics here!" maxlength="255" />
      <input type="submit" Value = "submit" />
      </div>
    )
  }
}

export default Inputbox;
