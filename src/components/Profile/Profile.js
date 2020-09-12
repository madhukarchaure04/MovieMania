import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.css";

class Profile extends Component {
  state = {
    profile: null,
    error: "",
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }

  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 profile">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={profile.picture} />
              <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Text>{profile.email}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-8 col-sm-12 description bookinginfo">
            Movies booking info will be shown here in future
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
