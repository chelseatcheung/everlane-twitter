import React, { Component } from 'react';
import {connect} from 'react-redux';
import SavedTweets from './savedTweets';
import { saveTweets } from '../../actions/index';

class SavedContainer extends Component {
  componentWillMount() {
    this.props.saveTweets()
  }
  render() {
    const parsed = JSON.parse(this.props.savedTweets)
    const saved = this.props.savedTweets === "[]" ? <div className="saved-placeholder">No saved tweets yet. Get to it!</div> : <SavedTweets tweets={parsed}/>
    return (
        <div className="saved-container">{saved}</div>
      )
  }
}

function mapStateToProps(state) {
  return {
    savedTweets: state.savedTweets
  }
}

export default connect(mapStateToProps, {saveTweets})(SavedContainer);