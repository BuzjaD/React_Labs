import React from "react";
import * as S from "./style";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from "../Buttons/DefaultButton";

class AddPopup extends React.Component {
  state = {
    name: null,
    spec: null,
    group: null,
    syear: null,
    errors: null
  };

  onChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  checkValidation = obj => {
    let errorsArr = [];
    if (obj.name === null || obj.name === " ") {
      errorsArr.push("Name required!");
    } else if (
      !/^[a-zA-Zа-яА-Я_.'][a-zA-Zа-яА-Я-_.' ]+[a-zA-Zа-яА-Я_.']?$/u.test(
        obj.name
      )
    ) {
      errorsArr.push("Uncorrect Name value!");
    }
    if (obj.spec === null || obj.spec === " ") {
      errorsArr.push("Specialization required!");
    }
    if (obj.group === null || obj.group === " ") {
      errorsArr.push("Group required!");
    } else if (!(parseInt(obj.group) >= 1 && parseInt(obj.group) <= 20)) {
      errorsArr.push("Uncorrect Group value!");
    }
    if (obj.syear === null || obj.syear === " ") {
      errorsArr.push("Admission year required!");
    } else if (
      obj.syear < new Date().getFullYear() - 10 ||
      obj.syear > new Date().getFullYear()
    ) {
      errorsArr.push("Uncorrect Admission year value!");
    }
    if (errorsArr.length > 0) {
      this.setState({
        errors: errorsArr
      });
      return true;
    }
    return false;
  };

  addNewStudent = () => {
    const newStudObj = {
      name: this.state.name,
      spec: this.state.spec,
      group: this.state.group,
      syear: this.state.syear
    };
    const result = this.checkValidation(newStudObj);
    if (!result) {
      this.props.addStudent(newStudObj);
      this.props.closePopup();
    }
  };

  componentDidMount = () => {
    if (this.props.isEdit) {
      this.setState({
        name: this.props.studData.name,
        spec: this.props.studData.spec,
        group: this.props.studData.group,
        syear: this.props.studData.syear
      });
    }
  };

  editCurrentStudent = () => {
    const updatedStudObj = {
      id: this.props.studData.id,
      name: this.state.name,
      spec: this.state.spec,
      group: this.state.group,
      syear: this.state.syear
    };
    const result = this.checkValidation(updatedStudObj);
    if (!result) {
      this.props.editStudent(updatedStudObj);
      this.props.closePopup();
    }
  };

  render() {
    const { name, group, syear, spec } = this.state;
    return (
      <S.PopupContainer>
        <S.Popup>
          <S.PopupHeader>
            <S.PopupText>New student</S.PopupText>
            <Button
              color={"#FF5C5C"}
              background={"none"}
              width={"auto"}
              border={"none"}
              onClick={this.props.closePopup}
            >
              close
            </Button>
          </S.PopupHeader>
          <S.PopupBody>
            <S.PopupForm>
              <Input
                label={"Name"}
                name={"name"}
                onChange={this.onChange}
                value={name}
              />
              <Select
                label={"Specialization"}
                name={"spec"}
                onChange={this.onChange}
                optionsArr={[
                  { name: "ISiT" },
                  { name: "POIT" },
                  { name: "DEIVY" },
                  { name: "POIBMS" }
                ]}
                value={spec}
              />
              <Input
                label={"Group"}
                name={"group"}
                onChange={this.onChange}
                value={group}
              />
              <Input
                label={"Admission year"}
                name={"syear"}
                value={syear}
                onChange={this.onChange}
              />
              {this.state.errors
                ? this.state.errors.map((err, index) => (
                    <S.Error key={index}>{err}</S.Error>
                  ))
                : null}
              <S.PopupSubmitBtnContainer>
                <Button
                  color={"#FFFFFF"}
                  background={"#FF7373"}
                  width={"200px"}
                  height={"35px"}
                  border={"none"}
                  borderRadius={"5px"}
                  fontSize={"12px"}
                  fontWeight={"bold"}
                  type={"button"}
                  onClick={
                    this.props.isEdit
                      ? this.editCurrentStudent
                      : this.addNewStudent
                  }
                >
                  Add student
                </Button>
              </S.PopupSubmitBtnContainer>
            </S.PopupForm>
          </S.PopupBody>
        </S.Popup>
      </S.PopupContainer>
    );
  }
}

export default AddPopup;
