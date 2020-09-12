import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li className="login">
            {this.props.auth.isAuthenticated() ? (
              <button onClick={this.props.auth.logout}>Log out</button>
            ) : (
              <button onClick={this.props.auth.login}>Log in</button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
