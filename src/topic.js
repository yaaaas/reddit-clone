import React,{Component} from 'react';
import './topic.css'

class Topic extends Component{
  static defaultProps = {
    votecount : 0
  }

  IncrementVoteCount(){
    this.votecount + 1;
  }

  render(){
    const content = this.props.content;
    const i = this.props.number;
    var votecount = this.props.votes;



    return(
      <div className = "TopicField">
      <h4>Topic {i}</h4>
      <p>{content}</p>
      <p>Upvotes: {votecount}</p>
      <button onClick = {this.IncrementVoteCount}>Upvote!</button>
      <button>Downvote!</button>
      </div>
    )
  }
}

export default Topic;
