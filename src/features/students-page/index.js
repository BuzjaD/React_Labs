import React, { Component } from "react";
import studentsData from "../../config/Data_Students";
import StudentsList from "../../components/StudentsList";
import StudentInfo from "../../components/StudentInfo";
import AddStudentPopup from "../../components/AddStudentPopup";
import * as L from "./style";

class StudentsPage extends Component {
  state = {
    students: null,
    info: null,
    isAddStudent: false,
    isEditStudent: false
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
  toggleEditPopup = () => {
    this.setState(prev => ({
      isEditStudent: !prev.isEditStudent
    }));
  };
  closeEditPopup = () => {
    this.setState({
      isEditStudent: false
    });
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
  editStudent = newStudentData => {
    let newData = [...this.state.students];
    let userId = this.state.students.findIndex(
      stud => stud.id === newStudentData.id
    );
    newData[userId] = newStudentData;

    this.setState({
      students: newData,
      info: newStudentData
    });
  };
  deleteStudent = studentId => {
    let newData = [...this.state.students];
    let delStudentId = this.state.students.findIndex(
      stud => stud.id === studentId
    );
    newData.splice(delStudentId, 1);
    this.setState({
      students: newData,
      info: null
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isAddStudent ? (
          <AddStudentPopup
            closePopup={this.closePopup}
            addStudent={this.addStudent}
          />
        ) : null}
        {this.state.isEditStudent ? (
          <AddStudentPopup
            isEdit={true}
            studData={this.state.info}
            closePopup={this.closeEditPopup}
            editStudent={this.editStudent}
          />
        ) : null}
        {this.state.students ? (
          <StudentsList
            active={this.state.info ? this.state.info.id : null}
            students={this.state.students}
            onClick={this.onStudentClick}
            togglePopup={this.togglePopup}
          />
        ) : null}
        {this.state.info ? (
          <StudentInfo
            info={this.state.info}
            toggleEditPopup={this.toggleEditPopup}
            deleteStudent={this.deleteStudent}
          />
        ) : (
          <L.Empty>Choose student</L.Empty>
        )}
      </React.Fragment>
    );
  }
}

export default StudentsPage;
