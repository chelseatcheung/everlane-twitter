import React, { Component } from 'react';
import { saveTweets } from '../../actions/index';

class TextTweets extends Component {
  saveTweet(data) {
    saveTweets()
    // window.localStorage.setItem('test', JSON.stringify('hello'));
  }
  render(){
    const that = this;
    return (
      <div>
        {this.props.tweets.map(function(index, i){
          return (
            <div key={i}>
              <div className="tweet">
                <p className="text-tweet">{index.text}</p>
                <p className="text-date">{index.date}</p>
              </div>  
              <div className="user-tweet">
                <a href={index.link}>@{index.user}</a>
                <div onClick={function(){that.saveTweet(index)}}>save</div>
              </div>
            </div>
          )
        })}
      </div>
      )
  }
}


export default TextTweets;