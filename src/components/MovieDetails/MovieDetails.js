import React from "react";
import "./MovieDetails.css";
import "bootstrap/dist/css/bootstrap.css";

export default class MovieDetails extends React.Component {
  render() {
    return (
      <div>
        <h2 className="center">Movie Details</h2>
        {this.props.movie.Title}
      </div>
    );
  }
}
