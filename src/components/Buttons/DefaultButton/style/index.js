import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "22px"};
  border: ${props => props.border || "1px solid #ffffff"};
  box-sizing: border-box;
  border-radius: ${props => props.borderRadius || "5px"};
  flex-shrink: 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-style: normal;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: normal;
  font-size: ${props => props.fontSize || "10px"};
  background: ${props => props.background || "transparent"};
  letter-spacing: -0.04em;
  color: ${props => props.color || "#ffffff"};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${props =>
      props.activeBackground
        ? props.activeBackground
        : props.background || "#ca5252"};
    border: ${props =>
      props.activeBorder
        ? props.activeBorder
        : props.border || "1px solid #ffffff"};
  }
`;
