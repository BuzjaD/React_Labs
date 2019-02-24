import React from "react";
import Button from "../Buttons/DefaultButton";
import * as S from "./style";

export default ({ active, students, onClick, isAddStudent, togglePopup }) => {
  return (
    <S.ListContainer>
      <S.ActionsContainer>
        <Button onClick={togglePopup}>Add student</Button>
        <Button>Position</Button>
      </S.ActionsContainer>
      <S.ScrollContainer>
        {students.map((student, index) => (
          <S.ListElement
            isActive={active === student.id}
            key={index}
            onClick={() => {
              onClick(student.id);
            }}
          >
            {student.name}
          </S.ListElement>
        ))}
      </S.ScrollContainer>
    </S.ListContainer>
  );
};
