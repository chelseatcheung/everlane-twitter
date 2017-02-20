import React, { Component } from 'react';

class PhotoTweets extends Component {
  render() {
    return (
      <div>
      {this.props.tweets.map(function(index){
        return (
          <div key={index.user}>
          {index.user}
          <img src={index.photo}/>
          </div>
          )
      })}
      </div>
    )
  }
}

export default PhotoTweets;