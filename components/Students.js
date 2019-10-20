import React from 'react';
import { get } from 'axios';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import '../style.css';
import Student from './Student';
import { connect } from 'react-redux';
import { getStudentsData } from '../actions';

class Students extends React.Component {

  componentDidMount() {
    this.props.getStudentsData();
  }

  getStudents() {
    if(!this.props.students) {
      return <div> Loading!! </div>;
    } else {
      return (
          <Grid>
            <Grid.Column width={6} />
            <Grid.Column width={4}>
            {Object.keys(this.props.students).map(key => (
              <Student {...this.props.students[key]} id={key} history={this.props.history}/>
            ))}
            </Grid.Column>
          </Grid>
        )
      }
  }

  render() {
      return (
        <div>
          {this.getStudents()}
        </div>
      );
  }

}

const mapStateToProps = state => {
  return { students: state.students.data };
};

export default connect(mapStateToProps, { getStudentsData })(Students);