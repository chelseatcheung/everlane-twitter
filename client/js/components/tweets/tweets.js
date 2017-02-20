import React, { Component } from 'react';
import {connect} from 'react-redux';
import PhotoTweets from './photoTweets';
import TextTweets from './textTweets';


class TweetsContainer extends Component {
  render() {
    let display;
    switch (this.props.displayState) {
      case 'init':
        display = <div></div>
        break;
      case 'none':
        display = <div>Sorry, no tweets matching your request.</div>
        break;
      case 'photo':
        display = <PhotoTweets tweets={this.props.displayTweets}/>
        break;
      case 'text':
        display = <TextTweets tweets={this.props.displayTweets}/>
        break;
    }
    return (
      <div className="tweets-container">
        {display}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    displayTweets: state.displayTweets,
    displayState: state.displayState
  }
}

export default connect(mapStateToProps)(TweetsContainer);