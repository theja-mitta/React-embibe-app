import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Register extends React.Component {
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

    if (username === '' || password === '') {
      return this.setState({ error: true });
    }

    alert("you're registered successfully. yay!");
    this.props.addUser({username,password});
    this.props.history.push("/");
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
          <Form style={{   marginTop: '200px' }} error={error} onSubmit={this.onSubmit}>
            <Header as="h1">Register</Header>
            {error && <Message
              error={error}
              content="Enter username & password. Please!"
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
            <Form.Button type="submit">Register!</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
      );
    }
  }

export default connect(null,{ addUser })(Register);