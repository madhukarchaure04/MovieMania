import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="title">Movies Mania</li>
          <li className="login">
            {this.props.auth.isAuthenticated() ? (
              // eslint-disable-next-line
              <a tabIndex="3" href="#" onClick={this.props.auth.logout}>
                Log out
              </a>
            ) : (
              // eslint-disable-next-line
              <a tabIndex="3" href="#" onClick={this.props.auth.login}>
                Log in
              </a>
            )}
          </li>
          <li className="nav">
            <Link tabIndex="2" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav">
            <Link tabIndex="1" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
