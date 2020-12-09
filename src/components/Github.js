import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class Github extends Component {
  render() {
    const { profileData } = this.props;
    return (
      <>
        <Container className="mt-3">
          <Card>
            <Card.Body className="mb-3">
              <Row>
                <Col sm={3}>
                  <img
                    className="img-fluid mb-2"
                    src={profileData.avatar_url}
                    alt="profile_img"
                  />
                  <a
                    href={profileData.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-block mb-4"
                  >
                    View Profile
                  </a>
                </Col>
                <Col sm={9}>
                  <div className="d-flex">
                    <h5>
                      <Badge variant="primary">
                        Public Repos: {profileData.public_repos}
                      </Badge>
                    </h5>
                    <h5 className="ml-2">
                      <Badge variant="secondary">
                        Public Gists: {profileData.public_gists}
                      </Badge>
                    </h5>
                    <h5 className="ml-2">
                      <Badge variant="success">
                        Followers: {profileData.followers}
                      </Badge>
                    </h5>
                    <h5 className="ml-2">
                      <Badge variant="info">
                        Following: {profileData.following}
                      </Badge>
                    </h5>
                  </div>
                  <br />
                  <ListGroup>
                    <ListGroupItem>
                      Company: {profileData.company}
                    </ListGroupItem>
                    <ListGroupItem>
                      Website/Blog: {profileData.blog}
                    </ListGroupItem>
                    <ListGroupItem>
                      Location: {profileData.location}
                    </ListGroupItem>
                    <ListGroupItem>
                      Member Since: {profileData.created_at}
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <h3 className="mb-3 mt-3 ml-3 font-weight-bold">
            <i>Latest Repos</i>
          </h3>
          <Card>
            <Card.Body className="mb-2">
              <Row>
                <Col sm={6}>
                  <a href="#/" target="_blank">
                    {/* ${repo.name} */}
                    repo
                  </a>
                </Col>
                <Col sm={6}>
                  <Badge variant="primary">Stars:</Badge>
                  <Badge variant="secondary">Watchers:</Badge>
                  <Badge variant="success">Forks:</Badge>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default Github;
