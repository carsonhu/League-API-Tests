import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Button, ControlLabel, FormControl, InputGroup, DropdownButton, MenuItem } from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div>
          <div>
            <span className="container center-div">
              <Grid>
                <Row className="show-grid">
                  <Col xs={12}>
                    <form onSubmit={this.handleSubmit}>
                      <ControlLabel>Enter Summoner Name</ControlLabel>
                      <InputGroup>
                        <FormControl type="text"
                          value={this.state.value}
                          placeholder="Enter text"
                          onChange={this.handleChange}
                        />
                        <InputGroup.Button>
                          <Button type="submit">Submit</Button>
                        </InputGroup.Button>
                      </InputGroup>
                    </form>
                  </Col>
                </Row>
              </Grid>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
