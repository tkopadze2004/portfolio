import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IThemState } from '../state/theme-mode.state';

export const selectThemeState = createFeatureSelector<IThemState>('theme');

export const selectThemeMode = createSelector(
  selectThemeState,
  (state: IThemState) => state.mode
);
