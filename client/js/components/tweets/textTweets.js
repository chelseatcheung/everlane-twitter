import React from 'react';

const TextTweets = (props) => {
    return (
      <div>
        {props.tweets.map(function(index){
          return (<div key={index.user}>{index.text}</div>)
        })}
      </div>
      )
}

export default TextTweets;