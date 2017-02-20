import React, { Component } from 'react';
import Saved from './saved';
import Search from './search';
import Tweets from '../tweets/tweets';

class Home extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="left-container">
          <Search/>
          <Tweets/>
        </div>
        <div className="right-container">
          <div className="logout-link"><a href="/auth/logout">Logout</a></div>
          <Saved/>
          <div className="saved-header">Saved Tweets</div>
        </div>
      </div>
      )
  }
}

export default Home;