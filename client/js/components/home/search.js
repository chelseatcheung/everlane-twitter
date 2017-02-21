import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { searchTweets, displayTweets } from '../../actions/index';

class SearchContainer extends Component {
  searchTweets(){
    const option = this.refs.searchOption.value;
    const value = this.refs.searchQuery.value;
    const params = {value, option};
    if(option === 'search') {
      this.props.displayTweets('none', 'error')
    } else {
      this.props.displayTweets('none', 'loading');
      this.props.searchTweets(params);
    }
  } 
  render() {
    return (
        <div className="search-container">
          <select className="search-bar" ref="searchOption">
            <option value="search">Search By</option>
            <option value="phrase">Word/Phrase</option>
            <option value="hashtag">Hashtag</option>
            <option value="photo">Photo</option>
          </select>
          <input className="search-input" ref="searchQuery" required/>
          <button className="search-btn" onClick={this.searchTweets.bind(this)}>Search</button>
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    displayTweets: state.displayTweets
  }
}

const mapDispatchToProps = {searchTweets, displayTweets};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)