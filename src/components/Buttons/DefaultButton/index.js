import React from "react";
import * as S from "./style";

export default ({
  onClick,
  height,
  width,
  background,
  activeBackground,
  border,
  activeBorder,
  color,
  fontSize,
  fontWeight,
  type,
  children
}) => {
  return (
    <S.Button
      onClick={onClick}
      height={height}
      background={background}
      activeBackground={activeBackground}
      border={border}
      width={width}
      activeBorder={activeBorder}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      type={type}
    >
      {children}
    </S.Button>
  );
};
