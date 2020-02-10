# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Setup Angular
Download Node JS
npm install -g @angular/cli
ng new `name_of_project` --style=scss
cd `name_of_project`
ng serve --open

### Setup Bootstrap
npm install bootstrap --save
npm install jquery --save
npm install popper.js --save

### Custom Bootstrap By SCSS
npm install --save node-sass
Update => style.scss

Example:
// Override default variables before the import
$body-bg: #000;
// Import Bootstrap and its default variables
@import '~bootstrap/scss/bootstrap.scss';

### Migrate CSS to SCSS
1.Update => angular.json
`"schematics": {`
    `"@schematics/angular:component": {`
        `"styleext": "scss"`
    `}`
`}`

2.Rename all file component in /src with `extention` and change styleUrls in `<...>.component.ts` file from .css -> .scss
npm i -g renamer
Get list: renamer -d --path-element ext --find css --replace scss **
Apply: renamer --path-element ext --find css --replace scss **

### Add Material Design
ng add @angular/material
Add Roboto Font (Auto generate with options when setup)
Import `X`Module to `App.module.ts`
Add tag `X` in UI

### CMD
mkdir A && cd A  : create new folder and move to this folder
cd . > A         : create new file
cd ../           : back 1 level folder
code .			 : open VSCode window