import { createGlobalStyle } from 'styled-components';
import DarumaDropOne from './app/assets/DarumaDropOne.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Daruma Drop One';
    src: 
      local('Daruma Drop One'), 
      local('DarumaDropOne'),
      url(${DarumaDropOne}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Daruma Drop One', Helvetica, Arial, sans-serif;
    font-size: 1rem;
  }

  body.fontLoaded {
    font-family: 'Daruma Drop One', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }
`;