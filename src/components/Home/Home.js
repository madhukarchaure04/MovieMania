import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {
    message: [],
  };

  componentDidMount() {
    fetch("/movies", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        console.log(response);
        this.setState({ message: response.movies });
      })
      .catch((error) => {
        console.log("User is not logged in");
      });
  }
  render() {
    return (
      <>
        {this.props.auth.isAuthenticated() ? (
          <div>
            <h2 className="center">Movie Catalog</h2>
            {this.state.message.map((item) => (
              <div>{item.Title}</div>
            ))}
          </div>
        ) : (
          <div className="error">
            Please {/* eslint-disable-next-line */}
            <a href="#" onClick={this.props.auth.login}>
              login
            </a>{" "}
            to see the movie catalog
          </div>
        )}
      </>
    );
  }
}

export default Home;
