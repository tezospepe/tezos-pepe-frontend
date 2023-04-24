import 'styled-components';
import { Theme } from './themes';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
