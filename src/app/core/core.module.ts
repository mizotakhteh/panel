import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from "./services/theme.service";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./state/reducers";
import { EffectsModule } from "@ngrx/effects";
import { SettingsEffect } from "./state/effects/settings.effect";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([SettingsEffect])
  ],
  providers: [
    ThemeService
  ]
})
export class CoreModule { }
