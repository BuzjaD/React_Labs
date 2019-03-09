import React from "react";
import * as S from "./style";
import Input from "../Form/Input";
import Button from "../Buttons/DefaultButton";

class AddPopup extends React.Component {
  state = {
    name: ""
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
    if (errorsArr.length > 0) {
      this.setState({
        errors: errorsArr
      });
      return true;
    }
    return false;
  };

  addNewCompany = () => {
    const newCompanyObj = {
      name: this.state.name
    };
    const result = this.checkValidation(newCompanyObj);
    if (!result) {
      this.props.addCompany(newCompanyObj);
      this.props.closePopup();
    }
  };

  componentDidMount = () => {
    if (this.props.isEdit) {
      this.setState({
        name: this.props.data.name
      });
    }
  };

  editCurrentCompany = () => {
    const updatedStudObj = {
      id: this.props.data.id,
      name: this.state.name
    };
    const result = this.checkValidation(updatedStudObj);
    if (!result) {
      this.props.editCompany(updatedStudObj);
      this.props.closePopup();
    }
  };

  render() {
    const { name } = this.state;
    return (
      <S.PopupContainer>
        <S.Popup>
          <S.PopupHeader>
            <S.PopupText>{this.props.popupText || "New company"}</S.PopupText>
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
                      ? this.editCurrentCompany
                      : this.addNewCompany
                  }
                >
                  {this.props.buttonText || "Add company"}
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
