import React, { Component } from 'react';
import {connect} from 'react-redux';

class SavedContainer extends Component {
  render() {
    const saved = this.props.savedTweets === "[]" ? <div className="saved-container"></div> : <div className="saved-placeholder">No saved tweets yet. Get to it!</div>
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

export default connect(mapStateToProps)(SavedContainer);

// export default SavedContainer