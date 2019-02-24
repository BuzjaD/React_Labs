import React from "react";
import * as S from "./style";

export default ({ label, name, onChange }) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input name={name} onChange={onChange} required />
    </S.InputContainer>
  );
};
