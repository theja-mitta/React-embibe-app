import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import style from '../style.css';
import Students from './Students';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({ error: false });

    // Find if the array contains an object by comparing the property value
    if(this.props.users.users.some(user => user.username === username && user.password === password)){
        alert("you're logged in. yay!");
        this.props.history.push("/Students");
    } else{
        this.setState({ error: true });
    } 
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  handleRegister() {
    this.props.history.push("/Register");
  }

  render() {
    const { error } = this.state;

    return (
      <Grid>
        <Grid.Column width={6} />
        <Grid.Column width={4}>
          <Form style={{   marginTop: '200px' }} error={error} onSubmit={this.onSubmit}>
            <Header as="h1">Login</Header>
            {error && <Message
              error={error}
              content="That username/password is incorrect. Try again!"
            />}
            <Form.Input
              inline
              label="Username"
              name="username"
              onChange={this.handleChange}
            />
            <Form.Input
              inline
              label="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <Form.Button type="submit">Login!</Form.Button>
          </Form>
          <h4>Are you a new student?</h4>
          <Form.Button type="Click" onClick={this.handleRegister}>Register here!</Form.Button>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(App);