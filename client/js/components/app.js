import React, { Component } from 'react'
import Search from './search/search'
import Tweets from './tweets/tweets'
import Saved from './saved/saved'

class App extends Component {
  render() {
    return(
      <div>
        <Search/>
        <Tweets/>
        <Saved/>
      </div>
      )
  }
}

export default App;