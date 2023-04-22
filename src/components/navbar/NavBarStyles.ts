import { NavProps } from "@component/interfaces/navInterface";
import styled from "styled-components";

export const NavArea = styled.button<NavProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 71.3px;
  width: 100%;
  background-color: ${(props) => (props.active ? "#212121" : "#ffffff")};
  cursor: pointer;
`;

export const NavText = styled.span<NavProps>`
  color: ${(props) => (props.active ? "#ffffff" : "#212121")};
`;