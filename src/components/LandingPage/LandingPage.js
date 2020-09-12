import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../Auth/Auth";
import Nav from "../Nav/Nav";
import Callback from "../Callback/Callback";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div>
          <Route
            path="/"
            exact
            render={(props) => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={(props) => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={(props) =>
              this.auth.isAuthenticated() ? (
                <Profile auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </>
    );
  }
}

export default LandingPage;
