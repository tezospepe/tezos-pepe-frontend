import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/app/store';
import { initialState } from '.';
import { themes } from '../themes';
// import { isSystemDark } from '../utils';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      // return isSystemDark ? themes.dark : themes.light;
      return themes.dark;
    }
    return themes[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);
