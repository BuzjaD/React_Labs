import React from "react";
import Navbar from "../Navbar";
import * as S from "./style";

export default ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <S.MainContainer>{children}</S.MainContainer>
    </React.Fragment>
  );
};
