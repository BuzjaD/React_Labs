import React from "react";
import Events from "../CompanyEvents";
import * as S from "./style";

export default ({ info }) => {
  return (
    <S.InfoContainer>
      <S.InfoCard>
        <S.InfoCardHeader>
          <S.InfoCardHeaderText>Company Info</S.InfoCardHeaderText>
        </S.InfoCardHeader>
        <S.InfoCardBody>
          <S.MainInfoContainer>
            <S.NameContainer>{info.name}</S.NameContainer>
          </S.MainInfoContainer>
          <Events activeCompanyId={info.id} />
        </S.InfoCardBody>
      </S.InfoCard>
    </S.InfoContainer>
  );
};
