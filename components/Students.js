import React from 'react';
import { get } from 'axios';


export default class Students extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }


  getUsers() {
    get('https://api.myjson.com/bins/1dlper')
      .then(({ data }) => {
        console.log(data);
        const { students } = data;
        this.setState({
          students: data.students
        });
      });
  }

  getStudents() {
    if(this.state.students = []) {
        // students.map((student,index) => console.log(student[index]));
        //  students.each(obj, function(k, v) {
        //   result += k + " , " + v + "\n";
        // });
        // this.state.students.forEach(function(element, index, array) {
        //   console.log(element);
        // });
      return <div> Loading!! </div>;
    } else {
      return <div> data </div>;
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