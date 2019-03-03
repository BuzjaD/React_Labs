import React from "react";
import Button from "../Buttons/DefaultButton";
import Events from "../Events";
import * as S from "./style";

export default ({ info, toggleEditPopup, deleteStudent }) => {
  return (
    <S.InfoContainer>
      <S.InfoCard>
        <S.InfoCardHeader>
          <S.InfoCardHeaderText>Student Info</S.InfoCardHeaderText>
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
              Edit student
            </Button>
            <Button
              background={"#FD4949"}
              border={"1px solid #FD4949"}
              width={"105px"}
              height={"100%"}
              onClick={() => {
                deleteStudent(info.id);
              }}
            >
              Delete student
            </Button>
          </S.InfoCardHeaderButtonsContainer>
        </S.InfoCardHeader>
        <S.InfoCardBody>
          <S.MainInfoContainer>
            <S.ColumnForPhoto>
              <S.StudentPhoto>Photo</S.StudentPhoto>
            </S.ColumnForPhoto>
            <S.ColumnForInfo>
              <S.StudentInfo>
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
              </S.StudentInfo>
            </S.ColumnForInfo>
          </S.MainInfoContainer>
          <Events activeStudentId={info.id} />
        </S.InfoCardBody>
      </S.InfoCard>
    </S.InfoContainer>
  );
};
