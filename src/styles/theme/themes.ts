export interface Theme {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  backgroundVariant: string;
  border: string;
  borderLight: string;
}

const darkTheme: Theme = {
  primary: 'rgba(30,31,40,1)',
  text: 'rgba(252,255,255,1)',
  textSecondary: 'rgba(252,253,252,1)',
  background: 'rgba(32, 80, 5, 1)',
  backgroundVariant: 'rgba(77, 146, 0, 1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export const themes = {
  dark: darkTheme,
};
