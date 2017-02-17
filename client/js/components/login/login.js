import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    console.log('IN LOGIN')
    return (
      <a href="/auth/twitter">Log In</a>
      )
  }
}

export default LoginContainer