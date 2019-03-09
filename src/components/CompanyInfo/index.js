import React from "react";
import Events from "../CompanyEvents";
import Button from "../Buttons/DefaultButton";
import * as S from "./style";

export default ({ info, toggleEditPopup, deleteAction }) => {
  return (
    <S.InfoContainer>
      <S.InfoCard>
        <S.InfoCardHeader>
          <S.InfoCardHeaderText>Company Info</S.InfoCardHeaderText>
          <S.InfoCardHeaderButtonsContainer>
            <Button
              color={"#A4A4A4"}
              border={"1px solid #A4A4A4"}
              background={"#FFFFFF"}
              activeBackground={"#FFFFFF"}
              width={"105px"}
              height={"100%"}
              onClick={toggleEditPopup}
            >
              Edit company
            </Button>
            <Button
              background={"#FD4949"}
              border={"1px solid #FD4949"}
              width={"105px"}
              height={"100%"}
              onClick={() => {
                deleteAction(info.id);
              }}
            >
              Delete company
            </Button>
          </S.InfoCardHeaderButtonsContainer>
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
