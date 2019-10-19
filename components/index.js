import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import styles from '../style.css';
import Students from './Students';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// import { connect } from 'react-redux';
// import { changeLoggedIn } from './actions';


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
  }
  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({ error: false });

    if (!(username === 'theja' && password === 'embibe')) {
      return this.setState({ error: true });
    }

    alert("you're logged in. yay!");
    this.props.history.push("/Students");
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { error } = this.state;

    return (
      <Grid>
        <Grid.Column width={6} />
        <Grid.Column width={4}>
          <Form className={styles.loginForm} error={error} onSubmit={this.onSubmit}>
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
            <Form.Button type="submit">Go!</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;