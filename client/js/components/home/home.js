import React, { Component } from 'react';
import Saved from './saved';
import Search from './search';
import Tweets from '../tweets/tweets';

class Home extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Saved/>
        <Tweets/>
        <a href="/auth/logout">Logout</a>
      </div>
      )
  }
}

export default Home;