import React, { Component } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import CardComponent from "../Card/CardComponent";
import MovieDetails from "../MovieDetails/MovieDetails";

class Home extends Component {
  state = {
    movies: [],
    selectedMovie: null,
    showMovieDetailsPage: false,
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
        this.setState({ movies: response.movies });
      })
      .catch((error) => {
        console.log("User is not logged in");
      });
  }

  cardClickHandler = (data, movie) => {
    this.setState({ showMovieDetailsPage: true, selectedMovie: movie });
  };

  renderMovieCards() {
    return this.state.movies.map((movie) => {
      return (
        <CardComponent
          movie={movie}
          onClick={() => this.cardClickHandler(this, movie)}
        ></CardComponent>
      );
    });
  }

  hideMovieDetailsPage = () => {
    this.setState({ showMovieDetailsPage: false });
  };

  render() {
    return (
      <>
        {this.props.auth.isAuthenticated() ? (
          <div>
            {!this.state.showMovieDetailsPage ? (
              <div>
                <h2 className="center">Movie Catalog</h2>
                <div className="container">
                  <div className="row">{this.renderMovieCards()}</div>
                </div>
              </div>
            ) : (
              <MovieDetails
                movie={this.state.selectedMovie}
                backButton={this.hideMovieDetailsPage}
              ></MovieDetails>
            )}
          </div>
        ) : (
          <div className="error">
            Please {/* eslint-disable-next-line */}
            <a className="link" href="#" onClick={this.props.auth.login}>
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
