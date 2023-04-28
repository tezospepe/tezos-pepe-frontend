import styled from "styled-components";

export const NavItem = styled.a`
  width: fit-content;
  padding: 0.25rem 0.75rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${p => p.theme.text};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 60px;
  padding: 8px 24px;
  background-color: ${p => p.theme.text};

  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  display: none;

  :hover {
    display: flex;
  }

  a {
    color: ${p => p.theme.background}
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 40px;
  
  :hover > div {
    display: flex;
  }
`;