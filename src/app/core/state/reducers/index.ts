import { ActionReducerMap } from "@ngrx/store";
import { CoreState } from "../states";
import { settingsReducer } from "./settings.reducer";

export const reducers: ActionReducerMap<CoreState> = {
  settings: settingsReducer
}
