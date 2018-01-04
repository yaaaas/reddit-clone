import React,{Component} from 'react';
import Topic from './topic';

class Topiclist extends Component {

  render(){
    const List = this.props.list
    const Topics = this.props.list.map((c,i) =><Topic number = {i+1} content={c[0]} votes = {c[1]}/>)
    
    return(
      <div className = "topics">
        {Topics}
      </div>
    )

  }
}

export default Topiclist;
