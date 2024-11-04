import { createAction, props } from '@ngrx/store';
import { TMode } from '../../core/types/theme-mode.type';

export const setThemeMode = createAction(
  '[Theme] Set Mode',
  props<{ mode: TMode }>()
);
