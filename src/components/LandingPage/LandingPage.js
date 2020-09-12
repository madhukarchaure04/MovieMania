import React from "react";
import { Route } from "react-router-dom";
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
        <h1>Movies Mania</h1>
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
          <Route path="/profile" component={Profile} />
        </div>
      </>
    );
  }
}

export default LandingPage;
