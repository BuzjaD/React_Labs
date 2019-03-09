import React, { Component } from "react";
import studentsData from "../../config/Data_Students";
import companiesData from "../../config/Data_Companies";
import MenuList from "../../components/StudentsList";
import CompanyInfo from "../../components/CompanyInfo";
import * as L from "./style";

class StudentsPage extends Component {
  state = {
    students: null,
    info: null,
    companies: null
  };
  componentDidMount = () => {
    this.setState({
      students: studentsData,
      companies: companiesData
    });
  };
  onStudentClick = id => {
    const info = this.state.companies.find(el => el.id === id);
    this.setState({
      info: info
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.companies ? (
          <MenuList
            active={this.state.info ? this.state.info.id : null}
            students={this.state.companies}
            onClick={this.onStudentClick}
            togglePopup={this.togglePopup}
            haveActions={false}
          />
        ) : null}
        {this.state.info ? (
          <CompanyInfo info={this.state.info} />
        ) : (
          <L.Empty>Choose company</L.Empty>
        )}
      </React.Fragment>
    );
  }
}

export default StudentsPage;
