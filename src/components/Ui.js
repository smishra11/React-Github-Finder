import React, { Component } from 'react';
import axios from 'axios';

import Github from './Github';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Ui extends Component {
  state = {
    inputVal: '',
    isClicked: false,
    profileData: {},
    reposData: [],
    repos_count: 5,
    repos_sort: 'created: asc',
  };

  inputAdded = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  getRepos = () => {
    axios
      .get(
        `https://api.github.com/users/smishra11/repos?per_page=${this.state.repos_count}&sort=${this.state.repos_sort}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      )
      .then((res) => {
        this.setState({ reposData: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  btnClicked = async () => {
    if (!this.state.inputVal) {
      return;
    } else {
      await axios
        .get(
          `https://api.github.com/users/smishra11?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        )
        .then((res) => {
          this.setState({ profileData: res.data });
          this.getRepos();
          console.log(this.state.profileData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    this.setState({ isClicked: true });
  };

  render() {
    return (
      <>
        <Container>
          <Card className="card-body">
            <h1>Search Github Users</h1>
            <p style={{ fontSize: '20px' }} className="text-secondary">
              Enter a username to fetch a user profile and repository
            </p>
            <input
              type="text id"
              className="form-control"
              placeholder="GitHub Username..."
              onChange={this.inputAdded}
            />
            <Button
              variant="secondary"
              className="mt-3"
              onClick={this.btnClicked}
            >
              Search
            </Button>
          </Card>
        </Container>
        {this.state.isClicked ? (
          <Github
            profileData={this.state.profileData}
            reposData={this.state.reposData}
          />
        ) : null}
      </>
    );
  }
}

export default Ui;
