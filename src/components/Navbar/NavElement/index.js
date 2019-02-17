import React from "react";
import * as S from "./style";

export default ({ link, children }) => {
  return <S.NavbarElement to={link}>{children}</S.NavbarElement>;
};
