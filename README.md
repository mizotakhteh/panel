# Panel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Development Processes

### Step 1: Make a new project

```shell
# Creating a new angular project 
ng new panel --defaults --style=scss

cd panel
```

### Step 2: Install material design

```shell
# https://material.angular.io/guide/getting-started#install-angular-material
ng add @angular/material --defaults

# Creating a flat module for importing Material Design dependencies
ng g m shared/material --flat
```

### Step 3: Install NgRx

```shell
ng add @ngrx/store@latest

ng add @ngrx/store-devtools@latest

ng add @ngrx/effects@latest
```
