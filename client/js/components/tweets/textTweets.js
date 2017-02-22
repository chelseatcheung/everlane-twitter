import React, { Component } from 'react';
import { saveTweets } from '../../actions/index';
import { connect } from 'react-redux';

class TextTweets extends Component {
  saveTweet(data) {
    let tweet = window.localStorage.getItem('saved');
    let parsed = JSON.parse(tweet);
    parsed.push(data)
    window.localStorage.setItem('saved', JSON.stringify(parsed));
    this.props.saveTweets()
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
              <div className="tweet-outer">
                <a href={index.link}>@{index.user}</a>
                <div onClick={function(){that.saveTweet(index)}} className="save-img"></div>
              </div>
            </div>
          )
        })}
      </div>
      )
  }
}

export default connect(null, {saveTweets})(TextTweets);