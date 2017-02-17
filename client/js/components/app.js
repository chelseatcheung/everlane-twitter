import React, { Component } from 'react';
import Login from './login/login';
import Home from './home/home';

class App extends Component {
  checkCookie() {
    var cookies = document.cookie
    var index = cookies.indexOf('sessionToken=') + 13
    return cookies[index] === 't' ? true : false
  }
  render() {
    return this.checkCookie() ? <Home/> : <Login/>
  }
}

export default App;