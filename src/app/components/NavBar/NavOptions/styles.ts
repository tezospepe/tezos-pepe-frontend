import styled from "styled-components";

export const NavItem = styled.a`
  width: fit-content;
  padding: 0.25rem 0.75rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${p => p.theme.text};
  text-decoration: none;
`;