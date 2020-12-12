import React, { Component } from 'react';
import axios from 'axios';

import Github from './Github';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from './spinner1.gif';

class Ui extends Component {
  state = {
    inputVal: '',
    isClicked: false,
    profileData: {},
    reposData: [],
    repos_count: 5,
    repos_sort: 'created: asc',
    isLoading: false,
  };

  inputAdded = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  getRepos = () => {
    axios
      .get(
        `https://api.github.com/users/${this.state.inputVal}/repos?per_page=${this.state.repos_count}&sort=${this.state.repos_sort}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
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
      this.setState({ isLoading: true, isClicked: true });
      await axios
        .get(
          `https://api.github.com/users/${this.state.inputVal}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        )
        .then((res) => {
          this.getRepos();
          this.setState({
            profileData: res.data,
            isLoading: false,
          });
          console.log('response', this.state.profileData);
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          console.log(err.message);
        });
    }
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
            <Button variant="dark" className="mt-3" onClick={this.btnClicked}>
              Search
            </Button>
          </Card>
        </Container>
        {this.state.isClicked ? (
          this.state.isLoading ? (
            <Container className="mt-3">
              <Card>
                <div className="loadingImg">
                  <img src={Spinner} alt="loader" />
                </div>
              </Card>
            </Container>
          ) : (
            <Github
              profileData={this.state.profileData}
              reposData={this.state.reposData}
            />
          )
        ) : null}
      </>
    );
  }
}

export default Ui;
