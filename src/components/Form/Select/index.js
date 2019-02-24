import React from "react";
import * as S from "./style";

export default ({ label, name, onChange, optionsArr, defaultVal }) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Select name={name} onChange={onChange} required>
        <option disabled selected value>
          {"-- select an option -- "}
        </option>
        {optionsArr.map((el, index) => (
          <option key={index} value={el.name}>
            {el.name}
          </option>
        ))}
      </S.Select>
    </S.InputContainer>
  );
};
