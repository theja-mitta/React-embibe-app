import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Grid, Form, Header, Message } from 'semantic-ui-react';


class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    }
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({
      id: params.studentId
    });
  }

  handleGoBack() {
    this.props.history.push("/Students");
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={6} />
        <Grid.Column width={4}>
          <Card>
              {this.state.id ? <Card.Content><Card.Header>{this.props.students[this.state.id].name}</Card.Header><Card.Description>{this.props.students[this.state.id].class}</Card.Description><Card.Description>{this.props.students[this.state.id].rollNo}</Card.Description></Card.Content> : <span>Loading !!!</span>}
          </Card>
         </Grid.Column>
         <Grid.Column width={6}>
            <Form.Button onClick={this.handleGoBack}>Go back!</Form.Button>
         </Grid.Column>
      </Grid>);
  }
}


const mapStateToProps = state => {
  return { students:  state.students.data };
};

export default connect(mapStateToProps)(StudentInfo);