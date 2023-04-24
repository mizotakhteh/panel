import { Component } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'panel';

  constructor(public mediaObserver: MediaObserver) { }
}
