import { createGlobalStyle } from 'styled-components';
import DarumaDropOne from 'src/app/assets/darumadropone-regular-webfont.woff';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Darumadrop One';
    src: 
      url(${DarumaDropOne}) format('woff');
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
    font-family: 'Darumadrop One', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    background-color: ${p => p.theme.backgroundVariant}
  }

  body.fontLoaded {
    font-family: 'Darumadrop One', Helvetica, Arial, sans-serif;
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