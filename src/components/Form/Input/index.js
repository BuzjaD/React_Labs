import React from "react";
import * as S from "./style";

export default ({ label, name, onChange, value }) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input name={name} onChange={onChange} value={value} required />
    </S.InputContainer>
  );
};
