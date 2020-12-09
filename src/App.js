import React, { Component } from 'react';
import Ui from './components/Ui';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg" className="head navbar-dark mb-3">
          <Container>
            <Navbar.Brand href="#">React Github Finder</Navbar.Brand>
          </Container>
        </Navbar>
        <Ui />
      </div>
    );
  }
}

export default App;
