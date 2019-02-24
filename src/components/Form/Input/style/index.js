import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #2d2d2d;
  width: 200px;
  height: 24px;
  color: #2d2d2d;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  text-transform: capitalize;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  text-transform: capitalize;
  color: #939393;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
