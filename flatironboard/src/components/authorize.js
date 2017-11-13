import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export function authorize(RenderedComponent) {
  return class extends Component {
    loggedIn() {
      return !!localStorage.getItem("jwtToken");
    }
    render() {
      console.log("HOC props", this.props)

          const { pathname } = this.props.location
          if (this.loggedIn() && pathname == "/login") {
            console.log("I am logged in")
            // I am logged in and I'm trying to get to the login
            return <Redirect to="/" />;
          } else if (!this.loggedIn() && pathname !== "/login") {
            console.log("I am not logged in ")
            // I am not logged in and I'm anywhere other than login
            return <Redirect to="/login" />;
          } else {
            console.log("Every other case")
            return (
              <div>
                <RenderedComponent {...this.props} />
              </div>
            );
          /*
            I am not logged in and I'm trying to get to login -> COOL
            I am logged in and trying to get to any authorized component -> COOL
          
          */
        }
     }
  };
}
