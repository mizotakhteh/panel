import { CoreState } from "../states";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCore = createFeatureSelector<CoreState>('core');
export const selectSettings = createSelector(
  selectCore,
  core => core.settings
)

export const selectDarkMode = createSelector(
  selectSettings,
  settings => settings.darkMode
)
