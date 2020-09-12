import React from "react";
import "./MovieDetails.css";
import "bootstrap/dist/css/bootstrap.css";

export default class MovieDetails extends React.Component {
  backKeyPress(event) {
    if (event.charCode === 13) {
      this.props.backButton();
    }
  }
  render() {
    return (
      <div>
        <h2 className="center">Movie Details</h2>
        {/* eslint-disable-next-line */}
        <a
          className="back"
          onClick={this.props.backButton}
          onKeyPress={(event) => this.backKeyPress(event)}
          aria-label="Back"
          role="link"
          tabIndex="0"
        >
          <span className="back_text" aria-label="Back to previous page">
            Goto previous page
          </span>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 movietitle">{this.props.movie.Title}</div>
            <div className="col-md-2"></div>
            <div className="col-sm-12 col-md-6 rowformat">
              IMDb Rating: {this.props.movie.imdbRating}
            </div>
            <div className="col-sm-12 col-md-4 rowformat">
              {this.props.movie.rowformat === "NOW_SHOWING"
                ? "NOW SHOWING"
                : ""}
            </div>
            <div className="col-sm-12 movieposter spacer">
              <img src={this.props.movie.Poster} alt="Movie Poster"></img>
            </div>
            <div className="col-sm-12 description spacer">
              <q>{this.props.movie.Plot}</q>
            </div>
            <div className="col-sm-12 rowformat ">
              <b>Language:</b> {this.props.movie.Language}
            </div>
            <div className="col-sm-12 rowformat ">
              <b>Location:</b> {this.props.movie.Location}
            </div>
            <div className="col-sm-12 rowformat spacer">
              <b>Sound Effects:</b>{" "}
              {this.props.movie.SoundEffects.map((effect) => (
                <span>"{effect}" </span>
              ))}
            </div>
            <div className="col-sm-12 description spacer">
              Option to book the movie is coming soon
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line */}
        <a
          className="back"
          onClick={this.props.backButton}
          onKeyPress={(event) => this.backKeyPress(event)}
          aria-label="Back"
          role="link"
          tabIndex="0"
        >
          <span className="back_text" aria-label="Back to previous page">
            Goto previous page
          </span>
        </a>
      </div>
    );
  }
}
