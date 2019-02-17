import React, { Component } from "react";
import studentsData from "../../config/Data_Students";
import StudentsList from "../../components/StudentsList";
import StudentInfo from "../../components/StudentInfo";

class StudentsPage extends Component {
  state = {
    students: null,
    info: null
  };
  componentDidMount = () => {
    this.setState({
      students: studentsData
    });
  };
  onStudentClick = id => {
    const info = this.state.students.find(el => el.id === id);
    this.setState({
      info: info
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.students ? (
          <StudentsList
            active={this.state.info ? this.state.info.id : null}
            students={this.state.students}
            onClick={this.onStudentClick}
          />
        ) : null}
        {this.state.info ? <StudentInfo info={this.state.info} /> : null}
      </React.Fragment>
    );
  }
}

export default StudentsPage;
