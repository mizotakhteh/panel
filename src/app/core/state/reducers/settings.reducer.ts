import { createReducer, on } from "@ngrx/store";
import { SettingsState } from "../states/settings.state";
import { setDarkMode } from "../actions/settings.action";

const initialState: SettingsState = {
  darkMode: false
}

export const settingsReducer = createReducer(
  initialState,
  on(setDarkMode, (state, {value}) => ({...state, darkMode: value}))
)
