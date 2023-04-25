import { Component } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";
import { CoreState } from "./core/state/states";
import { Store } from "@ngrx/store";
import { setDarkMode } from "./core/state/actions/settings.action";
import { Observable } from "rxjs";
import { selectDarkMode } from "./core/state/selectors/settings.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panel';
  darkMode$: Observable<Boolean>;

  constructor(public mediaObserver: MediaObserver, public store: Store<{ core: CoreState }>) {
    this.darkMode$ = store.select(selectDarkMode);
  }

  setDarkMode(value: boolean) {
    this.store.dispatch(setDarkMode({value}));
  }
}
