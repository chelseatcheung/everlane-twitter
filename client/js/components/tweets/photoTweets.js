import React, { Component } from 'react';

class PhotoTweets extends Component {
  render() {
    return (
      <div>
      {this.props.tweets.map(function(index, i){
        return (
          <div className="photo-container" key={i}>
            <p className="photo-date">{index.date}</p>
            <span className="hover-container">
              <a href={index.link}><img className="photo-tweet" src={index.photo}/>
              <p className="hover-text">@{index.user}</p></a>
            </span>
          </div>
          )
      })}
      </div>
    )
  }
}

export default PhotoTweets;