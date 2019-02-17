import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarElement = styled(NavLink)`
  display: inline-flex;
  padding: 20px 40px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #ffcece;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: #ffffff;
  }
`;
