import React, { Component } from 'react';

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-container">
        <p className="welcome-header">Welcome to Twitter Search</p>
        <div className="login-button">
          <a href="/auth/twitter">Log In</a>
        </div>
      </div>
      )
  }
}

export default LoginContainer