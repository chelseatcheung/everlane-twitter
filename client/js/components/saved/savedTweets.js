import React, { Component } from 'react';
import { deleteTweets } from '../../actions/index';
import { connect } from 'react-redux';


class SavedTweets extends Component {
  deleteTweet(idx){
    this.props.deleteTweets(idx)
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