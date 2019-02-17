import React from "react";
import * as S from "./style";

export default ({ info }) => {
  return (
    <S.InfoContainer>
      <S.InfoCard>
        <S.InfoCardHeader>Student Info</S.InfoCardHeader>
        <S.InfoCardBody>
          <S.InfoRow>
            <S.InfoLabel>Name:</S.InfoLabel>
            <S.InfoText>{info.name}</S.InfoText>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>Specialization:</S.InfoLabel>
            <S.InfoText>{info.spec}</S.InfoText>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>Group:</S.InfoLabel>
            <S.InfoText>{info.group}</S.InfoText>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>Admission year:</S.InfoLabel>
            <S.InfoText>{info.syear}</S.InfoText>
          </S.InfoRow>
        </S.InfoCardBody>
      </S.InfoCard>
    </S.InfoContainer>
  );
};
