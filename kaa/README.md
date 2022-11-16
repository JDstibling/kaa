# Kaa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Explication du projet pas à pas 

Depuis la racine du projet, dans le fichier index.html, angular se positionne dans la balise "app-root".

Ensuite, dans le module principale du projet se trouve le fichier app.component.html où il y a :

<app-navbar></app-navbar>  La barre de navigation qui se trouvera donc sur toutes les pages de l'application (actuellement désactivé)

<router-outlet></router-outlet> (le routeur d'angular qui permet ici de définir à partir de où dans le module il affiche son contenu)

Un fichier identique existe pour centraliser les règles générales SCSS
