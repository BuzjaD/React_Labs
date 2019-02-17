import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background: #ffffff;
  overflow: auto;
  flex-shrink: 0;
`;
export const ListElement = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 0 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 12px;
  text-transform: capitalize;
  border-bottom: 1px solid #f4f4f4;
  color: ${props => (props.isActive ? "#000000" : "#b8b8b8")};
  box-shadow: ${props => (props.isActive ? "inset -5px 0 0 #fdc7c7" : null)};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #000000;
    box-shadow: inset -5px 0 0 #fdc7c7;
  }
`;
