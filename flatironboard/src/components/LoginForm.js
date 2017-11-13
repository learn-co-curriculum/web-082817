import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    /// I will submit state
    // should get login from parent
    console.log(this.props)
    this.props.onLogin(this.state);
    this.setState({
      username: "",
      password: ""
    });
  };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    console.log("LoginForm props", this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleUsernameChange}
          value={this.state.username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={this.handlePasswordChange}
          value={this.state.password}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;
