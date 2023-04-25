import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  constructor() {
  }

  setDarkTheme(value: boolean) {
    document.body.classList.toggle("dark-mode", value);
  }
}
