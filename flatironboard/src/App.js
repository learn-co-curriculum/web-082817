import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { login, currentUser } from "./services/flatironapi";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home"
import LabContainer from "./containers/LabContainer"
import { authorize } from "./components/authorize"
import { Route, Redirect } from "react-router-dom";
class App extends Component {
  
  state = {
    user: {}
  }
  componentDidMount() {}

  /*
  
    if I have jwt token then show something else 
    
    
    localStorage.getItem('jwtToken')
  
  
  */

  loginUser = params => {
    login(params).then(user => {
      localStorage.setItem("jwtToken", user.jwt);
      this.setState({
        user: user
      });
    });
  };
  
  logoutUser = () => {
    localStorage.removeItem('jwtToken')
    this.setState({
      user: {}
    })
  }
  render() {
    console.log("Hello from App")
    const AuthLoginForm = authorize(LoginForm)
    const AuthHome = authorize(Home)
    const AuthLabContainer = authorize(LabContainer)
    return (
      
      
      <div>
        <Route path="/login" render={(props) => <AuthLoginForm onLogin={this.loginUser} {...props}/>}/>
        <Route exact path="/" render={(props) => <AuthHome onLogOut={this.logoutUser} {...props}/>}/>
        <Route path="/labs" component={AuthLabContainer}/>
    
      
        
        {/* 
        <div className="App">
          {localStorage.getItem("jwtToken") ? (
            <p>Hello User</p>
          ) : (
            <Redirect to="/login" />
          )}
          <Route
            path="/login"
            render={() => <LoginForm onLogin={this.loginUser} />}
          />
        </div>
        
        */}
      
      </div>
    );
  }
}

export default App;
