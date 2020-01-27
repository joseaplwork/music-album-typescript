# Albums

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Install dependencies

Run `npm install`

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Implementation decisions
_ Added very basic implementation of the challengue using `NGRX`
_ ITCSS + SCSS for styles
_ One way data biding with observables

## Missing Implementation
_ Error handling
_ Server request loaders
_ Store requested data in memory to prevent multiple server calls
_ Unit tests
_ I was looking the SOLID principle but couldn't apply it to angular, because of the DI from angular (which references classes instead of interfaces) in general I could have followed more strictly the pattern but it was my first app in angular and couldn't relate concepts properly
_ e2e tests
