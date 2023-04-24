import styled from "styled-components";
import { NavPage } from "../types";
import { NavItem } from "./styles";
import { StyleConstants } from "src/styles/style-constants";

export const NavContent = styled.div`
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

export const NavOptions = () => {
  const pages: NavPage[] = [
    {
      url: '#',
      name: 'Farm',
      alt: 'Farm',
    },
    {
      url: '#',
      name: 'Buy',
      alt: 'Buy',
    },
    {
      url: '#',
      name: 'Pepe DAO',
      alt: 'DAO',
    },
  ];

  return (
    <NavContent>
      {pages.map((page, index) => (
        <NavItem
          key={index}
          href={page.url}
          target="_blank"
          title={page.alt}
          rel="noopener noreferrer"
        >
          {page.name}
        </NavItem>
      ))}
    </NavContent>
  );
}