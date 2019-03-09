import React, { Component } from "react";
import studentsData from "../../config/Data_Students";
import companiesData from "../../config/Data_Companies";
import MenuList from "../../components/StudentsList";
import CompanyInfo from "../../components/CompanyInfo";
import CompanyPopup from "../../components/CompanyPopup";
import * as L from "./style";

class StudentsPage extends Component {
  state = {
    students: null,
    info: null,
    companies: null,
    isAddCompany: false,
    isEditCompany: false
  };
  componentDidMount = () => {
    this.setState({
      students: studentsData,
      companies: companiesData
    });
  };
  onCompanyClick = id => {
    const info = this.state.companies.find(el => el.id === id);
    this.setState({
      info: info
    });
  };
  togglePopup = () => {
    this.setState(prev => ({
      isAddCompany: !prev.isAddCompany
    }));
  };
  toggleEditPopup = () => {
    this.setState(prev => ({
      isEditCompany: !prev.isEditCompany
    }));
  };
  closeEditPopup = () => {
    this.setState({
      isEditCompany: false
    });
  };
  closePopup = () => {
    this.setState({
      isAddCompany: false
    });
  };
  addCompany = newCompany => {
    const companyWithMaxId = this.state.companies.reduce(function(prev, curr) {
      return prev.id > curr.id ? prev : curr;
    });
    newCompany.id = companyWithMaxId.id + 1;
    let newData = this.state.companies;
    newData.push(newCompany);
    this.setState({
      companies: newData
    });
  };
  editCompany = newCompanyData => {
    let newData = [...this.state.companies];
    let userId = this.state.companies.findIndex(
      stud => stud.id === newCompanyData.id
    );
    newData[userId] = newCompanyData;

    this.setState({
      companies: newData,
      info: newCompanyData
    });
  };
  deleteCompany = companyId => {
    let newData = [...this.state.companies];
    let delCompanyId = this.state.companies.findIndex(
      stud => stud.id === companyId
    );
    newData.splice(delCompanyId, 1);
    this.setState({
      companies: newData,
      info: null
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isAddCompany ? (
          <CompanyPopup
            closePopup={this.closePopup}
            addCompany={this.addCompany}
          />
        ) : null}
        {this.state.isEditCompany ? (
          <CompanyPopup
            isEdit={true}
            data={this.state.info}
            closePopup={this.closeEditPopup}
            editCompany={this.editCompany}
            popupText={"Edit company"}
            buttonText={"Save changes"}
          />
        ) : null}
        {this.state.companies ? (
          <MenuList
            active={this.state.info ? this.state.info.id : null}
            data={this.state.companies}
            onClick={this.onCompanyClick}
            togglePopup={this.togglePopup}
            addButtonContent={"Add company"}
            positionButtonContent={"Position"}
          />
        ) : null}
        {this.state.info ? (
          <CompanyInfo
            info={this.state.info}
            toggleEditPopup={this.toggleEditPopup}
            deleteAction={this.deleteCompany}
          />
        ) : (
          <L.Empty>Choose company</L.Empty>
        )}
      </React.Fragment>
    );
  }
}

export default StudentsPage;
