import React from "react";
import Button from "../Buttons/DefaultButton";
import * as S from "./style";

export default ({
  active,
  data,
  onClick,
  haveActions,
  addButtonContent,
  positionButtonContent,
  togglePopup
}) => {
  return (
    <S.ListContainer>
      {haveActions === false ? null : (
        <S.ActionsContainer>
          <Button onClick={togglePopup}>{addButtonContent || "Add"}</Button>
          <Button>{positionButtonContent || "Position"}</Button>
        </S.ActionsContainer>
      )}
      <S.ScrollContainer>
        {data.map((el, index) => (
          <S.ListElement
            isActive={active === el.id}
            key={index}
            onClick={() => {
              onClick(el.id);
            }}
          >
            {el.name}
          </S.ListElement>
        ))}
      </S.ScrollContainer>
    </S.ListContainer>
  );
};
