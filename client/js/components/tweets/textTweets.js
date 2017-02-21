import React, { Component } from 'react';

class TextTweets extends Component {
  render(){
    return (
      <div>
        {this.props.tweets.map(function(index){
          return (
            <div key={index.user}>
              <div className="tweet">
                <p className="text-tweet">{index.text}</p>
                <p className="text-date">{index.date}</p>
              </div>  
              <div className="user-tweet">
                <a href={index.link}>@{index.user}</a>
              </div>
            </div>
          )
        })}
      </div>
      )
  }
}

export default TextTweets;