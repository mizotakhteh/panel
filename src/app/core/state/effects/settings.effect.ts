import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ThemeService } from "../../services/theme.service";
import { SettingsActionTypes } from "../actions/settings.action";
import { tap } from "rxjs";

@Injectable()
export class SettingsEffect {
  constructor(private actions$: Actions, private themeService: ThemeService) {
  }

  setDarkMode$ = createEffect(() => this.actions$.pipe(
    ofType(SettingsActionTypes.SetDarkMode),
    tap(({value}) => this.themeService.setDarkTheme(value))
  ), {dispatch: false});
}
