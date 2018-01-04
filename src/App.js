import React, { Component } from 'react';
import './App.css';
import Top from './header';
import Inputbox from './input';
import Topic from './topic';
import Topiclist from './topiclist';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      content: ["Ï Like Pineapples"]
    }
  }
  UpdateList(){
  this.List.push("Pinapples ")
  }
  render() {
    var List = [["Pineapples",0], ["Ham",2]];
    

    return (
      <div className = "App">
        <Top />
        <Inputbox trigger = {this.UpdateList}/>
        <Topiclist list = {List} />
      </div>

    );
  }
}

export default App;
