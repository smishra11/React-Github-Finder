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
    const { profileData, reposData } = this.props;
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
                    <Badge variant="primary" className="profileBadge">
                      Public Repos: {profileData.public_repos}
                    </Badge>
                    <Badge variant="secondary" className="profileBadge ml-2">
                      Public Gists: {profileData.public_gists}
                    </Badge>
                    <Badge variant="success" className="profileBadge ml-2">
                      Followers: {profileData.followers}
                    </Badge>
                    <Badge variant="info" className="profileBadge ml-2">
                      Following: {profileData.following}
                    </Badge>
                  </div>
                  <br />
                  <ListGroup>
                    <ListGroupItem>
                      Company:{' '}
                      {profileData.company ? profileData.company : 'N/A'}
                    </ListGroupItem>
                    <ListGroupItem>
                      Website/Blog:{' '}
                      {profileData.blog ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={profileData.blog}
                        >
                          {profileData.blog}
                        </a>
                      ) : (
                        'N/A'
                      )}
                    </ListGroupItem>
                    <ListGroupItem>
                      Location:{' '}
                      {profileData.location ? profileData.location : 'N/A'}
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
        <Container className="mb-3">
          <h3 className="mb-3 mt-3 ml-3 font-weight-bold">
            <i>Latest Repos :</i>
          </h3>
          {reposData.map((repo) => {
            return (
              <Card className="mb-2" key={repo.id}>
                <Card.Body className="mb-2">
                  <Row>
                    <Col sm={6}>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </Col>
                    <Col sm={6}>
                      <Badge variant="primary">
                        Stars: {repo.stargazers_count}
                      </Badge>
                      <Badge variant="secondary" className="ml-2">
                        Watchers: {repo.watchers_count}
                      </Badge>
                      <Badge variant="success" className="ml-2">
                        Forks: {repo.forks_count}
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </>
    );
  }
}

export default Github;
