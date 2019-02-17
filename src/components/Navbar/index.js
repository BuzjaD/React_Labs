import React from "react";
import NavElement from "./NavElement";
import * as S from "./style";

export default () => {
  return (
    <S.NavbarContainer>
      <NavElement link={"/students"}>Students</NavElement>
      <NavElement link={"/companies"}>Companies</NavElement>
      <NavElement link={"/events"}>Events</NavElement>
      <NavElement link={"/contacts"}>Contacts</NavElement>
    </S.NavbarContainer>
  );
};
