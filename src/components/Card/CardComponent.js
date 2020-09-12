import React from "react";
import "./CardComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

export default class CardComponent extends React.Component {
  render() {
    return (
      <div
        className="col-sm-12 col-md-6 cardpadding"
        onClick={() => this.props.onClick(this, this.props.movie)}
      >
        <Card>
          <Card.Header>IMDb Rating: {this.props.movie.imdbRating}</Card.Header>
          <Card.Img
            style={{ height: "350px" }}
            variant="top"
            src={this.props.movie.Poster}
          />
          <Card.Body>
            <Card.Title>{this.props.movie.Title}</Card.Title>
            <Card.Text>{this.props.movie.Plot}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <span>Language: {this.props.movie.Language}</span>
            <span className="right">Location: {this.props.movie.Location}</span>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
