import { createAction, props } from "@ngrx/store";

export enum SettingsActionTypes {
  SetDarkMode = '[Settings] SetDarkMode'
}

export const setDarkMode = createAction(
  SettingsActionTypes.SetDarkMode,
  props<{ value: boolean }>()
);
