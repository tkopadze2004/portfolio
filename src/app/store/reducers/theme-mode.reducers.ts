import { createReducer, on } from '@ngrx/store';
import { TMode } from '../../core/types/theme-mode.type';
import { setThemeMode } from '../actions/theme-mode.actions';
import { IThemState } from '../state/theme-mode.state';



export const initialThemeState: IThemState = {
  mode: 'dark',
};

export const themeReducer = createReducer(
  initialThemeState,
  on(setThemeMode, (state, { mode }) => ({
    ...state,
    mode,
  }))
);
