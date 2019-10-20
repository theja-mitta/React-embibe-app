import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class Student extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(id) {
    this.props.history.push(`/Students/${id}`);
  }

  render() {
    return (
      <Card id={this.props.id} onClick={() => this.onHandleClick(this.props.id)} className="student-card">
        <Card.Content>
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Description>{this.props.class}</Card.Description>
        <Card.Description>{this.props.rollNo}</Card.Description>
       </Card.Content>
      </Card>
    );
  }
}

export default Student;