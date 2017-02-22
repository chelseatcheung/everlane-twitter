import React, { Component } from 'react';
import { deleteTweets } from '../../actions/index';
import { connect } from 'react-redux';


class SavedTweets extends Component {
  deleteTweet(idx){
    let tweet = window.localStorage.getItem('saved');
    let parsed = JSON.parse(tweet);
    parsed.splice(idx, 1)
    window.localStorage.setItem('saved', JSON.stringify(parsed));
    this.props.deleteTweets()
  }
  render() {
  const that = this;
  return (
      <div className="savedtweets-container">
        {this.props.tweets.map(function(index, i){
          return (
            <div className="saved-text" key={i}>
              <a href={index.link}>@{index.user}:</a> {index.text}
              <div className="delete-button" onClick={function(){that.deleteTweet(i)}}>x</div>
            </div>
            )
        })}
      </div>
    )
  }
}

export default connect(null, {deleteTweets})(SavedTweets);