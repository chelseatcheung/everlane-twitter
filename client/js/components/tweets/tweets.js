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
      case 'error':
        display = <div className="error">Please select a search option!</div>
        break;
      case 'loading':
        display = <div className="placeholder">Currently fetching tweets for you...</div>
        break;
      case 'none':
        display = <div className="placeholder">Sorry, no tweets matching your request.</div>
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