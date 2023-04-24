import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getThemeFromStorage } from '../utils';
import { ThemeKeyType, ThemeState } from './types';

export const initialState: ThemeState = {
  selected: getThemeFromStorage() || 'system',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeKeyType>) {
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions } = themeSlice;
export default themeSlice.reducer;