import { NavLogo } from './NavLogo';
import { NavOptions } from './NavOptions';
import { NavBarWrapper } from './styles';

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavLogo />
      <NavOptions />
    </NavBarWrapper>
  );
};
