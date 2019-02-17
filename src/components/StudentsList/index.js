import React from "react";
import * as S from "./style";

export default ({ active, students, onClick }) => {
  return (
    <S.ListContainer>
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
    </S.ListContainer>
  );
};
