import React, { Component } from "react";
import studentsData from "../../config/Data_Students";
import StudentsList from "../../components/StudentsList";
import StudentInfo from "../../components/StudentInfo";
import AddStudentPopup from "../../components/AddStudentPopup";

class StudentsPage extends Component {
  state = {
    students: null,
    info: null,
    isAddStudent: false
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
  togglePopup = () => {
    this.setState(prev => ({
      isAddStudent: !prev.isAddStudent
    }));
  };
  closePopup = () => {
    this.setState({
      isAddStudent: false
    });
  };
  addStudent = newStudent => {
    const studentWithMaxId = this.state.students.reduce(function(prev, curr) {
      return prev.id > curr.id ? prev : curr;
    });
    newStudent.id = studentWithMaxId.id + 1;
    let newData = this.state.students;
    newData.push(newStudent);
    this.setState({
      students: newData
    });
  };
  render() {
    return (
      <React.Fragment>
        <AddStudentPopup
          isAddStudent={this.state.isAddStudent}
          closePopup={this.closePopup}
          addStudent={this.addStudent}
        />
        {this.state.students ? (
          <StudentsList
            active={this.state.info ? this.state.info.id : null}
            students={this.state.students}
            onClick={this.onStudentClick}
            togglePopup={this.togglePopup}
          />
        ) : null}
        {this.state.info ? <StudentInfo info={this.state.info} /> : null}
      </React.Fragment>
    );
  }
}

export default StudentsPage;
