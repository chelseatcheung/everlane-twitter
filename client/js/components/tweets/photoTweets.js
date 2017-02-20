import React from 'react';

const PhotoTweets = (props) => {
    return (
      <div>
      {props.tweets.map(function(index){
        return (
          <div>
          {index.user}
          <img key={index.user} src={index.photo}/>
          </div>
          )
      })}
      </div>
    )
}

export default PhotoTweets;