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
  text: 'rgb(80, 150, 36)',
  textSecondary: 'rgba(252,253,252,1)',
  background: 'rgba(15, 15, 15,1)',
  backgroundVariant: 'rgb(80, 150, 36)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export const themes = {
  dark: darkTheme,
};
