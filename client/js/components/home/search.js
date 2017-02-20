import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { displayTweets, searchTweets } from '../../actions/index'

class SearchContainer extends Component {
  searchTweets(){
    const value = this.refs.searchQuery.value;
    const option = this.refs.searchOption.value;
    const params = {value, option}
    this.props.searchTweets(params)
  } 
  render() {
    return (
        <div>
          <select ref="searchOption">
            <option>Search By</option>
            <option value="phrase">Word/Phrase</option>
            <option value="hashtag">Hashtag</option>
            <option value="photo">Photo</option>
          </select>
          <input ref="searchQuery" required/>
          <button onClick={this.searchTweets.bind(this)}>Search</button>
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    displayTweets: state.displayTweets
  }
}

const mapDispatchToProps = {searchTweets}


export default connect(mapStateToProps, {searchTweets, displayTweets})(SearchContainer)